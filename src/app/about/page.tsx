import type { Metadata } from 'next'
import { Mail, Linkedin } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${profile.name} — SEO leader, digital marketing manager, AI automation builder, and developer with 12+ years of global experience.`,
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Me</h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">{profile.headline}</p>
        </div>
      </section>

      {/* Bio */}
      <Section className="pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Background</h2>
              <div className="space-y-4">
                {profile.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-zinc-300 leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <Button asChild>
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="h-4 w-4" /> Get in touch
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick facts */}
            <div className="space-y-4">
              <Card>
                <CardContent className="py-6 space-y-4">
                  {[
                    { label: 'Experience', value: '12+ years' },
                    { label: 'Focus', value: 'SEO, AI, Development' },
                    { label: 'Regions', value: 'AU, EU, NA' },
                    { label: 'Work style', value: 'Remote-first' },
                    { label: 'Targets', value: 'Agencies & Enterprise' },
                  ].map((fact) => (
                    <div key={fact.label} className="flex justify-between text-sm">
                      <span className="text-zinc-500">{fact.label}</span>
                      <span className="text-white font-medium">{fact.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Matrix */}
      <Section className="bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.skills.map((group) => (
              <Card key={group.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary">{item}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
