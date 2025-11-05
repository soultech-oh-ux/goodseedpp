# Design Guidelines: 굿씨드피플 사회적협동조합 Landing Page

## Design Approach: Reference-Based (Non-Profit/Community)
Drawing inspiration from warm, community-focused organizations like Children's Defense Fund, Save the Children Korea, and local community centers - emphasizing trust, accessibility, and approachability while maintaining professional credibility.

**Core Principles:**
- Warm, welcoming atmosphere that builds trust
- Child-friendly without being childish
- Clear pathways to key actions (donate, inquire, join)
- Showcase real impact and community connection

## Typography System

**Primary Font:** Noto Sans KR (Google Fonts)
- Hero Headlines: font-bold text-4xl md:text-5xl lg:text-6xl
- Section Headers: font-bold text-3xl md:text-4xl
- Subsections: font-semibold text-2xl md:text-3xl
- Body Text: font-normal text-base md:text-lg leading-relaxed
- Small Text/Labels: text-sm

**Hierarchy:** Bold headers create clear sections, generous line-height for Korean text readability

## Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Component spacing: gap-8 md:gap-12
- Inner margins: px-4 md:px-6 lg:px-8
- Card padding: p-6 md:p-8

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-4
- Content blocks: max-w-4xl for text-heavy areas
- Forms: max-w-2xl for optimal readability

## Component Library

### Hero Section
Large hero image showing children engaged in activities at the centers (bright, joyful atmosphere)
- Height: min-h-[600px] with content overlay
- Centered content with backdrop-blur-sm bg-white/90 container for text
- Headline + tagline + dual CTAs ("후원하기" primary, "더 알아보기" secondary)
- Trust indicator strip below hero: "4명의 조합원 | 2개 지역아동센터 | 용인시 기흥구"

### Organization Overview
Two-column layout (md:grid-cols-2):
- Left: Mission statement, establishment info, chairperson intro with small photo
- Right: Key statistics cards (조합원, 직원, 센터 수) in grid-cols-3 gap-4

### Centers Showcase
Card-based layout (md:grid-cols-2 gap-8):
Each center card includes:
- Center thumbnail image (children in activities)
- Center name as heading
- Brief description (2-3 lines)
- "자세히 보기" link with arrow icon
- Cards have subtle shadow (shadow-md hover:shadow-lg transition)

### Programs & Services Section
Icon grid layout (md:grid-cols-3 gap-8):
- Icons from Heroicons (academic-cap, user-group, heart, etc.)
- Service name + brief description
- Each in card format with rounded-lg border

### Call-to-Action Sections
Three distinct CTA zones:
1. **후원 CTA:** Prominent card with stats showing impact
2. **강사/교육 문의:** Form preview with contact button
3. **조합원 가입:** Benefits list + signup flow

### Inquiry Forms (2 forms: General/Donation + Instructor/Education)
Form styling:
- Input fields: rounded-lg border-2 focus:border-blue-500 p-4
- Labels: font-semibold mb-2
- Full-width inputs with proper spacing (space-y-4)
- Select dropdowns styled consistently
- Submit buttons: Large, rounded-lg with icon

### News & Activities
Latest 3 posts in card grid (md:grid-cols-3):
- Small image thumbnail
- Date badge (absolute positioned top-right)
- Title + excerpt (2 lines max with text-ellipsis)
- "더 보기" link at bottom

### Footer
Three-column layout (md:grid-cols-3):
- Column 1: Logo + organization info + address
- Column 2: Quick links (센터 소개, 후원하기, 문의하기, 공지사항)
- Column 3: Contact info + social media icons (if applicable)
- Bottom bar: Copyright + additional links

## Images Strategy

**Required Images:**
1. **Hero Image:** Wide shot of children in learning/play activities, bright and joyful (1920x800px minimum)
2. **Center Images:** 2 representative photos of each center (exterior or children engaged in activities)
3. **Activities Gallery:** 6-9 images showing various programs (use in news/activities section)
4. **Chairperson Photo:** Professional headshot for organization overview (optional but recommended)

**Treatment:** All images should have warm tones, show genuine moments, avoid overly staged photography

## Interactions & Animations

**Minimal, purposeful animations:**
- Smooth scroll behavior for anchor links
- Fade-in on scroll for section reveals (use Intersection Observer)
- Hover lift on cards: hover:translate-y-[-4px] transition-transform
- Button hover states handled by component defaults
- No parallax, no complex scroll-triggered effects

## Accessibility

- Semantic HTML throughout (header, nav, main, section, footer)
- Form labels properly associated with inputs
- Sufficient contrast ratios (AA standard minimum)
- Focus indicators visible on all interactive elements
- Alt text for all images describing context
- Korean language attribute: lang="ko"

## Mobile Responsiveness

**Breakpoint Strategy:**
- Mobile-first approach
- Single column on mobile, multi-column on md: (768px+)
- Touch-friendly targets (min 44x44px)
- Hamburger menu for mobile navigation
- Stacked CTAs on mobile, side-by-side on desktop

**Critical:** All forms and interactive elements must be easily usable on mobile devices