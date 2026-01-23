import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Coins, HandHeart } from "lucide-react";
import supportVideo from "@assets/미래사회2040_1769161323740.mp4";

export default function SupportSection() {
  const supportWays = [
    {
      icon: Heart,
      title: "정기 후원",
      description: "매월 일정 금액을 후원하여 지속적으로 아이들을 지원합니다.",
    },
    {
      icon: Coins,
      title: "일시 후원",
      description: "원하는 금액을 자유롭게 후원하실 수 있습니다.",
    },
    {
      icon: Users,
      title: "조합원 가입",
      description: "조합원으로 참여하여 함께 성장하는 조합을 만들어갑니다.",
    },
    {
      icon: HandHeart,
      title: "재능 기부",
      description: "교육, 상담 등 전문 지식과 재능을 나누어주세요.",
    },
  ];

  const handleInquiry = () => {
    console.log('후원 문의 clicked');
    window.location.href = '/contact';
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">함께 만드는 행복</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            여러분의 따뜻한 관심과 후원이 아이들의 밝은 미래를 만듭니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportWays.map((way, index) => (
            <Card key={index} className="hover-elevate" data-testid={`support-card-${way.title}`}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-4">
                  <way.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{way.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {way.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={supportVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80" />
          
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">후원 및 참여 문의</h3>
            <p className="text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              굿씨드피플 사회적협동조합과 함께 지역사회 아동들의 밝은 미래를 만들어가고 싶으신가요?<br />
              후원, 조합원 가입, 재능 기부 등 다양한 방법으로 참여하실 수 있습니다.
            </p>
            
            <div className="bg-white/95 dark:bg-card/95 backdrop-blur-sm rounded-lg p-6 mb-6 max-w-md mx-auto border">
              <h4 className="font-semibold text-lg mb-3">후원 계좌 안내</h4>
              <div className="text-left space-y-2">
                <p className="text-sm">
                  <span className="text-muted-foreground">은행:</span> <span className="font-medium">농협</span>
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">계좌번호:</span> <span className="font-medium">301-0375-6511-31</span>
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">예금주:</span> <span className="font-medium">굿씨드피플사회적협동조합</span>
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="gap-2 bg-white text-primary hover:bg-white/90"
              onClick={handleInquiry}
              data-testid="button-support-inquiry"
            >
              <Heart className="h-5 w-5" />
              후원 문의하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
