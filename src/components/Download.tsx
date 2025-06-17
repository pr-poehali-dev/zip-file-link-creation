import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Download = () => {
  const handleDownload = () => {
    // В будущем здесь будет логика загрузки zip файла
    console.log("Начинается загрузка...");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Готовы начать?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Скачайте наше приложение прямо сейчас и откройте новые возможности
            для вашего бизнеса
          </p>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center">
                <Icon name="Download" size={40} className="text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white">
                Скачать приложение
              </CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Версия 2.0 - последняя стабильная сборка
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Download" className="mr-2" size={24} />
                  Скачать ZIP (45 МБ)
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center pt-6 border-t border-white/20">
                <div>
                  <Icon
                    name="Shield"
                    className="mx-auto mb-2 text-green-400"
                    size={24}
                  />
                  <p className="text-sm text-blue-100">Безопасно</p>
                </div>
                <div>
                  <Icon
                    name="Zap"
                    className="mx-auto mb-2 text-yellow-400"
                    size={24}
                  />
                  <p className="text-sm text-blue-100">Быстро</p>
                </div>
                <div>
                  <Icon
                    name="Heart"
                    className="mx-auto mb-2 text-pink-400"
                    size={24}
                  />
                  <p className="text-sm text-blue-100">Бесплатно</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Download;
