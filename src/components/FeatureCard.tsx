import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 border-2 hover:border-blue-200">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
