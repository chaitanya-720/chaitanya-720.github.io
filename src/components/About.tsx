import { Code2, Smartphone, Cloud, Lightbulb, Languages, Heart } from 'lucide-react'
import Section, { card, chip } from './Section'
import { profile } from '../data/profile'

const highlights = [
  { icon: Code2, text: 'Java & Python', color: 'text-primary-400' },
  { icon: Smartphone, text: 'Android Development', color: 'text-green-400' },
  { icon: Cloud, text: 'GCP & Azure Fundamentals', color: 'text-purple-400' },
  { icon: Lightbulb, text: 'Problem Solving', color: 'text-yellow-400' },
]

const About = () => (
  <Section id="about" title="About" highlight="Me">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-6">
        {profile.about.map((para, i) => (
          <p key={i} className="text-lg text-slate-300 leading-relaxed">{para}</p>
        ))}
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {highlights.map((item) => (
            <div key={item.text} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 sm:p-6 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20">
              <item.icon className={`${item.color} mb-3`} size={32} />
              <p className="text-slate-200 font-semibold">{item.text}</p>
            </div>
          ))}
        </div>

        <div className={card}>
          <div className="flex items-center gap-3 mb-3 text-primary-400">
            <Languages size={20} /><h3 className="font-semibold">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {profile.languages.map((l) => <span key={l} className={chip}>{l}</span>)}
          </div>
          <div className="flex items-center gap-3 mb-3 text-primary-400">
            <Heart size={20} /><h3 className="font-semibold">Interests</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.interests.map((i) => <span key={i} className={chip}>{i}</span>)}
          </div>
        </div>
      </div>
    </div>
  </Section>
)

export default About
