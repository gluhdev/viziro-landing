'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'Competitive Edge',
  'Growth Potential',
  'Market Insights',
  'Data Intelligence',
  'Revenue Streams',
  'Business Strategy',
  'AI Advantage',
  'Future Success',
  'Innovation Power',
  'Market Dominance',
  'Hidden Opportunities',
  'Profit Potential'
];

export function TypewriterEffect() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (isPaused) {
        // Пауза после полного набора текста
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
        return;
      }

      if (!isDeleting) {
        // Печатаем текст
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          // Текст полностью напечатан
          setIsPaused(true);
        }
      } else {
        // Стираем текст
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Текст полностью стерт, переходим к следующей фразе
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, currentPhraseIndex]);

  return (
    <div className="inline-block relative">
      <span className="font-normal bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
        {displayText}
      </span>
      <motion.span
        className="inline-block w-[3px] h-[1.2em] bg-white ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}