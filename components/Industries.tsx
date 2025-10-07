'use client';

import { motion } from 'framer-motion';
import { RocketIcon, ChartIcon, TrendingIcon } from './icons';
import { SocialConnect } from './ui/connect-with-us';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

const industries = [
  {
    name: 'Artificial Intelligence',
    shortName: 'AI',
    icon: RocketIcon,
    description: 'Track the rapidly evolving AI landscape. Monitor competitors, funding rounds, and breakthrough technologies.',
    stats: [
      { label: 'Companies Tracked', value: '200+' },
      { label: 'Monthly Updates', value: '5000+' }
    ],
    color: 'from-blue-500 to-purple-600',
    bgColor: 'bg-blue-500/10'
  },
  {
    name: 'Software as a Service',
    shortName: 'SaaS',
    icon: ChartIcon,
    description: 'Stay ahead in the SaaS market with insights on pricing models, user acquisition, and market trends.',
    stats: [
      { label: 'Companies Tracked', value: '150+' },
      { label: 'Pricing Models', value: '300+' }
    ],
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-500/10'
  },
  {
    name: 'Financial Technology',
    shortName: 'Fintech',
    icon: TrendingIcon,
    description: 'Navigate the complex fintech ecosystem with comprehensive competitor intelligence and regulatory insights.',
    stats: [
      { label: 'Companies Tracked', value: '180+' },
      { label: 'Market Reports', value: '100+' }
    ],
    color: 'from-green-500 to-cyan-600',
    bgColor: 'bg-green-500/10'
  }
];

export default function Industries() {
  const deviceInfo = useDeviceDetection();
  const shouldAnimate = !deviceInfo.isMobile && !deviceInfo.isTablet;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_20%_80%,rgba(168,85,247,0.4),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_at_70%_20%,rgba(236,72,153,0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,rgba(139,92,246,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(-45deg,rgba(236,72,153,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Industries We Cover
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized intelligence for the most dynamic sectors in tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={shouldAnimate ? { scale: 1.05 } : undefined}
              className="relative group"
            >
              {/* Card */}
              <div className={`relative h-full bg-gradient-to-br ${industry.color} p-[2px] rounded-2xl overflow-hidden`}>
                <div className="bg-slate-900 h-full rounded-2xl p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${industry.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {industry.shortName}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {industry.name}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-4">
                    {industry.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">{stat.label}</span>
                        <span className={`text-xl font-bold bg-gradient-to-r ${industry.color} text-transparent bg-clip-text`}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connect With Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <SocialConnect />
        </motion.div>
      </div>

    </section>
  );
}
