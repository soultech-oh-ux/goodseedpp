import { Card } from "@/components/ui/card";
import { Users, Target } from "lucide-react";

export default function AboutSection() {

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">조합 소개</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            지역사회와 함께 성장하는 사회적협동조합
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">설립 목적</h3>
                <p className="text-muted-foreground leading-relaxed">
                  지역아동센터 설치 및 운영사업을 통해 지역사회에 필요한 아동 돌봄서비스를 제공하여, 
                  지역사회 내 아동들이 건전한 사회구성원으로 성장할 수 있도록 돕고, 
                  아동들을 안전하게 보호하여 부모들이 안심하고 사회생활에 전념할 수 있도록 지원합니다.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">이사장 인사말</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  안녕하세요. 굿씨드피플 사회적협동조합 이사장 오하람입니다.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  우리 조합은 지역사회 아동들에게 안전하고 따뜻한 보금자리를 제공하며, 
                  건강한 성장을 돕기 위해 최선을 다하고 있습니다.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
