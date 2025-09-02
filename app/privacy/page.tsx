import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
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
            Политика конфиденциальности
          </h1>
          
          <div className="prose prose-lg max-w-none text-text/80">
            <p className="text-sm text-text/60 mb-6">
              Дата последнего обновления: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">1. Общие положения</h2>
              <p className="mb-4">
                Мы в Family Emotions понимаем важность конфиденциальности семейной информации. 
                Эта политика описывает, как мы собираем, используем и защищаем ваши данные.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">2. Какие данные мы собираем</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Данные регистрации:</strong> имя, email, номер телефона (через Telegram)</li>
                <li><strong>Информация о семье:</strong> количество и возраст детей (без имен)</li>
                <li><strong>История общения:</strong> ваши запросы и наши рекомендации</li>
                <li><strong>Техническая информация:</strong> ID Telegram, время использования</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">3. Как мы используем данные</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Для персонализации рекомендаций под вашу семью</li>
                <li>Для улучшения качества советов ИИ</li>
                <li>Для обработки подписки и платежей</li>
                <li>Для технической поддержки</li>
                <li>Для анонимной статистики и исследований</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">4. Защита данных</h2>
              <p className="mb-4">
                <strong>Мы НЕ храним и НЕ запрашиваем:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Имена ваших детей</li>
                <li>Фотографии или видео</li>
                <li>Точный адрес проживания</li>
                <li>Личную переписку вне бота</li>
              </ul>
              <p className="mb-4">
                <strong>Меры защиты:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Шифрование всех данных</li>
                <li>Защищенные серверы в РФ</li>
                <li>Двухфакторная аутентификация для сотрудников</li>
                <li>Регулярные аудиты безопасности</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">5. Передача третьим лицам</h2>
              <p className="mb-4">
                Мы НИКОГДА не продаем и не передаем ваши данные. Исключения:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Платежные системы (только для обработки оплаты)</li>
                <li>Требования законодательства РФ</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">6. Ваши права</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Запросить все данные о вашей семье</li>
                <li>Исправить неточную информацию</li>
                <li>Удалить все данные полностью</li>
                <li>Экспортировать историю рекомендаций</li>
                <li>Отозвать согласие на обработку</li>
              </ul>
              <p className="mt-4">
                Для этого напишите команду /privacy в боте или на email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">7. Данные детей</h2>
              <p className="mb-4">
                Мы не взаимодействуем напрямую с детьми младше 18 лет. 
                Вся информация о детях предоставляется только родителями и 
                используется исключительно для формирования рекомендаций.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">8. Хранение данных</h2>
              <p className="mb-4">
                Данные хранятся пока вы используете сервис. После отмены подписки:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>История рекомендаций хранится 90 дней</li>
                <li>Учетные данные хранятся 1 год</li>
                <li>После этого все удаляется автоматически</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">9. Изменения политики</h2>
              <p className="mb-4">
                При изменении политики мы уведомим вас через Telegram-бот. 
                Продолжение использования означает согласие с изменениями.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text mb-4">10. Контакты</h2>
              <p className="mb-4">
                По вопросам конфиденциальности:
              </p>
              <ul className="list-none space-y-1">
                <li>Email: privacy@familyemotions.ru</li>
                <li>Telegram: @FamilyEmotionsSupport</li>
                <li>Телефон: 8 (800) 555-35-35</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}