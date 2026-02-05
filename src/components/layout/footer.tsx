import Link from 'next/link'
import { Mail, Linkedin } from 'lucide-react'
import { profile } from '@/content/profile'

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">{profile.name}</h3>
            <p className="text-sm text-zinc-400">{profile.subhead}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-300 mb-3">Pages</h4>
            <div className="space-y-2">
              {[
                { href: '/work', label: 'Work' },
                { href: '/products', label: 'Products' },
                { href: '/ai', label: 'AI Lab' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-300 mb-3">Get in touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800/50 text-center">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
