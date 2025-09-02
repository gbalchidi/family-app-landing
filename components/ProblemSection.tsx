"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, MessageCircle, Users } from 'lucide-react'

interface ProblemCardProps {
  icon: React.ReactNode
  title: string
  quote: string
  attribution: string
  iconColor: string
}

const ProblemCard: React.FC<ProblemCardProps> = ({ 
  icon, 
  title, 
  quote, 
  attribution, 
  iconColor 
}) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="text-center space-y-6">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-full ${iconColor} flex items-center justify-center mx-auto`}>
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-text">{title}</h3>
        
        {/* Quote */}
        <blockquote className="text-text/70 italic leading-relaxed">
          "{quote}"
        </blockquote>
        
        {/* Attribution */}
        <p className="text-text/50 text-sm">{attribution}</p>
      </div>
    </motion.div>
  )
}

const ProblemSection: React.FC = () => {
  const problems: ProblemCardProps[] = [
    {
      icon: <Quote className="w-8 h-8 text-accent" />,
      title: "Скандалы из-за домашки",
      quote: "Каждый вечер одно и то же: 'не буду делать уроки', 'отстань', 'ты ничего не понимаешь'. К выходным накапливается столько, что вместо отдыха - разбор полетов",
      attribution: "Мама двоих детей, Москва",
      iconColor: "bg-accent/20 border border-accent/30"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Не о чем поговорить",
      quote: "Дома мы физически, но ментально все еще на работе. Дети это чувствуют. Пытаемся поговорить, но не знаем как начать. Каждый в своем телефоне, в своей комнате",
      attribution: "Папа подростка, Екатеринбург",
      iconColor: "bg-primary/20 border border-primary/30"
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "5,000-15,000 ₽ за консультацию психолога",
      quote: "А нужно минимум раз в неделю, и не только ребенку, но и мне. 40 тысяч в месяц - нереально",
      attribution: "Одинокая мама, СПб",
      iconColor: "bg-red-500/20 border border-red-500/30"
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-secondary/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-text px-4">
            Узнаете себя? Это нормально для 73% российских семей
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 px-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProblemCard {...problem} />
            </motion.div>
          ))}
        </div>

        {/* Transition Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-12 max-w-4xl mx-auto shadow-xl">
            <p className="text-2xl text-text/80 leading-relaxed">
              <span className="text-primary font-bold">Каждый день без помощи</span> — это новые ссоры, 
              которые можно было провести в обнимку за просмотром фильма
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection