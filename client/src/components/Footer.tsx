import { Mail, MessageCircle, MapPin } from "lucide-react";
import logoImage from "@assets/60_10굿씨드피플-001_1762335630209.jpg";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="굿씨드피플 로고" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-lg">굿씨드피플</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              사람을 살리고 내일을 설계하는<br />
              굿씨드 피플 사회적협동조합
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>경기도 용인시 기흥구 신갈로 68번길 21, 2층</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">연락처</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:gseed2030@gmail.com" className="hover:text-foreground transition-colors" data-testid="link-email">
                  gseed2030@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <a href="https://open.kakao.com/o/gIw0eVci" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" data-testid="link-kakao">
                  카카오 오픈채팅 문의
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 굿씨드피플 사회적협동조합. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
