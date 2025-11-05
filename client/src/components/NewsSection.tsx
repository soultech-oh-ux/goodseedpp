import { Button } from "@/components/ui/button";
import NewsCard from "./NewsCard";
import { ArrowRight } from "lucide-react";
import newsImage1 from "@assets/generated_images/Children_reading_together_activity_40805008.png";
import newsImage2 from "@assets/generated_images/Children_arts_and_crafts_5e1e3ba5.png";
import newsImage3 from "@assets/generated_images/Outdoor_playground_activities_scene_73c17f78.png";

export default function NewsSection() {
  //todo: remove mock functionality
  const mockNews = [
    {
      id: 1,
      title: "2025년 상반기 신규 프로그램 안내",
      excerpt: "새로운 교육 프로그램과 다양한 체험 활동을 준비했습니다. 많은 관심과 참여 부탁드립니다.",
      image: newsImage1,
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: 2,
      title: "겨울방학 특별 프로그램 운영",
      excerpt: "아이들과 함께하는 즐거운 겨울방학 특별 프로그램을 운영합니다.",
      image: newsImage2,
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: 3,
      title: "후원자 감사 행사 개최",
      excerpt: "지역사회 후원자 여러분을 초대하여 감사의 마음을 전하는 행사를 개최합니다.",
      image: newsImage3,
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    }
  ];

  const handleNewsClick = (id: number) => {
    console.log(`News ${id} clicked`);
    window.location.href = `/news/${id}`;
  };

  const handleViewAll = () => {
    console.log('View all news clicked');
    window.location.href = '/news';
  };

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">소식 & 활동</h2>
            <p className="text-lg text-muted-foreground">
              최근 소식과 활동을 확인해보세요
            </p>
          </div>
          <Button 
            variant="outline" 
            className="gap-2 hidden sm:flex"
            onClick={handleViewAll}
            data-testid="button-view-all-news"
          >
            전체보기
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {mockNews.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              excerpt={news.excerpt}
              image={news.image}
              date={news.date}
              onClick={() => handleNewsClick(news.id)}
            />
          ))}
        </div>

        <div className="text-center sm:hidden">
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={handleViewAll}
            data-testid="button-view-all-news-mobile"
          >
            전체보기
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
