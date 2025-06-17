import React from "react";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <Icon name="Rocket" size={64} className="text-blue-600 mx-auto" />
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Ваш сайт готов! 🚀
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Поздравляем! Ваш проект успешно создан и готов к публикации. Теперь
          давайте выведем его в интернет, чтобы весь мир мог его увидеть.
        </p>

        <div className="bg-blue-100 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Как опубликовать сайт:
          </h3>
          <ol className="text-left text-blue-800 space-y-2">
            <li>1. Нажмите кнопку "Опубликовать" в правом верхнем углу</li>
            <li>2. Выберите настройки публикации</li>
            <li>3. Получите ссылку на ваш сайт</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
