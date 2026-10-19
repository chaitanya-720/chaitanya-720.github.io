import { Github, ExternalLink, Smartphone, Car, Globe, CloudCog, Music, Gamepad2, LucideIcon } from 'lucide-react'
import Section, { card } from './Section'
import { profile } from '../data/profile'

const projectIcons: LucideIcon[] = [Smartphone, Car, Globe, CloudCog, Music, Gamepad2]

const Projects = () => (
  <Section id="projects" title="Featured" highlight="Projects" shaded>
    <div className="grid lg:grid-cols-2 gap-8">
      {profile.projects.map((project, index) => {
        const Icon = projectIcons[index % projectIcons.length]
        return (
          <div key={project.title} className={`${card} flex flex-col`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 flex-shrink-0">
                <Icon className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">
                  {project.title}
                  {project.tagline && <span className="text-slate-400 font-medium"> — {project.tagline}</span>}
                </h3>
                <p className="text-sm text-primary-400 mt-1">{project.category}</p>
              </div>
            </div>

            <p className="text-slate-300 mb-5">{project.description}</p>

            <div className="space-y-5 flex-1">
              {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-primary-400 mb-2">{project.featuresLabel ?? 'Features'}</h4>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-primary-400 mt-0.5">▹</span><span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              )}

              {project.extra && (
                <div>
                  <h4 className="text-sm font-semibold text-primary-400 mb-2">{project.extra.label}</h4>
                  <p className="text-slate-300 text-sm">{project.extra.items.join(' · ')}</p>
                </div>
              )}

              <div>
                <h4 className="text-sm font-semibold text-primary-400 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {(project.repoUrl || project.liveUrl) && (
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-700">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-700 border border-slate-600 text-slate-100 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  </Section>
)

export default Projects
