const dimensions = [
  { key: 'earthiness', label: 'Earth', color: '#3D2B1F' },
  { key: 'spice', label: 'Spice', color: '#A0522D' },
  { key: 'floral', label: 'Floral', color: '#DAA520' },
  { key: 'sweetness', label: 'Sweet', color: '#35817b' },
  { key: 'bitterness', label: 'Bitter', color: '#6f3720' },
  { key: 'body', label: 'Body', color: '#9a6d4e' },
]

export default function FlavorProfile({ profile }) {
  const numDimensions = dimensions.length
  const centerX = 100
  const centerY = 100
  const maxRadius = 80

  const getPoint = (index, value) => {
    const angle = (Math.PI * 2 * index) / numDimensions - Math.PI / 2
    const radius = (value / 100) * maxRadius
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    }
  }

  const polygonPoints = dimensions
    .map((dim, i) => {
      const point = getPoint(i, profile[dim.key])
      return `${point.x},${point.y}`
    })
    .join(' ')

  const gridLevels = [25, 50, 75, 100]

  return (
    <div className="w-full max-w-[240px] mx-auto">
      <svg viewBox="0 0 200 200" className="w-full">
        {/* Grid circles */}
        {gridLevels.map((level) => {
          const points = dimensions
            .map((_, i) => {
              const p = getPoint(i, level)
              return `${p.x},${p.y}`
            })
            .join(' ')
          return (
            <polygon
              key={level}
              points={points}
              fill="none"
              stroke="#3D2B1F"
              strokeWidth="0.3"
              opacity="0.15"
            />
          )
        })}

        {/* Axis lines */}
        {dimensions.map((_, i) => {
          const p = getPoint(i, 100)
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={p.x}
              y2={p.y}
              stroke="#3D2B1F"
              strokeWidth="0.3"
              opacity="0.15"
            />
          )
        })}

        {/* Data polygon */}
        <polygon
          points={polygonPoints}
          fill="#A0522D"
          fillOpacity="0.15"
          stroke="#A0522D"
          strokeWidth="1.5"
          className="transition-all duration-700"
        />

        {/* Data points */}
        {dimensions.map((dim, i) => {
          const point = getPoint(i, profile[dim.key])
          return (
            <circle
              key={dim.key}
              cx={point.x}
              cy={point.y}
              r="3"
              fill={dim.color}
              className="transition-all duration-700"
            />
          )
        })}

        {/* Labels */}
        {dimensions.map((dim, i) => {
          const labelPoint = getPoint(i, 120)
          return (
            <text
              key={dim.key}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-espresso-700 text-[7px] font-sans font-medium uppercase"
            >
              {dim.label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
