// Утилиты для оптимизации анимаций на мобильных устройствах

// Проверка является ли устройство мобильным
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
};

// Проверка поддержки анимаций
export const supportsAnimation = () => {
  if (typeof window === 'undefined') return true;

  // Проверка на reduce motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return false;

  // Проверка производительности устройства
  const isLowEndDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;

  return !isLowEndDevice;
};

// Адаптивные настройки анимации
export const getAnimationSettings = () => {
  const mobile = isMobile();
  const canAnimate = supportsAnimation();

  if (!canAnimate) {
    return {
      initial: false,
      animate: false,
      transition: { duration: 0 }
    };
  }

  if (mobile) {
    return {
      transition: {
        duration: 0.3, // Быстрее для мобильных
        ease: "easeOut"
      }
    };
  }

  return {
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  };
};

// Адаптивный viewport для анимаций
export const getViewportSettings = () => {
  const mobile = isMobile();

  return {
    once: true,
    amount: mobile ? 0.1 : 0.3, // Меньше для мобильных устройств
    margin: mobile ? "50px" : "100px"
  };
};