import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFaviconUrl(domain: string, size: number = 64) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}
