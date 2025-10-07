'use client';

import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  screenWidth: number;
  screenHeight: number;
}

export const useDeviceDetection = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() => {
    // Начальное состояние на основе SSR
    if (typeof window === 'undefined') {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isTouch: false,
        deviceType: 'desktop',
        screenWidth: 1920,
        screenHeight: 1080,
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return {
      isMobile,
      isTablet,
      isDesktop,
      isTouch,
      deviceType: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
      screenWidth: width,
      screenHeight: height,
    };
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
        deviceType: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
        screenWidth: width,
        screenHeight: height,
      });
    };

    // Обновляем при изменении размера окна
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    // Обновляем сразу после монтирования
    updateDeviceInfo();

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
};

// Hook для определения поддержки анимаций
export const useAnimationSupport = () => {
  const [canAnimate, setCanAnimate] = useState(true);
  const deviceInfo = useDeviceDetection();

  useEffect(() => {
    // Проверяем предпочтение reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Проверяем производительность устройства
    const isLowEndDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;

    // Отключаем анимации на старых/медленных устройствах
    const shouldAnimate = !prefersReducedMotion && !isLowEndDevice;

    setCanAnimate(shouldAnimate);
  }, []);

  return {
    canAnimate,
    animationSettings: {
      duration: deviceInfo.isMobile ? 0.3 : 0.6,
      ease: deviceInfo.isMobile ? 'easeOut' : 'easeInOut',
      stagger: deviceInfo.isMobile ? 0.05 : 0.1,
    }
  };
};