import { useEffect, useRef } from 'react'

export default function ParticleBackground({
  primary = '#22d3ee',
  lineColor = 'rgba(129, 140, 248, 0.35)',
  linkDistance = 130,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    let particles = []
    let running = true
    const mouse = { x: null, y: null }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const init = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (!w || !h) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((w * h) / 15000)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.7 + 0.7,
      }))
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        if (mouse.x !== null && !reduced) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < 150 && d > 0.01) {
            const force = ((150 - d) / 150) * 0.02
            p.vx += (dx / d) * force
            p.vy += (dy / d) * force
          }
        }

        const speed = Math.hypot(p.vx, p.vy)
        if (speed > 1.2) {
          p.vx = (p.vx / speed) * 1.2
          p.vy = (p.vy / speed) * 1.2
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(165, 180, 252, 0.9)'
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < linkDistance) {
            const alpha = (1 - d / linkDistance) * 0.45
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = alpha > 0.2 ? `rgba(56, 189, 248, ${alpha})` : `rgba(99, 102, 241, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      if (mouse.x !== null && !reduced) {
        for (const p of particles) {
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y)
          if (d < 160) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - d / 160) * 0.6})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = primary
        ctx.shadowColor = primary
        ctx.shadowBlur = 12
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const loop = () => {
      if (!running) return
      draw()
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduced) {
          running = true
          if (!raf) raf = requestAnimationFrame(loop)
        } else {
          running = false
          cancelAnimationFrame(raf)
          raf = 0
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    const onVis = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
        raf = 0
      } else {
        running = true
        if (!raf) raf = requestAnimationFrame(loop)
      }
    }

    const onResize = () => {
      init()
      if (reduced) draw()
    }

    init()
    if (reduced) {
      draw()
    } else {
      running = true
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVis)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [primary, lineColor, linkDistance])

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />
}
