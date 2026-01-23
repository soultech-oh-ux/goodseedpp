import { Card } from "@/components/ui/card";
import InquiryForm from "@/components/InquiryForm";
import { Mail, MapPin, MessageCircle } from "lucide-react";

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
                  href="mailto:gseed2030@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-contact-email"
                >
                  gseed2030@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">카카오톡 문의</h3>
                <a 
                  href="https://open.kakao.com/o/gIw0eVci" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-contact-kakao"
                >
                  카카오 오픈채팅으로 문의하기
                </a>
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
