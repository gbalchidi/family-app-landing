"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Heart, Brain } from 'lucide-react'
import { trackEngagement } from '@/lib/analytics'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  index?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay,
  index = 0
}) => {
  const handleFeatureView = () => {
    trackEngagement.featureView(title, index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6, 
          delay,
          onComplete: () => handleFeatureView()
        }
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={handleFeatureView}
    >
      <div className="text-center space-y-6">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mx-auto">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-text">{title}</h3>
        
        {/* Description */}
        <p className="text-text/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

const FeaturesSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Эмоциональный перевод",
      description: "Помогаем выявить истинные чувства за резкими словами",
      delay: 0
    },
    {
      icon: <Shield className="w-8 h-8 text-success" />,
      title: "Конфиденциальность",
      description: "Все разговоры остаются внутри семьи. Никакого сбора данных, только помощь",
      delay: 0.1
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Обучение на ходу",
      description: "Бот учится понимать именно вашего ребенка, его триггеры и способы выражения эмоций",
      delay: 0.2
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
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
            Почему Family Emotions?
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto leading-relaxed">
            Мы создали первого в России ИИ-психолога, который специализируется именно на подростковых эмоциях
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
