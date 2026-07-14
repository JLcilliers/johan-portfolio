type Props = {
  monthly: number[]
  height?: number
}

// Small trend chart on a cream panel; decorative, the numbers around it
// carry the information.
const W = 240
const H = 64
const PAD = 7

export function Sparkline({ monthly, height = 56 }: Props) {
  const max = Math.max(...monthly, 1)
  const innerW = W - PAD * 2
  const innerH = H - PAD * 2
  const x = (i: number) => PAD + (i / (monthly.length - 1)) * innerW
  const y = (v: number) => PAD + innerH - (v / max) * innerH

  const points = monthly.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`)
  const line = `M${points.join('L')}`
  const area = `${line}L${x(monthly.length - 1).toFixed(1)},${(PAD + innerH).toFixed(1)}L${PAD},${(PAD + innerH).toFixed(1)}Z`
  const last = monthly[monthly.length - 1]

  return (
    <div className="rounded-[3px] bg-cream px-3 py-2.5" aria-hidden="true">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height={height}
        preserveAspectRatio="none"
        className="block"
      >
        <path d={area} fill="var(--color-ink)" fillOpacity="0.1" />
        <path
          d={line}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle cx={x(monthly.length - 1)} cy={y(last)} r="4" fill="var(--color-accent)" />
      </svg>
    </div>
  )
}
