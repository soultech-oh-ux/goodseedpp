import NewsCard from '../NewsCard';
import newsImage from '@assets/generated_images/Children_reading_together_activity_40805008.png';

export default function NewsCardExample() {
  return (
    <div className="max-w-sm">
      <NewsCard
        title="2025년 상반기 신규 프로그램 안내"
        excerpt="새로운 교육 프로그램과 다양한 체험 활동을 준비했습니다. 많은 관심과 참여 부탁드립니다."
        image={newsImage}
        date={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)}
        onClick={() => console.log('News card clicked')}
      />
    </div>
  );
}
