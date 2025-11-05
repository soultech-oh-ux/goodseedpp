import { Button } from "@/components/ui/button";
import NewsCard from "./NewsCard";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { News } from "@shared/schema";
import newsImage1 from "@assets/generated_images/Children_reading_together_activity_40805008.png";
import newsImage2 from "@assets/generated_images/Children_arts_and_crafts_5e1e3ba5.png";
import newsImage3 from "@assets/generated_images/Outdoor_playground_activities_scene_73c17f78.png";

const mockImages = [newsImage1, newsImage2, newsImage3];

export default function NewsSection() {
  const { data: newsData, isLoading } = useQuery<{ success: boolean; data: News[] }>({
    queryKey: ["/api/news"],
  });

  const news = newsData?.data || [];
  const latestNews = news.slice(0, 3);

  const handleNewsClick = (id: string) => {
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

        {isLoading ? (
          <div className="text-center py-12 text-muted-foreground">로딩 중...</div>
        ) : latestNews.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">아직 소식이 없습니다.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {latestNews.map((newsItem, index) => (
              <NewsCard
                key={newsItem.id}
                title={newsItem.title}
                excerpt={newsItem.excerpt}
                image={newsItem.image || mockImages[index % mockImages.length]}
                date={new Date(newsItem.date)}
                onClick={() => handleNewsClick(newsItem.id)}
              />
            ))}
          </div>
        )}

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
