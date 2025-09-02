"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowLeft, Star, Zap } from 'lucide-react'
import { Plan, PlanData } from './types'

interface PlanSelectorProps {
  selectedPlan: Plan
  onPlanSelect: (plan: Plan) => void
  onBack: () => void
}

export default function PlanSelector({ selectedPlan, onPlanSelect, onBack }: PlanSelectorProps) {
  const plans: PlanData[] = [
    {
      id: 'basic',
      name: 'Базовый',
      price: '299₽',
      period: 'в месяц',
      description: 'Для начинающих родителей',
      features: [
        'До 4 членов семьи',
        '3 вопроса в день',
        'Базовые рекомендации',
        '14 дней бесплатно'
      ]
    },
    {
      id: 'family',
      name: 'Семейный',
      price: '499₽',
      period: 'в месяц',
      description: 'Для большинства семей',
      badge: 'ПОПУЛЯРНЫЙ',
      popular: true,
      features: [
        'До 6 членов семьи',
        'Безлимит вопросов',
        'Персональные советы',
        'Еженедельные отчеты',
        'История на 30 дней',
        '14 дней бесплатно'
      ]
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: '699₽',
      period: 'в месяц',
      description: 'Максимум возможностей',
      features: [
        'Безлимит участников',
        'Приоритетная поддержка',
        'Все функции Семейного',
        'Аналитика паттернов',
        'Интеграция с календарем',
        '14 дней бесплатно'
      ]
    }
  ]

  const handleContinue = () => {
    onPlanSelect(selectedPlan)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-2xl"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-start mb-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-text/60 hover:text-text transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text">Выберите план</h2>
          <p className="text-text/60 text-sm mt-1">Начните с 14-дневного пробного периода</p>
        </div>
      </div>

      {/* Plans */}
      <div className="space-y-4 mb-8">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all ${
              selectedPlan === plan.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/30 bg-gray-50'
            } ${plan.popular ? 'ring-2 ring-primary/30' : ''}`}
            onClick={() => onPlanSelect(plan.id)}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {plan.badge}
                </div>
              </div>
            )}

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === plan.id 
                      ? 'border-primary bg-primary' 
                      : 'border-gray-400'
                  }`}>
                    {selectedPlan === plan.id && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text text-lg">{plan.name}</h3>
                    <p className="text-text/60 text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-text">{plan.price}</span>
                  <span className="text-text/60">{plan.period}</span>
                  {plan.originalPrice && (
                    <>
                      <span className="text-text/40 line-through text-sm">{plan.originalPrice}</span>
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        {plan.discount}
                      </span>
                    </>
                  )}
                </div>

                <div className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-text/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Continue Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleContinue}
        className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg transition-all"
      >
        <Zap className="w-5 h-5" />
        Продолжить с выбранным планом
      </motion.button>

      {/* Trust Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 text-text/40 text-xs">
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
          <span>Защищено SSL</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
          <span>Легкая отмена</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
          <span>Честная цена</span>
        </div>
      </div>
    </motion.div>
  )
}

