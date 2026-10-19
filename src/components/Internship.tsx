import { Clock, CalendarDays, Briefcase, Building2 } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/profile'

const Internship = () => {
  const { internship } = profile
  const items = [
    { icon: Clock, label: 'Duration', value: internship.duration, color: 'from-blue-500 to-cyan-500' },
    { icon: CalendarDays, label: 'Expected Start', value: internship.expectedStart, color: 'from-green-500 to-emerald-500' },
    { icon: Briefcase, label: 'Preferred Roles', value: internship.roles.join(' / '), color: 'from-purple-500 to-pink-500' },
    { icon: Building2, label: 'Work Arrangement', value: internship.workArrangement, color: 'from-orange-500 to-yellow-500' },
  ]

  return (
    <Section id="internship" title="Looking for an" highlight="Internship" subtitle={internship.summary}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.label} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-primary-500 transition-all duration-300">
            <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${item.color} mb-4`}>
              <item.icon className="text-white" size={24} />
            </div>
            <h3 className="text-sm font-semibold text-slate-400 mb-2">{item.label}</h3>
            <p className="text-slate-100 font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Internship
