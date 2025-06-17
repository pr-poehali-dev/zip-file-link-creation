import React from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">
            Добро пожаловать на наш сайт!
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Этот сайт создан с помощью платформы Поехали! Теперь его можно
            опубликовать в интернете всего за несколько кликов.
          </p>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать работу
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/50 py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Создано с помощью Поехали!</p>
        </div>
      </footer>
    </div>
  );
}
