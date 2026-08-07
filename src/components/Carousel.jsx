import { useCallback, useEffect, useRef, useState } from 'react'

export default function Carousel({ slides, alt, aspectRatio = '16 / 10' }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)
  const count = slides.length

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta < -40) next()
    if (delta > 40) prev()
    touchStartX.current = null
  }

  if (count <= 1) {
    return (
      <div className="carousel" style={{ aspectRatio }}>
        <div className="carousel-track">
          {slides[0] && <Media src={slides[0]} alt={alt} />}
        </div>
      </div>
    )
  }

  return (
    <div
      className="carousel"
      style={{ aspectRatio }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div className="carousel-slide" key={i}>
            <Media src={src} alt={`${alt} (slide ${i + 1})`} />
          </div>
        ))}      </div>

      {count > 1 && (
        <>
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button
            className="carousel-btn carousel-btn-next"
            onClick={next}
            aria-label="Next slide"
          >
            &#8250;
          </button>
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function Media({ src, alt }) {
  const slide = typeof src === 'string' ? { src } : src
  const media =
    slide.src.endsWith('.mp4') ? (
      <video src={slide.src} controls muted playsInline preload="metadata" />
    ) : (
      <img src={slide.src} alt={alt} loading="lazy" />
    )
  return slide.href ? (
    <a
      className="media-link"
      href={slide.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${alt} — open PDF`}
    >
      {media}
      <span className="media-badge">View PDF &#8599;</span>
    </a>
  ) : (
    media
  )
}
