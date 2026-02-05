import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-blue-600/20 text-blue-400',
        secondary: 'border-transparent bg-zinc-800 text-zinc-300',
        outline: 'border-zinc-700 text-zinc-400',
        seo: 'border-transparent bg-green-600/20 text-green-400',
        ai: 'border-transparent bg-purple-600/20 text-purple-400',
        technical: 'border-transparent bg-orange-600/20 text-orange-400',
        analytics: 'border-transparent bg-cyan-600/20 text-cyan-400',
        cro: 'border-transparent bg-yellow-600/20 text-yellow-400',
        leadership: 'border-transparent bg-rose-600/20 text-rose-400',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
