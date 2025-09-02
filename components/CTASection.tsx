"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Clock, Shield, Users } from 'lucide-react'

const CTASection: React.FC = () => {
  const handleCTAClick = () => {
    window.location.href = '/billing'
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10 px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6">
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md border border-primary/30 rounded-full px-6 py-3 mb-8"
          >
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-text/90 font-medium">Начните прямо сейчас</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-text">Каждый день без помощи — это</span>
            <br />
            <span className="text-primary">упущенная возможность стать ближе</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-text/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            5,000+ родителей уже улучшили отношения с детьми. 
            87% видят первые результаты в течение недели.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 text-text/80">
              <Heart className="w-6 h-6 text-primary flex-shrink-0" />
              <span>3 минуты до первого совета</span>
            </div>
            <div className="flex items-center gap-3 text-text/80">
              <Shield className="w-6 h-6 text-success flex-shrink-0" />
              <span>Без риска, 100% конфиденциально</span>
            </div>
            <div className="flex items-center gap-3 text-text/80">
              <Users className="w-6 h-6 text-accent flex-shrink-0" />
              <span>Для всей семьи</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-16 px-4"
          >
            <button onClick={handleCTAClick} className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group inline-flex items-center justify-center whitespace-normal text-center">
              <span>Начать улучшать отношения за 299₽</span>
              <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
          </motion.div>

          {/* Price Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <p className="text-text/80 font-medium">
              💰 Сравните: 1 консультация психолога = 5,000₽
              <br />
              <span className="text-primary font-bold">Family Emotions = 299₽/месяц за неограниченную помощь</span>
            </p>
          </motion.div>

          {/* Final Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <p className="text-text/60 text-sm">
              Нажимая кнопку, вы соглашаетесь с нашими 
              <a href="/terms" className="text-primary hover:text-primary/80 underline ml-1">Условиями использования</a> и 
              <a href="/privacy" className="text-primary hover:text-primary/80 underline ml-1">Политикой конфиденциальности</a>
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default CTASection