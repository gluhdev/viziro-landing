'use client'
import { useEffect, useRef } from 'react'

export function SpiralAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<any[]>([])
    const animationRef = useRef<number>()
    const mouseRef = useRef({ x: 0, y: 0 })
    const timeRef = useRef(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Установка размеров canvas
        const resize = () => {
            const dpr = window.devicePixelRatio || 1
            const width = window.innerWidth
            const height = window.innerHeight

            canvas.width = width * dpr
            canvas.height = height * dpr
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`

            ctx.scale(dpr, dpr)
        }

        resize()
        window.addEventListener('resize', resize)

        // Отслеживание мыши и тач событий для дополнительного эффекта
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX - window.innerWidth / 2) * 0.01,
                y: (e.clientY - window.innerHeight / 2) * 0.01
            }
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0]
                mouseRef.current = {
                    x: (touch.clientX - window.innerWidth / 2) * 0.01,
                    y: (touch.clientY - window.innerHeight / 2) * 0.01
                }
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('touchmove', handleTouchMove, { passive: true })

        // Класс частицы - минималистичный ураган
        class Particle {
            x: number
            y: number
            size: number
            opacity: number
            angle: number
            radius: number
            radiusSpeed: number
            angleSpeed: number
            z: number
            life: number
            maxLife: number
            sparkle: boolean
            sparklePhase: number
            baseOpacity: number

            constructor(delayed = false) {
                // Центр урагана
                const centerX = window.innerWidth / 2
                const centerY = window.innerHeight / 2

                // Начинаем из центра или со случайной позиции
                if (delayed) {
                    // Для существующих частиц - случайная позиция
                    this.angle = Math.random() * Math.PI * 2
                    this.radius = Math.random() * Math.max(window.innerWidth, window.innerHeight) * 0.5
                } else {
                    // Новые частицы появляются из центра
                    this.angle = Math.random() * Math.PI * 2
                    this.radius = Math.random() * 50 // Начальный радиус
                }

                // Позиция
                this.x = centerX + Math.cos(this.angle) * this.radius
                this.y = centerY + Math.sin(this.angle) * this.radius

                // Параметры движения - медленное плавное расширение
                this.radiusSpeed = Math.random() * 1 + 0.5 // Медленная скорость расширения
                this.angleSpeed = (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1) // Медленное вращение

                // Глубина для создания объема
                this.z = Math.random()

                // Визуальные параметры - меньше и аккуратнее
                this.size = (Math.random() * 1 + 0.3) * (1 - this.z * 0.3) // 0.3-1.3px
                this.baseOpacity = 0.5 - this.z * 0.2 // Более прозрачные частицы
                this.opacity = this.baseOpacity

                // Параметры блеска - только некоторые частицы
                this.sparkle = Math.random() > 0.85 // Только 15% частиц блестят
                this.sparklePhase = Math.random() * Math.PI * 2

                // Время жизни
                this.life = 0
                this.maxLife = 300 + Math.random() * 200 // Дольше живут
            }

            update() {
                const centerX = window.innerWidth / 2
                const centerY = window.innerHeight / 2

                // Плавное увеличение радиуса
                this.radius += this.radiusSpeed

                // Плавное вращение вокруг центра
                this.angle += this.angleSpeed

                // Очень медленное ускорение
                this.radiusSpeed *= 1.0005

                // Обновляем позицию
                this.x = centerX + Math.cos(this.angle) * this.radius + mouseRef.current.x * this.z
                this.y = centerY + Math.sin(this.angle) * this.radius + mouseRef.current.y * this.z

                // Мягкий эффект блеска
                if (this.sparkle) {
                    this.sparklePhase += 0.02
                    const sparkleIntensity = Math.sin(this.sparklePhase) * 0.3 + 0.7
                    this.opacity = this.baseOpacity * sparkleIntensity
                }

                // Плавное затухание по мере удаления
                const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 0.6
                const distanceFactor = Math.min(1, this.radius / maxRadius)
                this.opacity = this.baseOpacity * (1 - distanceFactor * 0.8)

                // Увеличение времени жизни
                this.life++

                // Проверка выхода за границы экрана
                const margin = 100
                if (this.x < -margin || this.x > window.innerWidth + margin ||
                    this.y < -margin || this.y > window.innerHeight + margin ||
                    this.life > this.maxLife) {
                    // Перезапускаем частицу из центра
                    this.angle = Math.random() * Math.PI * 2
                    this.radius = Math.random() * 50
                    this.life = 0
                    this.radiusSpeed = Math.random() * 1 + 0.5
                    this.angleSpeed = (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1)
                    this.sparkle = Math.random() > 0.85
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                if (this.opacity < 0.05) return // Не рисуем слишком прозрачные частицы

                ctx.save()

                // Минимальное свечение
                if (this.sparkle) {
                    ctx.shadowBlur = this.size * 4
                    ctx.shadowColor = `rgba(255, 255, 255, ${this.opacity * 0.5})`
                }

                ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity))
                ctx.fillStyle = '#ffffff'

                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()

                ctx.restore()
            }
        }

        // Создание начальных частиц - намного меньше для плавности
        const particleCount = window.innerWidth > 768 ? 150 : 80

        // Создаем частицы постепенно
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                particlesRef.current.push(new Particle(i < particleCount / 2))
            }, i * 20) // Растягиваем появление частиц
        }

        // Анимационный цикл
        const animate = () => {
            // Полная очистка для четкости
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

            // Очень легкий градиент в центре
            const centerX = window.innerWidth / 2
            const centerY = window.innerHeight / 2
            const gradient = ctx.createRadialGradient(
                centerX, centerY, 0,
                centerX, centerY, Math.min(window.innerWidth, window.innerHeight) * 0.4
            )
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.015)')
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

            // Обновление времени
            timeRef.current++

            // Обновление и отрисовка частиц
            particlesRef.current.forEach(particle => {
                particle.update()
                particle.draw(ctx)
            })

            // Добавляем новые частицы очень редко
            if (timeRef.current % 30 === 0 && particlesRef.current.length < particleCount) {
                particlesRef.current.push(new Particle(false))
            }

            // Удаляем старые частицы для оптимизации
            particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife + 100)

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        // Очистка
        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('touchmove', handleTouchMove)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{
                background: 'transparent',
                pointerEvents: 'none'
            }}
        />
    )
}