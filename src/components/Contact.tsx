import { Mail, Phone, Linkedin, Github, LucideIcon } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/profile'

interface ContactItem {
  icon: LucideIcon
  label: string
  value: string
  href: string
  color: string
  external: boolean
}

const Contact = () => {
  const items: ContactItem[] = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: 'from-blue-500 to-cyan-500', external: false },
    ...(profile.phone
      ? [{ icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref, color: 'from-green-500 to-emerald-500', external: false }]
      : []),
    { icon: Github, label: 'GitHub', value: profile.githubUrl.replace('https://', ''), href: profile.githubUrl, color: 'from-slate-500 to-slate-700', external: true },
  ]
  if (profile.linkedinUrl) {
    items.push({ icon: Linkedin, label: 'LinkedIn', value: 'View profile', href: profile.linkedinUrl, color: 'from-blue-600 to-indigo-600', external: true })
  }

  return (
    <Section
      id="contact"
      title="Get In"
      highlight="Touch"
      shaded
      subtitle="I'm open to internship opportunities in software and full-stack development. Feel free to reach out."
    >
      <div className={`grid gap-6 mx-auto ${items.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4 max-w-6xl' : items.length === 3 ? 'md:grid-cols-3 max-w-5xl' : 'md:grid-cols-2 max-w-3xl'}`}>
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group"
          >
            <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${item.color} mb-4`}>
              <item.icon className="text-white" size={24} />
            </div>
            <h3 className="text-sm font-semibold text-slate-400 mb-2">{item.label}</h3>
            <p className="text-slate-100 font-medium break-all group-hover:text-primary-400 transition-colors">{item.value}</p>
          </a>
        ))}
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-800">
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. All rights reserved.
        </p>
      </footer>
    </Section>
  )
}

export default Contact
