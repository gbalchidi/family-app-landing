"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { trackEngagement } from '@/lib/analytics'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-white to-secondary/20 border-t border-gray-200">
      <div className="container-custom py-12 sm:py-16 px-6 sm:px-8 lg:px-12">
        {/* Company Info - Centered */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-text">Family Emotions</span>
          </div>
          <p className="text-text/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Telegram-бот, который помогает родителям понимать эмоции подростков 
            и находить общий язык. Начните улучшать отношения уже сегодня.
          </p>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 mb-12 max-w-2xl mx-auto text-center shadow-lg border border-primary/10"
        >
          <h3 className="text-2xl font-bold text-text mb-4">
            Оставайтесь в курсе
          </h3>
          <p className="text-text/70 mb-6">
            Получайте советы психологов и новые методики общения с подростками
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-full bg-gray-50 border border-gray-200 text-text placeholder-text/50 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button 
              onClick={() => trackEngagement.contactClick('newsletter')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
            >
              Подписаться
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm mb-4">
            <a 
              href="/terms" 
              onClick={() => trackEngagement.footerLinkClick('terms', '/terms')}
              className="text-text/60 hover:text-primary transition-colors"
            >
              Условия использования
            </a>
            <a 
              href="/privacy" 
              onClick={() => trackEngagement.footerLinkClick('privacy', '/privacy')}
              className="text-text/60 hover:text-primary transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
          <div className="text-text/60 text-sm">
            © {currentYear} Family Emotions. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer