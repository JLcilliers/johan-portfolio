import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CompanyLogo } from '@/components/ui/company-logo'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import { products } from '@/content/products'
import { profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Full-stack products built by Johan Cilliers — SearchSignal and ExtractaLedger.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Products I Built</h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
            Full-stack applications designed, developed, and shipped — solving real problems for real users.
          </p>
        </div>
      </section>

      <Section className="pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {products.map((product) => (
              <Card key={product.slug} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <CardHeader className="lg:col-span-1 bg-zinc-900/50">
                    <div className="flex items-center gap-3 mb-4">
                      <CompanyLogo domain={product.domain} company={product.name} size={40} />
                      <div>
                        <CardTitle className="text-2xl">{product.name}</CardTitle>
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-1"
                        >
                          {product.domain} <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                    <CardDescription className="text-base">{product.tagline}</CardDescription>
                    <div className="mt-6 space-y-3">
                      <h3 className="text-sm font-semibold text-zinc-300">Example Metrics</h3>
                      {product.exampleMetrics.map((m) => (
                        <div key={m.label} className="flex justify-between text-sm">
                          <span className="text-zinc-500">{m.label}</span>
                          <span className="font-semibold text-emerald-400">{m.value}</span>
                        </div>
                      ))}
                      <p className="text-[10px] text-zinc-600 italic">Example metrics (replace with verified numbers)</p>
                    </div>
                  </CardHeader>
                  <CardContent className="lg:col-span-2 py-6">
                    <p className="text-sm text-zinc-300 mb-6">{product.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-300 mb-2">Who it&apos;s for</h3>
                        <p className="text-sm text-zinc-400">{product.whoItsFor}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-300 mb-2">Key Features</h3>
                        <ul className="text-sm text-zinc-400 space-y-1">
                          {product.features.slice(0, 5).map((f) => (
                            <li key={f} className="flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.engineeringView.stack.map((tech) => (
                        <Badge key={tech} variant="technical">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild size="sm">
                        <Link href={`/products/${product.slug}`}>
                          Full details <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                          Visit site <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-400 mb-4">Interested in working together?</p>
            <div className="flex justify-center gap-3">
              <Button asChild>
                <a href={`mailto:${profile.email}`}>Email me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
