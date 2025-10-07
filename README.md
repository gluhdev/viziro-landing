# Viziro Landing Page

Современный, высокопроизводительный landing page для консалтингового агентства Viziro, специализирующегося на конкурентной разведке и аналитике для компаний в сферах AI, SaaS и Fintech.

## Особенности

- ⚡ **Next.js 15** с Turbopack для быстрой разработки
- 🎨 **Tailwind CSS** для стилизации
- 🎬 **Framer Motion** и **GSAP** для плавных анимаций
- 🎯 **Three.js** и **React Three Fiber** для 3D эффектов
- 📱 **Полностью адаптивный дизайн** для всех устройств
- 🚀 **Оптимизированная производительность** и быстрая загрузка
- 💼 **Три основных продукта**:
  - Анализ финансов конкурентов
  - Анализ трендов индустрии
  - Кастомные инсайты и консалтинг

## Структура проекта

```
viziro-landing/
├── app/
│   ├── layout.tsx       # Главный layout приложения
│   ├── page.tsx         # Главная страница
│   └── globals.css      # Глобальные стили
├── components/
│   ├── ui/
│   │   └── neural-network-hero.tsx  # Hero секция с 3D фоном
│   ├── Services.tsx                 # Секция с продуктами
│   ├── Industries.tsx               # Секция с индустриями
│   ├── TargetAudience.tsx           # Целевая аудитория
│   ├── ContactForm.tsx              # Форма для лидогенерации
│   └── icons.tsx                    # Иконки
├── public/              # Статические файлы
└── ...config files
```

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите development сервер:
```bash
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000) в браузере

## Сборка для продакшена

```bash
npm run build
npm start
```

## Технологический стек

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP
- **3D Graphics:** Three.js, React Three Fiber, Drei
- **Language:** TypeScript
- **Package Manager:** npm

## Оптимизация

- Использование динамического импорта для тяжелых компонентов
- Оптимизация изображений через Next.js Image
- Минификация CSS и JS
- Lazy loading для компонентов вне viewport
- Turbopack для быстрой разработки

## Целевая аудитория

- Стартапы в стадиях Series A-D
- Компании с 10-100 сотрудниками
- Индустрии: AI, SaaS, Fintech

## Лицензия

Proprietary - Все права защищены
