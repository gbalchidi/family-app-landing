"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { trackEngagement } from '@/lib/analytics'

interface TestimonialProps {
  name: string
  role: string
  avatar: string
  content: string
  rating: number
  delay: number
  index?: number
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  name, 
  role, 
  avatar, 
  content, 
  rating, 
  delay,
  index = 0
}) => {
  const handleTestimonialView = () => {
    trackEngagement.testimonialView(index, name)
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
          onComplete: () => handleTestimonialView()
        }
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={handleTestimonialView}
    >
      <div className="space-y-6">
        {/* Quote Icon */}
        <div className="flex justify-end">
          <Quote className="w-8 h-8 text-primary/30" />
        </div>
        
        {/* Content */}
        <blockquote className="text-text/80 italic leading-relaxed text-lg">
          "{content}"
        </blockquote>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        
        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
            <img 
              src={avatar} 
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const sibling = target.nextElementSibling as HTMLElement;
                if (sibling) {
                  sibling.style.display = 'flex';
                }
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center" style={{ display: 'none' }}>
              <span className="text-lg font-bold text-primary">{name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          </div>
          <div>
            <div className="font-semibold text-text">{name}</div>
            <div className="text-text/60 text-sm">{role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Елена Михайлова",
      role: "Мама 14-летнего сына, Москва",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "Раньше каждый разговор заканчивался ссорой. Теперь я понимаю, что стоит за его 'отстань' и 'ты не понимаешь'. За 2 недели отношения стали теплее, чем за последние 2 года",
      rating: 5,
      delay: 0
    },
    {
      name: "Сергей Волков",
      role: "Отец двоих подростков, СПб",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Бот показал, что мои дети кричат не из-за неуважения, а от перегрузки в школе. Начали планировать отдых вместе - дети сами предложили поход!",
      rating: 5,
      delay: 0.2
    },
    {
      name: "Анна Федорова",
      role: "Одинокая мама 15-летней дочери",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      content: "299 рублей против 5000 за психолога? И работает лучше! Дочь даже спросила: 'Мам, ты что, курсы прошла?' Теперь мы разговариваем, а не молчим",
      rating: 5,
      delay: 0.4
    },
    {
      name: "Дмитрий Петров",
      role: "Папа 13-летнего сына",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "Скептически относился к ботам. Но этот реально помог понять сына. Оказалось, его агрессия - это попытка защитить границы. Учусь их уважать",
      rating: 5,
      delay: 0.6
    },
    {
      name: "Мария Козлова",
      role: "Мама троих детей",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Семейный тариф - находка! Каждый ребенок уникален, и бот это учитывает. Старшая дочь даже сама начала спрашивать советы у бота",
      rating: 5,
      delay: 0.8
    },
    {
      name: "Александр Новиков",
      role: "Отец 16-летней дочери",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      content: "После развода общение с дочерью было катастрофой. Бот помог найти общий язык. Вчера она впервые за год сказала 'люблю тебя, пап'",
      rating: 5,
      delay: 1.0
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/10 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
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
            Истории семей, которые снова стали близки
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto leading-relaxed">
            Более 5,000 родителей уже улучшили отношения с детьми. 
            Вот их истории перемен:
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} index={index} />
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-12 max-w-2xl mx-auto shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-3xl font-bold text-text mb-2">4.8/5</div>
            <div className="text-text/70 text-lg">Средняя оценка от 5,000+ родителей</div>
            <div className="text-text/50 text-sm mt-2">87% видят улучшения в первую неделю</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection