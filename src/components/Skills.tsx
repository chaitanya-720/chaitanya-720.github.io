import { Code, Smartphone, Database, Cloud, Wrench, Layers, Globe, LucideIcon } from 'lucide-react'
import Section, { card } from './Section'
import { profile, SkillIcon } from '../data/profile'

const icons: Record<SkillIcon, LucideIcon> = {
  code: Code,
  mobile: Smartphone,
  web: Globe,
  db: Database,
  cloud: Cloud,
  tools: Wrench,
  layers: Layers,
}

const Skills = () => (
  <Section id="skills" title="Technical" highlight="Skills">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {profile.skills.map((category) => {
        const Icon = icons[category.icon]
        return (
          <div key={category.title} className={card}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500">
                <Icon className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-600/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  </Section>
)

export default Skills
