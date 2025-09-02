"use client"

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Shield } from 'lucide-react'
import { trackEngagement, trackFunnel } from '@/lib/analytics'

interface PlanData {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  delay: number
}

interface PricingPlanProps extends PlanData {
  onSelect: (plan: PlanData) => void
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular = false, 
  delay,
  onSelect
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 shadow-lg ${
        popular 
          ? 'border-primary/50 bg-primary/5 scale-105 shadow-xl' 
          : 'border-text/10 hover:border-primary/30 hover:shadow-xl'
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2">
          <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            Самый популярный
          </div>
        </div>
      )}

      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-text mb-2">{name}</h3>
          <p className="text-text/70">{description}</p>
        </div>

        {/* Price */}
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-primary mb-1">{price}</div>
          <div className="text-text/60">{period}</div>
        </div>

        {/* Features - flex-grow to push button down */}
        <div className="space-y-4 flex-grow mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-success flex-shrink-0" />
              <span className="text-text/80">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button - always at bottom */}
        <button 
          onClick={() => {
            // Extract price as number for tracking
            const priceNumber = parseFloat(price.replace(/[^\d]/g, ''))
            const discount = name === 'Годовая подписка' ? 33 : 0
            
            trackEngagement.planSelect(name, priceNumber, discount)
            trackEngagement.pricingCtaClick(name, priceNumber)
            onSelect({ name, price, period, description, features, popular, delay })
          }}
          className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
            popular 
              ? 'bg-primary hover:bg-primary/90 text-white shadow-lg' 
              : 'bg-transparent border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/5'
          }`}>
          Попробовать 14 дней бесплатно
        </button>
      </div>
    </motion.div>
  )
}

const PricingSection: React.FC = () => {
  // Track pricing view when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackFunnel.pricingView()
            observer.disconnect() // Track only once
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('pricing-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handlePlanSelect = (plan: PlanData) => {
    window.location.href = '/billing'
  }

  const plans: PlanData[] = [
    {
      name: "Базовый",
      price: "299₽",
      period: "в месяц",
      description: "Для начинающих родителей",
      features: [
        "До 4 членов семьи",
        "3 вопроса в день",
        "Базовые рекомендации",
        "14 дней бесплатно"
      ],
      delay: 0
    },
    {
      name: "Семейный",
      price: "499₽",
      period: "в месяц",
      description: "Для большинства семей",
      features: [
        "До 6 членов семьи",
        "Безлимит вопросов",
        "Персональные советы",
        "Еженедельные отчеты",
        "История на 30 дней",
        "14 дней бесплатно"
      ],
      popular: true,
      delay: 0.2
    },
    {
      name: "Премиум",
      price: "699₽",
      period: "в месяц",
      description: "Максимум возможностей",
      features: [
        "Безлимит участников",
        "Приоритетная поддержка",
        "Все функции Семейного",
        "Аналитика паттернов",
        "Интеграция с календарем",
        "14 дней бесплатно"
      ],
      delay: 0.4
    }
  ]

  return (
    <section id="pricing-section" className="section-padding bg-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">
            В 10 раз дешевле одной консультации психолога
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Традиционный психолог: 5,000-15,000 ₽ за сеанс • Family Emotions: от 299 ₽ в месяц
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} onSelect={handlePlanSelect} />
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-lg border border-primary/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
              <Shield className="w-10 h-10 sm:w-8 sm:h-8 text-success" />
              <h3 className="text-xl sm:text-2xl font-bold text-text text-center">14 дней бесплатно, без карты</h3>
            </div>
            <p className="text-text/80 leading-relaxed text-center">
              Начните использовать Family Emotions прямо сейчас. Никаких платежных данных, 
              никаких обязательств. Просто попробуйте и оцените результат.
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  )
}

export default PricingSection
