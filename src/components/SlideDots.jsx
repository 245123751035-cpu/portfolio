export default function SlideDots({ ids, active, onSelect }) {
  return (
    <div
      className={`slide-dots${active === 'top' ? ' over-dark' : ''}`}
      role="tablist"
      aria-label="Sections"
    >
      {ids.map((id) => (
        <button
          key={id}
          role="tab"
          aria-selected={active === id}
          aria-label={id}
          className={`slide-dot${active === id ? ' active' : ''}`}
          onClick={() => onSelect(id)}
        />
      ))}
    </div>
  )
}
