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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary to-background pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10 px-8 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-full px-6 py-3 mb-8 relative"
          >
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-text/80 font-medium">Уже 2,847 российских семей улучшили отношения с детьми</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-6 sm:px-0"
          >
            <span className="text-text">Ваш подросток кричит</span>
            <br />
            <span className="text-accent">и хлопает дверью?</span>
            <br />
            <span className="text-text">Проблема не в вас и не в нем</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-text/80 mb-12 max-w-4xl mx-auto leading-relaxed px-6 sm:px-0"
          >
            Переводчик с подросткового на родительский, который экономит 
            <span className="font-bold text-accent"> 7 часов в неделю</span> на конфликтах и стоит 
            <span className="font-bold text-primary"> в 10 раз дешевле</span> психолога
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
              className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold group inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl animate-glow"
            >
              Попробовать бесплатно 14 дней
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative max-w-4xl mx-auto px-4 sm:px-8"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-primary/20">
              <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
                {/* Problem */}
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                  </div>
                  <p className="text-text/70 text-xs sm:text-sm font-medium">"Отстань!"</p>
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary ml-1 sm:ml-2" />
                </div>

                {/* Solution */}
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                  </div>
                  <p className="text-text/70 text-xs sm:text-sm font-medium">Понимание</p>
                </div>
              </div>

              {/* Example Translation */}
              <div className="bg-primary/5 rounded-xl p-4 text-left">
                <div className="text-sm text-text/60 mb-2">Family Emotions переводит:</div>
                <div className="text-primary font-medium mb-2">"Ребенок чувствует, что его границы нарушены. Он хочет самостоятельности, но боится ошибиться."</div>
                <div className="text-sm text-text/60">💡 Попробуйте сказать: "Я вижу, что ты справишься сам. Если понадобится помощь - я рядом"</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default HeroSection
