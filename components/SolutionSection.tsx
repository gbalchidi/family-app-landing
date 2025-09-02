"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, BarChart3, Lightbulb, MessageCircle } from 'lucide-react'

interface SolutionFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  example: {
    child: string
    bot: string
  }
  color: string
}

const SolutionFeature: React.FC<SolutionFeatureProps> = ({ 
  icon, 
  title, 
  description, 
  example,
  color 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
          <p className="text-text/70 mb-4">{description}</p>
          
          {/* Example Dialog */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-accent font-medium">Ребенок:</span>
              <span className="text-text/80 italic">"{example.child}"</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-medium">Бот:</span>
              <span className="text-text/80">"{example.bot}"</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const SolutionSection: React.FC = () => {
  const features: SolutionFeatureProps[] = [
    {
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      title: "🔄 Переводчик эмоций",
      description: "Расшифровываем, что на самом деле хочет сказать ваш ребенок",
      example: {
        child: "Отстань, ты ничего не понимаешь!",
        bot: "Ребенок чувствует, что его границы нарушены. Он хочет самостоятельности, но боится ошибиться. Попробуйте: 'Я вижу, что ты справишься сам. Если понадобится помощь - я рядом'"
      },
      color: "bg-primary"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "📊 Семейный пульс",
      description: "Отслеживаем эмоциональный климат семьи",
      example: {
        child: "Все нормально (хлопает дверью)",
        bot: "За последнюю неделю у ребенка накопилось напряжение. Триггеры: понедельник (контрольная), среда (ссора с другом). Рекомендую дать пространство и предложить на выходных погулять вместе"
      },
      color: "bg-success"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "💡 Персональные советы",
      description: "Работающие фразы для сложных ситуаций",
      example: {
        child: "Я не буду делать уроки!",
        bot: "Для вашего ребенка (визуал, 14 лет) сработает: 'Давай составим план - что самое сложное? Сделаем все вместе от простого к сложному, что думаешь?'"
      },
      color: "bg-accent"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/10 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
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
            Family Emotions — детский психолог у вас в кармане
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            Telegram-бот, который переводит эмоции вашего ребенка на понятный язык
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-1 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <SolutionFeature {...feature} />
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-text">
            Стать на шаг ближе всего за 3 минуты
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h4 className="font-bold text-text mb-2">Начните в Telegram</h4>
              <p className="text-text/70">Нажмите кнопку "Начать", бот сам все расскажет</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h4 className="font-bold text-text mb-2">Добавьте семью</h4>
              <p className="text-text/70">Пригласите детей и партнера или используйте соло</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h4 className="font-bold text-text mb-2">Получите первый совет</h4>
              <p className="text-text/70">Опишите ситуацию и получите расшифровку эмоций</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection