import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Palette, Music, GraduationCap, Heart } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      icon: BookOpen,
      title: "학습 지도",
      description: "전문 강사진의 체계적인 학습 지원으로 아동들의 학업 능력을 향상시킵니다."
    },
    {
      icon: Users,
      title: "집단 활동",
      description: "또래 친구들과 함께하는 다양한 활동을 통해 사회성을 기릅니다."
    },
    {
      icon: Palette,
      title: "예술 활동",
      description: "미술, 공예 등 창의적인 예술 활동으로 아이들의 감성을 키웁니다."
    },
    {
      icon: Music,
      title: "문화 체험",
      description: "다양한 문화 체험 활동을 통해 견문을 넓히고 정서를 함양합니다."
    },
    {
      icon: GraduationCap,
      title: "특기 교육",
      description: "아이들의 재능과 흥미를 발견하고 발전시킬 수 있도록 지원합니다."
    },
    {
      icon: Heart,
      title: "정서 지원",
      description: "전문 상담과 심리 지원으로 아동들의 건강한 정서 발달을 돕습니다."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">프로그램 & 서비스</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            아동들의 전인적 성장을 위한 다양한 프로그램
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="hover-elevate" data-testid={`program-card-${program.title}`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
