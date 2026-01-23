import CenterCard from "./CenterCard";
import centerImage1 from "@assets/기흥지역아동센터_1769155718472.png";
import centerImage2 from "@assets/generated_images/윈바신갈센터_미술활동_장면_5014943b.png";

export default function CentersSection() {
  const centers = [
    {
      name: "기흥지역아동센터",
      description: "아이들이 안전하고 행복하게 성장할 수 있는 공간을 제공합니다. 다양한 교육 프로그램과 돌봄 서비스를 통해 지역사회 아동들의 건강한 발달을 지원합니다.",
      image: centerImage1,
      address: "용인시 기흥구",
      website: "https://www.hjy.kr/center/module.php?cId=bora4u&subMenuSerno=931"
    },
    {
      name: "윈바신갈 지역아동센터",
      description: "따뜻하고 안전한 환경에서 아이들의 꿈과 재능을 키워갑니다. 전문적인 교육 프로그램과 정서적 지원을 통해 아동들의 전인적 성장을 돕습니다.",
      image: centerImage2,
      address: "용인시 기흥구",
      website: "https://www.hjy.kr/center/index.php?cId=em-pk"
    }
  ];

  const handleLearnMore = (centerName: string) => {
    console.log(`${centerName} 자세히 보기 clicked`);
    window.location.href = '/centers';
  };

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">운영 센터</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            지역사회 아동들을 위한 안전하고 따뜻한 공간
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {centers.map((center) => (
            <CenterCard
              key={center.name}
              {...center}
              onLearnMore={() => handleLearnMore(center.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
