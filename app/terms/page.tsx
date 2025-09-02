import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
      <div className="container-custom py-16 px-6 sm:px-8 lg:px-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Вернуться на главную
        </Link>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-text mb-8">
            Условия использования
          </h1>
          
          <div className="prose prose-lg max-w-none text-text/80">
            <p className="text-sm text-text/60 mb-6">
              Дата последнего обновления: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">1. Общие положения</h2>
              <p className="mb-4">
                Добро пожаловать в Family Emotions! Используя наш Telegram-бот и связанные услуги, 
                вы соглашаетесь с настоящими условиями использования.
              </p>
              <p className="mb-4">
                Family Emotions — это сервис, помогающий родителям лучше понимать эмоции своих детей-подростков 
                и улучшать семейную коммуникацию через персонализированные рекомендации.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">2. Использование сервиса</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Сервис предназначен для родителей детей от 10 до 18 лет</li>
                <li>Вы обязуетесь предоставлять достоверную информацию при регистрации</li>
                <li>Один аккаунт может использоваться для одной семьи</li>
                <li>Запрещено использовать сервис в незаконных или вредоносных целях</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">3. Подписка и оплата</h2>
              <p className="mb-4">
                Family Emotions предлагает три тарифных плана:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Базовый</strong> — 299₽/месяц для одного ребенка</li>
                <li><strong>Семейный</strong> — 499₽/месяц для 2-3 детей</li>
                <li><strong>Премиум</strong> — 699₽/месяц для неограниченного числа детей</li>
              </ul>
              <p className="mb-4">
                Первые 14 дней предоставляются бесплатно. Оплата взимается ежемесячно. 
                Вы можете отменить подписку в любое время через настройки бота.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">4. Конфиденциальность</h2>
              <p className="mb-4">
                Мы серьезно относимся к защите ваших данных. Вся информация о вашей семье 
                остается конфиденциальной и не передается третьим лицам. Подробнее читайте в нашей{' '}
                <Link href="/privacy" className="text-primary hover:text-primary/80">
                  Политике конфиденциальности
                </Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">5. Отказ от ответственности</h2>
              <p className="mb-4">
                Family Emotions предоставляет рекомендации на основе искусственного интеллекта 
                и не заменяет профессиональную психологическую помощь. В случае серьезных 
                проблем рекомендуем обратиться к квалифицированному специалисту.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">6. Изменения условий</h2>
              <p className="mb-4">
                Мы оставляем за собой право изменять данные условия. При существенных изменениях 
                мы уведомим вас через Telegram-бот или email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">7. Контакты</h2>
              <p className="mb-4">
                По всем вопросам обращайтесь в поддержку через Telegram-бот 
                или на email: support@familyemotions.ru
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}