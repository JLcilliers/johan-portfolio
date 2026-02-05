'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface SwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  leftLabel?: string
  rightLabel?: string
  className?: string
}

export function Switch({ checked, onCheckedChange, leftLabel, rightLabel, className }: SwitchProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {leftLabel && (
        <span className={cn('text-sm font-medium transition-colors', !checked ? 'text-white' : 'text-zinc-500')}>
          {leftLabel}
        </span>
      )}
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={cn(
          'relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900',
          checked ? 'bg-blue-600' : 'bg-zinc-700'
        )}
      >
        <span
          className={cn(
            'pointer-events-none block h-6 w-6 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200',
            checked ? 'translate-x-5' : 'translate-x-0'
          )}
        />
      </button>
      {rightLabel && (
        <span className={cn('text-sm font-medium transition-colors', checked ? 'text-white' : 'text-zinc-500')}>
          {rightLabel}
        </span>
      )}
    </div>
  )
}
