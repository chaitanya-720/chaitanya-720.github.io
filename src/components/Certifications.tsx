import { BadgeCheck, ExternalLink } from 'lucide-react'
import Section, { card } from './Section'
import { profile } from '../data/profile'

/** Renders nothing until verified certifications are added to profile.ts. */
const Certifications = () => {
  if (profile.certifications.length === 0) return null

  return (
    <Section id="certifications" title="" highlight="Certifications" shaded>
      <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {profile.certifications.map((c) => (
          <div key={c.title} className={card}>
            <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 mb-4">
              <BadgeCheck className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">{c.title}</h3>
            <p className="text-slate-300">{c.issuer}</p>
            {c.date && <p className="text-slate-400 text-sm">{c.date}</p>}
            <div className="mb-3" />
            {c.url && (
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1">
                View credential <ExternalLink size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Certifications
