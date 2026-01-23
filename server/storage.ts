import { type Inquiry, type InsertInquiry, type News, type InsertNews } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  
  createNews(news: InsertNews): Promise<News>;
  getNews(): Promise<News[]>;
  getNewsById(id: string): Promise<News | undefined>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<string, Inquiry>;
  private news: Map<string, News>;

  constructor() {
    this.inquiries = new Map();
    this.news = new Map();
    this.seedData();
  }

  private seedData() {
    const mockNews: News[] = [
      {
        id: "1",
        title: "새로운 프로그램 개발로 미래 준비",
        excerpt: "새로운 교육 프로그램과 다양한 체험 활동을 준비했습니다. 많은 관심과 참여 부탁드립니다.",
        content: "새로운 프로그램 개발을 통해 아이들의 미래를 준비합니다...",
        image: null,
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
      },
      {
        id: "2",
        title: "겨울방학 특별 프로그램 운영",
        excerpt: "아이들과 함께하는 즐거운 겨울방학 특별 프로그램을 운영합니다.",
        content: "겨울방학 특별 프로그램에 대한 자세한 내용입니다...",
        image: null,
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      },
      {
        id: "3",
        title: "후원자 감사 행사 개최",
        excerpt: "지역사회 후원자 여러분을 초대하여 감사의 마음을 전하는 행사를 개최합니다.",
        content: "후원자 감사 행사에 대한 상세 정보입니다...",
        image: null,
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      }
    ];
    
    mockNews.forEach(item => this.news.set(item.id, item));
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = {
      ...insertInquiry,
      phone: insertInquiry.phone || "",
      id,
      createdAt: new Date()
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }

  async createNews(insertNews: InsertNews): Promise<News> {
    const id = randomUUID();
    const newsItem: News = {
      ...insertNews,
      image: insertNews.image || null,
      id,
      date: insertNews.date || new Date()
    };
    this.news.set(id, newsItem);
    return newsItem;
  }

  async getNews(): Promise<News[]> {
    return Array.from(this.news.values()).sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async getNewsById(id: string): Promise<News | undefined> {
    return this.news.get(id);
  }
}

export const storage = new MemStorage();
