# 굿씨드피플 사회적협동조합 랜딩 페이지

## 프로젝트 개요
굿씨드피플 사회적협동조합의 공식 랜딩 홈페이지입니다. 조합 소개, 운영 센터 안내, 프로그램 정보, 최신 소식, 후원 안내 및 각종 문의 접수 기능을 제공합니다.

**설립 목적**: 지역아동센터 설치 및 운영사업을 통해 지역사회에 필요한 아동 돌봄서비스를 제공하여, 지역사회 내 아동들이 건전한 사회구성원으로 성장할 수 있도록 지원

**이사장**: 오하람  
**주소**: 경기도 용인시 기흥구 신갈로 68번길 21, 2층

## 최근 변경사항
- 2025-01-05: 초기 프로젝트 구축 완료
  - 반응형 랜딩 페이지 디자인 구현
  - 문의 접수 시스템 구축
  - 소식 관리 기능 추가
  - 브랜드 컬러(파란색 #4169E1, 노란색 #FFC107) 적용

## 프로젝트 아키텍처

### 기술 스택
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js
- **Database**: In-memory storage (MemStorage)
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form + Zod validation
- **Routing**: Wouter

### 주요 페이지
1. **홈페이지** (`/`)
   - Hero 섹션: 메인 비주얼 및 CTA
   - 조합 소개: 설립 목적, 이사장 인사말, 주요 통계
   - 운영 센터: 기흥디딤돌, 윈바신갈 지역아동센터
   - 프로그램 & 서비스: 6가지 주요 프로그램
   - 소식 & 활동: 최근 3개 소식
   - 후원 안내: 4가지 후원 방법

2. **문의 페이지** (`/contact`)
   - 연락처 정보 (주소, 이메일, 전화)
   - 문의 양식 (일반/후원/강사/교육/조합원 가입)

### API 엔드포인트

#### POST /api/inquiries
문의 접수
```typescript
Request: {
  type: "general" | "support" | "instructor" | "education" | "membership",
  name: string,
  email: string,
  phone?: string,
  subject: string,
  message: string
}
Response: { success: boolean, data: Inquiry }
```

#### GET /api/inquiries
모든 문의 조회
```typescript
Response: { success: boolean, data: Inquiry[] }
```

#### GET /api/news
소식 목록 조회 (최신순)
```typescript
Response: { success: boolean, data: News[] }
```

#### GET /api/news/:id
특정 소식 조회
```typescript
Response: { success: boolean, data: News }
```

### 데이터 모델

#### Inquiry (문의)
- id: string (UUID)
- type: string (문의 유형)
- name: string (이름)
- email: string (이메일)
- phone: string (연락처, 선택)
- subject: string (제목)
- message: string (내용)
- createdAt: Date (생성일)

#### News (소식)
- id: string (UUID)
- title: string (제목)
- excerpt: string (요약)
- content: string (본문)
- image: string | null (이미지 URL)
- date: Date (게시일)

## 디자인 시스템

### 컬러 팔레트
- **Primary (파란색)**: `hsl(225, 80%, 50%)` - 메인 브랜드 컬러
- **Accent (노란색)**: `hsl(45, 95%, 58%)` - 강조 컬러
- **Background**: `hsl(210, 5%, 98%)` - 배경
- **Card**: `hsl(210, 5%, 96%)` - 카드 배경

### 타이포그래피
- **Font Family**: Noto Sans KR (Google Fonts)
- **Hero Headlines**: text-4xl md:text-5xl lg:text-6xl
- **Section Headers**: text-3xl md:text-4xl
- **Body Text**: text-base md:text-lg

### 간격 시스템
- Section padding: py-16 md:py-24
- Component spacing: gap-6 md:gap-8
- Container: max-w-7xl mx-auto

## 운영 센터

### 기흥디딤돌 지역아동센터
- 웹사이트: https://hjy.kr/center/module.php?cId=bora4u&subMenuSerno=932
- 위치: 용인시 기흥구

### 윈바신갈 지역아동센터
- 웹사이트: https://www.hjy.kr/center/index.php?cId=em-pk
- 위치: 용인시 기흥구

## 개발 가이드

### 로컬 개발 환경 실행
```bash
npm run dev
```
서버가 http://localhost:5000 에서 실행됩니다.

### 프로젝트 구조
```
client/
  src/
    components/     # 재사용 가능한 UI 컴포넌트
    pages/         # 페이지 컴포넌트
    lib/           # 유틸리티 및 설정
server/
  routes.ts       # API 라우트
  storage.ts      # 데이터 저장소
shared/
  schema.ts       # 공유 타입 및 스키마
```

### 주요 컴포넌트
- `Header`: 네비게이션 헤더 (모바일 메뉴 지원)
- `Footer`: 푸터 (연락처, 바로가기)
- `HeroSection`: 메인 히어로 섹션
- `AboutSection`: 조합 소개
- `CentersSection`: 센터 안내
- `ProgramsSection`: 프로그램 소개
- `NewsSection`: 최근 소식
- `SupportSection`: 후원 안내
- `InquiryForm`: 문의 양식

### 이미지 에셋
생성된 이미지는 `attached_assets/generated_images/` 에 저장되어 있으며,
`@assets` alias를 통해 임포트합니다:
```typescript
import heroImage from '@assets/generated_images/Hero_image_children_learning_98c6be77.png';
```

## 향후 개선 사항
1. PostgreSQL 데이터베이스 연동 (현재 in-memory)
2. 관리자 페이지 구축 (소식 작성, 문의 관리)
3. 후원 결제 시스템 통합
4. 센터별 상세 페이지
5. 프로그램 일정 및 신청 기능
6. 포토 갤러리
7. 조합원 전용 로그인
8. 이메일 알림 (문의 접수 시)

## 테스트
e2e 테스트 완료:
- 홈페이지 모든 섹션 렌더링 확인
- 문의 양식 제출 및 데이터 저장 검증
- 소식 목록 조회 기능 확인
- 반응형 디자인 동작 확인

## 라이선스
Copyright © 2025 굿씨드피플 사회적협동조합. All rights reserved.
