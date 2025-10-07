'use client';

import { motion } from 'framer-motion';
import { ChartIcon, LightbulbIcon, TrendingIcon } from './icons';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

const services = [
  {
    icon: ChartIcon,
    title: 'Competitor Financial Analysis',
    description: 'Deep dive into your competitors\' financial health, revenue models, and market positioning. Get actionable insights on pricing strategies, funding rounds, and growth trajectories.',
    features: [
      'Revenue & funding analysis',
      'Pricing strategy breakdown',
      'Market share insights',
      'Financial health scoring'
    ],
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    shadowColor: 'blue-500/20'
  },
  {
    icon: TrendingIcon,
    title: 'Industry Trend Intelligence',
    description: 'Stay ahead with real-time industry trends, emerging technologies, and market shifts. Our AI analyzes thousands of data points to predict the next big thing in your sector.',
    features: [
      'Real-time trend monitoring',
      'Predictive analytics',
      'Market opportunity scoring',
      'Technology adoption tracking'
    ],
    gradient: 'from-purple-500 via-purple-600 to-violet-600',
    shadowColor: 'purple-500/20'
  },
  {
    icon: LightbulbIcon,
    title: 'Custom Insights & Consulting',
    description: 'Tailored strategic consulting based on your unique needs. Our experts transform raw data into strategic recommendations that drive growth and competitive advantage.',
    features: [
      'Strategic roadmap creation',
      'Custom research reports',
      'Executive briefings',
      'Ongoing advisory support'
    ],
    gradient: 'from-slate-500 via-slate-600 to-gray-700',
    shadowColor: 'slate-500/20'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Services() {
  const deviceInfo = useDeviceDetection();
  const shouldAnimate = !deviceInfo.isMobile && !deviceInfo.isTablet;

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient backgrounds с плавным переходом */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_50%,rgba(139,92,246,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three powerful products designed to give you the competitive intelligence you need
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={shouldAnimate ? { y: -12, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } } : undefined}
              className="group relative h-full"
            >
              {/* Gradient border container */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}></div>

              {/* Card with gradient border effect */}
              <div className="relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-[1px] shadow-2xl">
                {/* Gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                {/* Inner card content */}
                <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}></div>

                  {/* Animated gradient orb */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-700`}></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with enhanced gradient */}
                    <div className="mb-6">
                      <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl p-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <div className="flex items-center justify-center w-full h-full bg-slate-800 rounded-2xl group-hover:bg-transparent transition-colors duration-300">
                          <service.icon className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    </div>

                    {/* Title with gradient on hover */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed text-[15px]">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 group/item hover:text-white transition-colors duration-200">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} p-[1px] mt-0.5`}>
                            <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button with gradient */}
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`relative w-full px-6 py-3.5 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold overflow-hidden group/btn transition-all duration-300 hover:shadow-xl hover:shadow-${service.shadowColor}`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Learn More
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
