import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image?: string;
  date: Date;
  onClick: () => void;
}

export default function NewsCard({ title, excerpt, image, date, onClick }: NewsCardProps) {
  return (
    <Card 
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer" 
      onClick={onClick}
      data-testid={`card-news-${title.substring(0, 10)}`}
    >
      {image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4" />
          <time>{formatDistanceToNow(date, { addSuffix: true, locale: ko })}</time>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {excerpt}
        </p>
      </CardContent>
    </Card>
  );
}
