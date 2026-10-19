import { motion } from 'framer-motion'
import { ChevronDown, Linkedin, Github, Eye, Download, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const Hero = () => {
  const [showResume, setShowResume] = useState(false)
  const fullName = `${profile.firstName} ${profile.lastName}`

  useEffect(() => {
    if (!showResume) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setShowResume(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showResume])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-purple-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-slate-100">{profile.firstName}</span>{' '}
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{profile.lastName}</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {profile.headline}
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {profile.linkedinUrl && (
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
                <Linkedin size={20} /> View LinkedIn
              </a>
            )}
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold transition-all duration-300 border border-slate-600 hover:border-slate-500 flex items-center gap-2">
              <Github size={20} /> View GitHub
            </a>
            {profile.resumeUrl ? (
              <button onClick={() => setShowResume(true)}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-primary-500/50 flex items-center gap-2">
                <Eye size={20} /> View Resume
              </button>
            ) : (
              <a href="#contact"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-primary-500/50 flex items-center gap-2">
                <Mail size={20} /> Contact Me
              </a>
            )}
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        className="absolute bottom-10 inset-x-0 z-10 hidden sm:flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
      >
        <a href="#about" className="text-slate-400 hover:text-primary-400 transition-colors" aria-label="Scroll to About">
          <ChevronDown size={32} />
        </a>
      </motion.div>

      {showResume && profile.resumeUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowResume(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-slate-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Resume - ${fullName}`}
          >
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-100">Resume - {fullName}</h3>
              <div className="flex items-center gap-3">
                <a href={profile.resumeUrl} download
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                  <Download size={18} /> Download
                </a>
                <button onClick={() => setShowResume(false)} className="text-slate-400 hover:text-slate-100 transition-colors" aria-label="Close">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-auto" style={{ height: 'calc(90vh - 88px)' }}>
              <iframe src={profile.resumeUrl} className="w-full h-full" style={{ minHeight: '600px' }} title="Resume PDF" />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Hero
