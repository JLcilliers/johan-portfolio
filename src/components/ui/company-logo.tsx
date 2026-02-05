import Image from 'next/image'
import { getFaviconUrl } from '@/lib/utils'

interface CompanyLogoProps {
  domain: string
  company: string
  size?: number
  className?: string
}

export function CompanyLogo({ domain, company, size = 32, className }: CompanyLogoProps) {
  return (
    <Image
      src={getFaviconUrl(domain, size)}
      alt={`${company} logo`}
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  )
}
