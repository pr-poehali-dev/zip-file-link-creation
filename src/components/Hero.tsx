import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Инновационное ПО
          </h1>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1BLa4fwRNXcqXlqxi_zMfK43HL0voFYB-/view",
                  "_blank",
                )
              }
            >
              <Icon name="Download" className="mr-2" size={20} />
              Скачать приложение
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
