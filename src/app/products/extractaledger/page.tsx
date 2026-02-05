import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products } from '@/content/products'
import { ProductDetail } from '@/components/sections/product-detail'
import { softwareAppJsonLd } from '@/lib/json-ld'

const product = products.find((p) => p.slug === 'extractaledger')

export const metadata: Metadata = {
  title: product?.name || 'ExtractaLedger',
  description: product?.tagline || '',
}

export default function ExtractaLedgerPage() {
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
