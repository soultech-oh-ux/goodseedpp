import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_children_learning_98c6be77.png";

export default function HeroSection() {
  const handleSupport = () => {
    console.log('후원하기 clicked');
    window.location.href = '/support';
  };

  const handleLearnMore = () => {
    console.log('더 알아보기 clicked');
    window.location.href = '/about';
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="아이들이 함께 배우는 모습" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          사람을 살리고<br />내일을 설계하는 굿씨드 피플
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          지역아동센터를 통해 아동 돌봄서비스를 제공하여<br />
          지역사회 아이들이 건전한 사회구성원으로 성장할 수 있도록 돕습니다
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gap-2 bg-accent hover:bg-accent text-accent-foreground border border-accent-border"
            onClick={handleSupport}
            data-testid="button-hero-support"
          >
            <Heart className="h-5 w-5" />
            후원하기
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            onClick={handleLearnMore}
            data-testid="button-hero-learn"
          >
            더 알아보기
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="stat-members">
            <div className="text-3xl font-bold text-white mb-1">4명</div>
            <div className="text-sm text-white/80">조합원</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="stat-centers">
            <div className="text-3xl font-bold text-white mb-1">2개</div>
            <div className="text-sm text-white/80">지역아동센터</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="stat-location">
            <div className="text-lg font-bold text-white mb-1">용인시 기흥구</div>
            <div className="text-sm text-white/80">운영 지역</div>
          </div>
        </div>
      </div>
    </section>
  );
}
