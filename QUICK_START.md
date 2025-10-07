# 🚀 Быстрый старт Viziro Landing

## Запуск проекта

```bash
# 1. Установка зависимостей (если еще не установлены)
npm install

# 2. Запуск development сервера
npm run dev
```

Проект будет доступен на:
- **Local:** http://localhost:3000
- **Network:** http://192.168.1.42:3000

## Структура страницы

Landing page состоит из следующих секций:

1. **Hero** - Эффектная секция с 3D neural network фоном и GSAP анимациями
2. **Services** - Три продукта (анализ конкурентов, тренды, консалтинг)
3. **Industries** - AI, SaaS, Fintech индустрии
4. **Target Audience** - Описание целевой аудитории
5. **Contact Form** - Форма лидогенерации

## Основные команды

```bash
# Development сервер с Turbopack
npm run dev

# Production сборка
npm run build

# Запуск production сборки
npm start

# Проверка кода
npm run lint
```

## Особенности реализации

### 🎨 Дизайн
- Современный glassmorphism эффект
- Плавные градиенты и анимации
- Темная цветовая схема
- Полностью адаптивный дизайн

### ⚡ Производительность
- Next.js 15 с Turbopack для быстрой разработки
- Оптимизация изображений
- Lazy loading компонентов
- Минификация CSS и JS

### 🎬 Анимации
- GSAP для текстовых анимаций
- Framer Motion для UI элементов
- Three.js для 3D фона

### 📱 Адаптивность
- Mobile-first подход
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly интерфейс

## Редактирование контента

Основные файлы для редактирования:

- `app/page.tsx` - Главная страница и props для Hero
- `components/Services.tsx` - Описание продуктов
- `components/Industries.tsx` - Индустрии
- `components/TargetAudience.tsx` - Целевая аудитория
- `components/ContactForm.tsx` - Форма контакта

## Настройка темы

Цвета и стили настраиваются в:
- `app/globals.css` - Глобальные стили и темы
- `tailwind.config.ts` - Конфигурация Tailwind CSS

## Деплой

### Vercel (рекомендуется)
```bash
npm i -g vercel
vercel
```

### Другие платформы
```bash
npm run build
# Загрузите папку .next на ваш хостинг
```

## Troubleshooting

**Проблема:** Ошибка с Tailwind CSS
**Решение:** Убедитесь, что установлен `@tailwindcss/postcss`

**Проблема:** 3D фон не отображается
**Решение:** Проверьте установку `three`, `@react-three/fiber`, `@react-three/drei`

**Проблема:** Анимации не работают
**Решение:** Убедитесь, что установлены `gsap` и `@gsap/react`
