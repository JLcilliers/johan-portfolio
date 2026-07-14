import { monthLabels } from '@/data/clients'

const STEPS = [
  10, 20, 25, 50, 100, 150, 200, 250, 500, 1000, 2000, 2500, 5000, 10000, 20000, 25000, 50000,
  100000, 200000,
]

function pickStep(max: number): number {
  for (const step of STEPS) {
    if (max / step <= 6) return step
  }
  return STEPS[STEPS.length - 1]
}

function formatTick(value: number): string {
  if (value >= 1000) return `${value / 1000}k`
  return String(value)
}

type Props = {
  clientName: string
  startMonth: string
  monthly: number[]
}

// Fixed drawing space; the svg scales down responsively via viewBox.
const W = 720
const H = 280
const M = { top: 14, right: 18, bottom: 30, left: 48 }

export function ClicksChart({ clientName, startMonth, monthly }: Props) {
  const labels = monthLabels(startMonth, monthly.length)
  const max = Math.max(...monthly)
  const step = pickStep(max)
  const yMax = Math.ceil(max / step) * step || step

  const innerW = W - M.left - M.right
  const innerH = H - M.top - M.bottom
  const x = (i: number) => M.left + (i / (monthly.length - 1)) * innerW
  const y = (v: number) => M.top + innerH - (v / yMax) * innerH

  const linePoints = monthly.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`)
  const linePath = `M${linePoints.join('L')}`
  const areaPath = `${linePath}L${x(monthly.length - 1).toFixed(1)},${y(0)}L${x(0).toFixed(1)},${y(0)}Z`

  const ticks: number[] = []
  for (let v = 0; v <= yMax; v += step) ticks.push(v)

  const first = monthly[0]
  const last = monthly[monthly.length - 1]

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label={`Line chart of monthly organic clicks for ${clientName}, from ${first.toLocaleString('en-US')} in 20${labels[0]} to ${last.toLocaleString('en-US')} in 20${labels[labels.length - 1]}`}
    >
      {ticks.map((v) => (
        <g key={v}>
          <line
            x1={M.left}
            x2={W - M.right}
            y1={y(v)}
            y2={y(v)}
            stroke="var(--color-rule)"
            strokeWidth="1"
          />
          <text
            x={M.left - 8}
            y={y(v) + 3.5}
            textAnchor="end"
            fontSize="11"
            fill="var(--color-mute)"
          >
            {formatTick(v)}
          </text>
        </g>
      ))}
      <path d={areaPath} fill="var(--color-ink)" fillOpacity="0.08" />
      <path
        d={linePath}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle
        cx={x(monthly.length - 1)}
        cy={y(last)}
        r="5"
        fill="var(--color-accent-mid)"
      />
      {labels.map((label, i) => (
        <text
          key={label}
          x={x(i)}
          y={H - 8}
          textAnchor="middle"
          fontSize="10"
          fill="var(--color-mute)"
          className={i % 2 === 1 ? 'chart-tick-alt' : undefined}
        >
          {label}
        </text>
      ))}
    </svg>
  )
}
