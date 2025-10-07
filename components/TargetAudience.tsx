'use client';

import { motion } from 'framer-motion';
import { TargetIcon, CheckIcon } from './icons';
import { Scene } from './ui/hero-section';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

export default function TargetAudience() {
  const deviceInfo = useDeviceDetection();
  const shouldAnimate = !deviceInfo.isMobile && !deviceInfo.isTablet;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Плавный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TargetIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Built for Ambitious Startups
              </h2>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We partner with fast-growing startups and businesses that need competitive intelligence to scale smarter and faster.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Early to Growth Stage Startups</h3>
                  <p className="text-gray-400">Series A-D companies ready to dominate their market</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">10-100 Team Members</h3>
                  <p className="text-gray-400">Perfectly sized teams that need professional intelligence</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tech-Forward Industries</h3>
                  <p className="text-gray-400">AI, SaaS, and Fintech companies leading innovation</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 ${shouldAnimate ? 'hover:scale-105' : ''}`}
            >
              See If We&apos;re a Fit
            </button>
          </motion.div>

          {/* Right side - Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={shouldAnimate ? { y: -10 } : undefined}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                Series A-D
              </div>
              <div className="text-gray-400">Funding Stage</div>
            </motion.div>

            <motion.div
              whileHover={shouldAnimate ? { y: -10 } : undefined}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                10-100
              </div>
              <div className="text-gray-400">Team Size</div>
            </motion.div>

            <motion.div
              whileHover={shouldAnimate ? { y: -10 } : undefined}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 col-span-2"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text mb-2">
                AI • SaaS • Fintech
              </div>
              <div className="text-gray-400">Target Industries</div>
            </motion.div>

            <motion.div
              whileHover={shouldAnimate ? { y: -10 } : undefined}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 col-span-2"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Growth Focused</h3>
              </div>
              <p className="text-gray-300 text-sm">
                We work with companies that are ready to scale and need data-driven insights to outpace competition.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
