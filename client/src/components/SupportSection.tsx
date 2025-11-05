import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Coins, HandHeart } from "lucide-react";

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

        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">후원 및 참여 문의</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              굿씨드피플 사회적협동조합과 함께 지역사회 아동들의 밝은 미래를 만들어가고 싶으신가요?<br />
              후원, 조합원 가입, 재능 기부 등 다양한 방법으로 참여하실 수 있습니다.
            </p>
            <Button 
              size="lg" 
              className="gap-2"
              onClick={handleInquiry}
              data-testid="button-support-inquiry"
            >
              <Heart className="h-5 w-5" />
              후원 문의하기
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
