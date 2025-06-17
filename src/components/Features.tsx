import FeatureCard from "@/components/FeatureCard";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: <Icon name="Zap" size={32} />,
      title: "Молниеносная скорость",
      description:
        "Оптимизированные алгоритмы обеспечивают максимальную производительность и быстродействие системы.",
    },
    {
      icon: <Icon name="Shield" size={32} />,
      title: "Надёжная безопасность",
      description:
        "Многоуровневая система защиты данных с современными алгоритмами шифрования.",
    },
    {
      icon: <Icon name="Smartphone" size={32} />,
      title: "Кроссплатформенность",
      description:
        "Работает на всех популярных операционных системах и мобильных устройствах.",
    },
    {
      icon: <Icon name="Users" size={32} />,
      title: "Командная работа",
      description:
        "Инструменты для эффективной совместной работы в режиме реального времени.",
    },
    {
      icon: <Icon name="BarChart3" size={32} />,
      title: "Аналитика данных",
      description:
        "Мощные инструменты анализа и визуализации для принятия обоснованных решений.",
    },
    {
      icon: <Icon name="Cpu" size={32} />,
      title: "ИИ технологии",
      description:
        "Встроенный искусственный интеллект для автоматизации рутинных задач.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наше программное обеспечение объединяет передовые технологии и
            удобство использования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
