"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, MessageCircle, Users } from 'lucide-react'
import { trackEngagement } from '@/lib/analytics'

const HeroSection: React.FC = () => {
  const handleCTAClick = () => {
    trackEngagement.heroCtaClick()
    window.location.href = '/billing'
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10 px-8 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 relative"
          >
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-white font-medium">Уже 2,847 российских семей улучшили отношения с детьми</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-6 sm:px-0"
          >
            <span className="text-white">Ваш подросток кричит</span>
            <br />
            <span className="text-accent">и хлопает дверью?</span>
            <br />
            <span className="text-white">Проблема не в вас и не в нем</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed px-6 sm:px-0"
          >
            Переводчик с подросткового на родительский, который 
            <span className="font-bold text-accent"> даст вам выдохнуть</span> и стоит 
            <span className="font-bold text-accent"> в 10 раз дешевле</span> психолога
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <button 
              onClick={handleCTAClick} 
              className="bg-accent hover:bg-accent/90 text-text text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold group inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl animate-glow"
            >
              Попробовать бесплатно 14 дней
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative max-w-5xl mx-auto px-4 sm:px-8"
          >
            <div className="relative">
              {/* SVG Illustration */}
              <img 
                src="/hero-illustration.svg" 
                alt="Family Emotions - помощь в общении с подростком"
                className="w-full h-auto max-w-3xl mx-auto"
              />
              
              {/* Floating Cards with Examples */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-10 left-0 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-primary/20 max-w-xs hidden lg:block"
              >
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-text">Ребенок: "Отстань!"</p>
                    <p className="text-xs text-text/60 mt-1">Перевод: "Мне нужно пространство"</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute top-20 right-0 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-primary/20 max-w-xs hidden lg:block"
              >
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-text">87% родителей</p>
                    <p className="text-xs text-text/60 mt-1">видят улучшения за неделю</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white rounded-xl p-4 shadow-lg max-w-sm hidden md:block"
              >
                <div className="text-center">
                  <p className="text-sm font-medium">Начните прямо сейчас</p>
                  <p className="text-xs opacity-90 mt-1">299₽/месяц • Первые 14 дней бесплатно</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
