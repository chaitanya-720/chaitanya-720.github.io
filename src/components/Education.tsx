import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/profile'

const Education = () => (
  <Section id="education" highlight="Education" title="">
    <div className="max-w-3xl mx-auto space-y-6">
      {profile.education.map((edu) => (
        <div key={edu.title} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-primary-500 transition-all duration-300">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex-shrink-0">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3">{edu.title}</h3>
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-6 gap-y-2 text-slate-400">
                  {edu.institution && (
                    <div className="flex items-center gap-2"><MapPin size={18} /><span>{edu.institution}</span></div>
                  )}
                  {edu.period && (
                    <div className="flex items-center gap-2"><Calendar size={18} /><span>{edu.period}</span></div>
                  )}
                  {edu.score && (
                    <div className="flex items-center gap-2 text-primary-400 font-semibold"><Award size={18} /><span>{edu.score}</span></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
)

export default Education
