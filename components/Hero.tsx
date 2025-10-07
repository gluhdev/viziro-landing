'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from './icons';
import { SpiralAnimation } from './ui/spiral-animation';
import { TypewriterEffect } from './ui/typewriter-effect';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Профессиональный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-slate-900" />


      {/* Тонкий mesh градиент для глубины */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/20 via-transparent to-blue-900/20" />
      </div>

      {/* Минималистичная анимация частиц */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <SpiralAnimation />
      </div>

      {/* Легкий noise texture оверлей */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <svg width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="turbulence" baseFrequency="0.9" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Контент */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-8 sm:py-12 md:py-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full flex flex-col h-full justify-center"
        >
          {/* Бейдж */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 md:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs sm:text-sm text-gray-300">VIZIRO • Competitive Intelligence Platform</span>
          </motion.div>

          {/* Заголовок */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 md:mb-6 tracking-tight">
            <div className="overflow-hidden">
              <motion.span
                initial={{ x: -200, y: -100, opacity: 0, rotate: -45 }}
                animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  rotate: { duration: 0.6 }
                }}
                className="inline-block"
              >
                Unlock
              </motion.span>
              {' '}
              <motion.span
                initial={{ x: 200, y: 100, opacity: 0, rotate: 45 }}
                animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  rotate: { duration: 0.6 }
                }}
                className="inline-block"
              >
                Your
              </motion.span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block mt-1 md:mt-2 h-[1.2em]"
            >
              <TypewriterEffect />
            </motion.div>
          </h1>

          {/* Описание */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light px-4 sm:px-0"
          >
            Transform competitor data into actionable insights.
            Make informed decisions with AI-powered intelligence
            for AI, SaaS, and Fintech industries.
          </motion.p>

          {/* Кнопки */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 text-white font-medium rounded-lg border border-white/20 hover:bg-white/10 transition-all duration-200"
            >
              Learn More
            </button>
          </motion.div>

          {/* Метрики с индикатором посередине */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16 md:mt-20 flex items-center justify-center gap-8 sm:gap-12 md:gap-20"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-light text-white mb-1">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                Companies Analyzed
              </div>
            </div>

            {/* Индикатор прокрутки */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden sm:block"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1"
              >
                <div className="w-1 h-2 bg-white/50 rounded-full" />
              </motion.div>
            </motion.div>

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-light text-white mb-1">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                Real-time Monitoring
              </div>
            </div>
          </motion.div>

          {/* Индикатор прокрутки для мобильных устройств */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="sm:hidden mt-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1 mx-auto"
            >
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}