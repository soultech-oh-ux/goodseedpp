import { Card } from "@/components/ui/card";
import InquiryForm from "@/components/InquiryForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">문의하기</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            궁금하신 사항이나 후원, 강사 문의 등 언제든지 연락주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">주소</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  경기도 용인시 기흥구<br />
                  신갈로 68번길 21, 2층
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">이메일</h3>
                <a 
                  href="mailto:info@goodseedpeople.or.kr" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-contact-email"
                >
                  info@goodseedpeople.or.kr
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">전화</h3>
                <p className="text-sm text-muted-foreground">
                  문의 전화 안내 예정
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">문의 양식</h2>
            <InquiryForm />
          </div>
        </Card>
      </div>
    </div>
  );
}
