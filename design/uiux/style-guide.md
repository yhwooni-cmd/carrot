# 중고 거래 플랫폼 서비스 - UI/UX 스타일 가이드

## 목차
- [1. 브랜드 아이덴티티](#1-브랜드-아이덴티티)
- [2. 디자인 원칙](#2-디자인-원칙)
- [3. 컬러 시스템](#3-컬러-시스템)
- [4. 타이포그래피](#4-타이포그래피)
- [5. 간격 시스템](#5-간격-시스템)
- [6. 컴포넌트 스타일](#6-컴포넌트-스타일)
- [7. 반응형 브레이크포인트](#7-반응형-브레이크포인트)
- [8. 안전 거래 특화 컴포넌트](#8-안전-거래-특화-컴포넌트)
- [9. 인터랙션 패턴](#9-인터랙션-패턴)
- [10. 변경 이력](#10-변경-이력)

---

## 1. 브랜드 아이덴티티

### 1.1 브랜드 비전
**"모든 사람이 안전하게 거래할 수 있는 신뢰의 플랫폼"**

### 1.2 브랜드 가치
- **안전성**: 사기 방지와 위험 감지를 통한 안전한 거래 환경
- **포용성**: 연령과 기술 숙련도에 관계없는 접근 가능한 디자인
- **투명성**: 모든 정보를 명확하고 이해하기 쉽게 제공
- **신뢰성**: 검증된 정보와 체계적인 안전도 시스템

### 1.3 브랜드 톤앤매너
- **친근하고 신뢰할 수 있는**: 따뜻하면서도 전문적인 느낌
- **명확하고 직관적인**: 복잡한 정보도 쉽게 이해할 수 있도록
- **안전하고 안정적인**: 보안과 신뢰성을 시각적으로 표현

---

## 2. 디자인 원칙

### 2.1 안전성 우선 (Safety First)
- 모든 UI 요소에서 안전 정보를 명확히 표시
- 위험 요소는 즉시 인지할 수 있도록 시각적 강조
- 안전도 정보는 가장 눈에 띄는 위치에 배치

### 2.2 직관적 사용성 (Intuitive Usability)
- 3클릭 이내로 모든 주요 기능에 접근 가능
- 일관된 인터페이스 패턴으로 학습 부담 최소화
- 명확한 라벨과 아이콘으로 기능 의도 표현

### 2.3 포용적 접근성 (Inclusive Accessibility)
- WCAG 2.1 AA 수준 접근성 보장
- 고령자와 디지털 초보자 배려한 디자인
- 다양한 장애 유형에 대한 대응 방안 제공

### 2.4 정보 투명성 (Information Transparency)
- 중요한 정보는 숨기지 않고 명확히 표시
- 단계별 진행 상황을 시각적으로 표현
- 사용자가 이해할 수 있는 언어로 정보 전달

---

## 3. 컬러 시스템

### 3.1 안전도 컬러 팔레트

#### 최우수 등급 (90-100점)
- **Primary**: `#00C851` (깊은 녹색)
- **Secondary**: `#69F0AE` (연한 녹색)
- **Background**: `#E8F5E8` (매우 연한 녹색)

#### 우수 등급 (70-89점)
- **Primary**: `#4CAF50` (녹색)
- **Secondary**: `#81C784` (중간 녹색)
- **Background**: `#F1F8E9` (연한 녹색 배경)

#### 보통 등급 (50-69점)
- **Primary**: `#FF9800` (주황색)
- **Secondary**: `#FFB74D` (연한 주황색)
- **Background**: `#FFF8E1` (연한 주황 배경)

#### 주의 등급 (30-49점)
- **Primary**: `#F44336` (빨간색)
- **Secondary**: `#EF5350` (연한 빨간색)
- **Background**: `#FFEBEE` (연한 빨강 배경)

#### 위험 등급 (0-29점)
- **Primary**: `#212121` (검은색)
- **Secondary**: `#424242` (짙은 회색)
- **Background**: `#FAFAFA` (연한 회색 배경)

#### 신규 사용자
- **Primary**: `#9E9E9E` (회색)
- **Secondary**: `#BDBDBD` (연한 회색)
- **Background**: `#F5F5F5` (매우 연한 회색)

### 3.2 기본 컬러 팔레트

#### Primary Colors
- **Main Blue**: `#1976D2` (신뢰성과 안정성)
- **Light Blue**: `#42A5F5`
- **Dark Blue**: `#0D47A1`

#### Secondary Colors
- **Main Orange**: `#FF9800` (주의와 중요성)
- **Light Orange**: `#FFB74D`
- **Dark Orange**: `#E65100`

#### Neutral Colors
- **Text Primary**: `#212121`
- **Text Secondary**: `#757575`
- **Text Disabled**: `#BDBDBD`
- **Background**: `#FAFAFA`
- **Surface**: `#FFFFFF`
- **Border**: `#E0E0E0`

#### Status Colors
- **Success**: `#4CAF50`
- **Warning**: `#FF9800`
- **Error**: `#F44336`
- **Info**: `#2196F3`

### 3.3 색약 대응 컬러
- **색약 친화 녹색**: `#009688`
- **색약 친화 빨강**: `#E91E63`
- **고대비 파랑**: `#0D47A1`
- **고대비 주황**: `#E65100`

---

## 4. 타이포그래피

### 4.1 폰트 패밀리
```css
/* Primary Font Stack */
font-family: 'Noto Sans KR', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;

/* Monospace Font Stack */
font-family: 'Fira Code', 'Monaco', 'Menlo', monospace;
```

### 4.2 폰트 크기 시스템

#### Heading Styles
- **H1**: 32px / 40px (line-height) / Bold
- **H2**: 28px / 36px / Bold
- **H3**: 24px / 32px / Bold
- **H4**: 20px / 28px / Bold
- **H5**: 18px / 24px / Medium
- **H6**: 16px / 22px / Medium

#### Body Text Styles
- **Body Large**: 18px / 28px / Regular
- **Body Medium**: 16px / 24px / Regular
- **Body Small**: 14px / 20px / Regular
- **Caption**: 12px / 16px / Regular

#### Specialty Styles
- **Safety Score**: 24px / 32px / Bold (안전도 점수)
- **Badge Text**: 12px / 16px / Bold (배지 라벨)
- **Button Text**: 16px / 24px / Medium (버튼 텍스트)

### 4.3 폰트 웨이트
- **Regular**: 400
- **Medium**: 500
- **Bold**: 700

### 4.4 고령자 배려 폰트 설정
- **최소 크기**: 16px (중요 정보는 18px 이상)
- **충분한 행간**: 1.5배 이상
- **명확한 대비**: 4.5:1 이상

---

## 5. 간격 시스템

### 5.1 Base Unit
- **기본 단위**: 8px
- **모든 간격은 8px의 배수 사용**

### 5.2 간격 스케일
```css
/* Spacing Scale */
--space-xs: 4px;    /* 0.5 unit */
--space-sm: 8px;    /* 1 unit */
--space-md: 16px;   /* 2 units */
--space-lg: 24px;   /* 3 units */
--space-xl: 32px;   /* 4 units */
--space-2xl: 48px;  /* 6 units */
--space-3xl: 64px;  /* 8 units */
```

### 5.3 컴포넌트 간격
- **Section 간격**: 48px (3xl)
- **Card 간격**: 24px (lg)
- **Element 간격**: 16px (md)
- **Text 간격**: 8px (sm)
- **Icon-Text 간격**: 8px (sm)

### 5.4 레이아웃 간격
- **Container Padding**: 24px (모바일), 32px (태블릿+)
- **Grid Gap**: 16px (모바일), 24px (태블릿+)

---

## 6. 컴포넌트 스타일

### 6.1 버튼 스타일

#### Primary Button
```css
background: #1976D2;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 500;
font-size: 16px;
min-height: 44px; /* 터치 친화적 */
```

#### Secondary Button
```css
background: transparent;
color: #1976D2;
border: 2px solid #1976D2;
padding: 10px 22px; /* border 고려 */
border-radius: 8px;
font-weight: 500;
font-size: 16px;
min-height: 44px;
```

#### Danger Button (신고, 경고)
```css
background: #F44336;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 500;
font-size: 16px;
min-height: 44px;
```

### 6.2 입력 필드 스타일

#### Text Input
```css
border: 2px solid #E0E0E0;
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
min-height: 44px;
background: #FFFFFF;

/* Focus State */
border-color: #1976D2;
box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.12);
```

#### Error State
```css
border-color: #F44336;
box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.12);
```

### 6.3 카드 스타일

#### Default Card
```css
background: #FFFFFF;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
padding: 24px;
border: 1px solid #E0E0E0;
```

#### Safety Card (안전도 표시용)
```css
background: #FFFFFF;
border-radius: 16px;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
padding: 24px;
border: 2px solid var(--safety-color); /* 안전도에 따라 변경 */
```

### 6.4 배지 스타일

#### Safety Badge
```css
display: inline-flex;
align-items: center;
padding: 6px 12px;
border-radius: 20px;
font-size: 12px;
font-weight: bold;
background: var(--safety-bg-color);
color: var(--safety-text-color);
```

#### Icon Badge (인증 배지)
```css
display: inline-flex;
align-items: center;
gap: 4px;
padding: 4px 8px;
border-radius: 16px;
font-size: 11px;
font-weight: 500;
background: #E3F2FD;
color: #1976D2;
```

---

## 7. 반응형 브레이크포인트

### 7.1 브레이크포인트 정의
```css
/* Mobile First Approach */
@media (min-width: 360px) { /* Small Mobile */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

### 7.2 컨테이너 최대 너비
```css
.container {
  max-width: 360px; /* Mobile */
  max-width: 768px; /* Tablet */
  max-width: 1200px; /* Desktop */
  max-width: 1440px; /* Large Desktop */
}
```

### 7.3 그리드 시스템
- **Mobile**: 1-2 컬럼
- **Tablet**: 2-3 컬럼
- **Desktop**: 3-4 컬럼
- **Large Desktop**: 4-5 컬럼

---

## 8. 안전 거래 특화 컴포넌트

### 8.1 안전도 표시 컴포넌트

#### Safety Score Display
```css
.safety-score {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  background: var(--safety-bg-color);
  border-left: 4px solid var(--safety-color);
}

.safety-score__value {
  font-size: 24px;
  font-weight: bold;
  color: var(--safety-color);
}

.safety-score__stars {
  display: flex;
  gap: 2px;
}

.safety-score__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--safety-text-color);
}
```

#### Safety Badge Collection
```css
.safety-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.safety-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
  background: #E8F5E8;
  color: #2E7D32;
}
```

### 8.2 위험 경고 컴포넌트

#### Warning Alert
```css
.warning-alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  background: #FFF3E0;
  border: 1px solid #FFB74D;
}

.warning-alert__icon {
  color: #F57C00;
  font-size: 20px;
  margin-top: 2px;
}

.warning-alert__content {
  flex: 1;
}

.warning-alert__title {
  font-weight: 600;
  color: #E65100;
  margin-bottom: 4px;
}

.warning-alert__message {
  font-size: 14px;
  color: #BF360C;
  line-height: 1.4;
}
```

#### Danger Alert
```css
.danger-alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  background: #FFEBEE;
  border: 2px solid #F44336;
}

.danger-alert__icon {
  color: #D32F2F;
  font-size: 24px;
}

.danger-alert__title {
  font-weight: bold;
  color: #C62828;
  margin-bottom: 8px;
}
```

### 8.3 거래 진행 단계 컴포넌트

#### Transaction Progress
```css
.transaction-progress {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #F8F9FA;
  border-radius: 12px;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}

.progress-step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 16px;
  right: -50%;
  width: 100%;
  height: 2px;
  background: #E0E0E0;
}

.progress-step.completed::after {
  background: #4CAF50;
}

.progress-step__icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E0E0E0;
  color: #757575;
  font-size: 16px;
  margin-bottom: 8px;
}

.progress-step.completed .progress-step__icon {
  background: #4CAF50;
  color: white;
}

.progress-step.current .progress-step__icon {
  background: #1976D2;
  color: white;
}
```

### 8.4 채팅 메시지 컴포넌트

#### Safe Message
```css
.chat-message {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.chat-message.own {
  flex-direction: row-reverse;
}

.chat-message__bubble {
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 18px;
  background: #E3F2FD;
  color: #1565C0;
}

.chat-message.own .chat-message__bubble {
  background: #1976D2;
  color: white;
}

.chat-message.warning .chat-message__bubble {
  background: #FFF3E0;
  border: 1px solid #FFB74D;
  color: #E65100;
}
```

---

## 9. 인터랙션 패턴

### 9.1 호버 효과
```css
/* Button Hover */
.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

/* Card Hover */
.card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
```

### 9.2 포커스 스타일
```css
.focusable:focus {
  outline: 3px solid #1976D2;
  outline-offset: 2px;
}

.focusable:focus:not(:focus-visible) {
  outline: none;
}
```

### 9.3 로딩 상태
```css
.loading {
  position: relative;
  pointer-events: none;
}

.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid #1976D2;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### 9.4 애니메이션 가이드라인
- **Duration**: 0.2s (빠른), 0.3s (보통), 0.5s (느린)
- **Easing**: ease-out (진입), ease-in (퇴장), ease-in-out (일반)
- **사용자 설정 고려**: `prefers-reduced-motion` 미디어 쿼리 준수

---

## 10. 변경 이력

| 버전 | 날짜 | 변경 내용 | 담당자 |
|------|------|-----------|---------|
| 1.0 | 2024-09-23 | 초기 스타일 가이드 작성 | 편의(UI/UX Designer) |

---

**작성자**: 편의 (UI/UX Designer)
**검토자**: 안전이 (Product Owner), 접근이 (Frontend Developer)
**승인자**: 팀 리더
**작성일**: 2024-09-23