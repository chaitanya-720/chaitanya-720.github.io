import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface SectionProps {
  id: string
  title: string
  highlight: string
  shaded?: boolean
  subtitle?: string
  children: ReactNode
}

/** Shared section shell: heading, accent bar and fade-in on scroll. */
const Section = ({ id, title, highlight, shaded = false, subtitle, children }: SectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id={id} className={`py-20 relative ${shaded ? 'bg-slate-900/50' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            {title && <>{title} </>}
            <span className="text-primary-400">{highlight}</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto ${subtitle ? 'mb-8' : 'mb-16'}`} />
          {subtitle && <p className="text-center text-slate-400 text-lg mb-16 max-w-2xl mx-auto">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export const card =
  'bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10'

export const chip = 'px-3 py-1.5 bg-slate-700/50 text-slate-200 rounded-lg text-sm font-medium'

export default Section
