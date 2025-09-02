"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Gift, 
  Star, 
  Calendar, 
  Users, 
  Zap,
  Crown,
  Mail,
  X
} from 'lucide-react'
import { Plan } from './types'

interface EarlyAccessRevealProps {
  userData: { name: string; email: string }
  selectedPlan: Plan
}

export default function EarlyAccessReveal({ userData, selectedPlan }: EarlyAccessRevealProps) {
  const [isAccepted, setIsAccepted] = useState<boolean | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAccept = async () => {
    setIsSubmitting(true)
    
    // Здесь отправляем ТОЛЬКО email и согласие на early access
    try {
      // Имитация отправки на сервер
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('📧 Отправляем на сервер:', {
        email: userData.email,
        name: userData.name,
        selectedPlan,
        earlyAccessAccepted: true,
        timestamp: new Date().toISOString()
        // НЕ отправляем данные карты!
      })
      
      setIsAccepted(true)
    } catch (error) {
      console.error('Ошибка при сохранении:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDecline = () => {
    setIsAccepted(false)
    // Перенаправляем на главную страницу
    setTimeout(() => {
      window.location.href = '/'
    }, 2000)
  }

  if (isAccepted === true) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-2xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-text mb-4">
            Добро пожаловать в команду!
          </h2>
          <p className="text-text/80 mb-6">
            Приглашение в Telegram-канал отправлено на <span className="text-primary font-medium">{userData.email}</span>
          </p>
          <p className="text-text/60 text-sm">
            Ожидайте уведомление о запуске через 2 недели
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => window.location.href = '/'}
          className="mt-8 bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-2xl hover:shadow-lg transition-all"
        >
          Вернуться на главную
        </motion.button>
      </motion.div>
    )
  }

  if (isAccepted === false) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-2xl text-center"
      >
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <X className="w-8 h-8 text-text/60" />
        </div>

        <h2 className="text-2xl font-bold text-text mb-4">
          Понимаем ваше решение
        </h2>
        <p className="text-text/80 mb-6">
          Возвращаем вас на главную страницу...
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-2xl"
    >
      {/* Celebration Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.6, repeat: 2 }}
          className="text-6xl mb-4"
        >
          🎉
        </motion.div>
        <h1 className="text-3xl sm:text-4xl font-bold text-text mb-2">
          Поздравляем!
        </h1>
        <p className="text-xl text-primary font-medium">
          Вы среди первых 500 человек!
        </p>
      </motion.div>

      {/* Main Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-text mb-4">
          Спасибо за интерес к Family Emotions!
        </h2>
        
        <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <p className="text-text font-medium text-lg">
              Хорошая новость: мы НЕ списали деньги с вашей карты
            </p>
          </div>
          <p className="text-text/80 text-center">
            Мы запускаемся через 2 недели и тестируем готовность к оплате.
          </p>
        </div>

        <p className="text-text/80 mb-8">
          За вашу готовность поддержать проект:
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid gap-4 mb-8"
      >
        {[
          {
            icon: <Gift className="w-5 h-5" />,
            title: "Первый месяц бесплатно",
            color: "text-green-400"
          },
          {
            icon: <Crown className="w-5 h-5" />,
            title: "Приоритетная поддержка",
            color: "text-purple-400"
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: "Доступ к Telegram-каналу с советами",
            color: "text-yellow-400"
          },
          {
            icon: <Star className="w-5 h-5" />,
            title: "Эксклюзивные инсайты от детских психологов",
            color: "text-blue-400"
          }
        ].map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl"
          >
            <div className={`${benefit.color}`}>
              {benefit.icon}
            </div>
            <span className="text-text/90 font-medium">
              {benefit.title}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Launch Date */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-8 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <Calendar className="w-6 h-6 text-primary" />
          <p className="text-text font-semibold text-lg">
            Запуск Family Emotions: через 2 недели
          </p>
        </div>
        <p className="text-text/70 text-sm">
          А пока присоединяйтесь к нашему Telegram-каналу с советами для родителей
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="space-y-4"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAccept}
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Mail className="w-5 h-5" />
              Присоединиться к каналу
            </>
          )}
        </motion.button>

        <button
          onClick={handleDecline}
          className="w-full text-text/60 hover:text-text/80 py-3 text-center transition-colors"
        >
          Не интересно? Отказаться
        </button>
      </motion.div>

      {/* Trust Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-8 text-center"
      >
        <div className="flex items-center justify-center gap-2 text-text/40 text-sm">
          <Users className="w-4 h-4" />
          <span>Уже 5,000+ российских семей в ожидании запуска</span>
        </div>
      </motion.div>
    </motion.div>
  )
}