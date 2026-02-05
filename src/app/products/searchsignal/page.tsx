import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products } from '@/content/products'
import { ProductDetail } from '@/components/sections/product-detail'
import { softwareAppJsonLd } from '@/lib/json-ld'

const product = products.find((p) => p.slug === 'searchsignal')

export const metadata: Metadata = {
  title: product?.name || 'SearchSignal',
  description: product?.tagline || '',
}

export default function SearchSignalPage() {
  if (!product) notFound()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd(product.name, product.description, product.url)) }}
      />
      <ProductDetail product={product} />
    </>
  )
}
