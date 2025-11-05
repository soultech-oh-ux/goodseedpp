import CenterCard from '../CenterCard';
import centerImage from '@assets/generated_images/Giheung_center_exterior_view_3e0f256e.png';

export default function CenterCardExample() {
  return (
    <div className="max-w-md">
      <CenterCard
        name="기흥디딤돌 지역아동센터"
        description="아이들이 안전하고 행복하게 성장할 수 있는 공간을 제공합니다. 다양한 교육 프로그램과 돌봄 서비스를 통해 지역사회 아동들의 건강한 발달을 지원합니다."
        image={centerImage}
        address="용인시 기흥구"
        website="https://hjy.kr/center/module.php?cId=bora4u&subMenuSerno=932"
        onLearnMore={() => console.log('Learn more clicked')}
      />
    </div>
  );
}
