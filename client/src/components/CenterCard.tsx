import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

interface CenterCardProps {
  name: string;
  description: string;
  image: string;
  address?: string;
  website?: string;
  onLearnMore: () => void;
}

export default function CenterCard({ 
  name, 
  description, 
  image, 
  address,
  website,
  onLearnMore 
}: CenterCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-center-${name}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{name}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
        {address && (
          <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{address}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button 
          variant="default" 
          className="flex-1 gap-2"
          onClick={onLearnMore}
          data-testid={`button-learn-${name}`}
        >
          자세히 보기
          <ArrowRight className="h-4 w-4" />
        </Button>
        {website && (
          <Button 
            variant="outline"
            onClick={() => window.open(website, '_blank')}
            data-testid={`button-website-${name}`}
          >
            홈페이지
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
