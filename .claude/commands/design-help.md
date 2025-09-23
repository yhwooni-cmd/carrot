---
command: "/design-help"
description: "설계 작업 순서 및 가이드를 표시합니다"
---

# 설계 작업 가이드

## 🏗️ 설계 작업 순서

### Phase 1: UI/UX 설계
```
/design-uiux          # UI/UX 설계
/design-prototype     # 프로토타입 작성
/design-test-prototype # 프로토타입 검증
```

### Phase 2: 아키텍처 패턴 선정
```
/design-pattern       # 클라우드 아키텍처 패턴 선정
/design-high-level    # High Level 아키텍처 정의서
```

### Phase 3: 논리 아키텍처 설계
```
/design-logical       # 논리아키텍처 설계
/design-seq-outer     # 외부 시퀀스 설계
/design-api           # API 설계
```

### Phase 4: 상세 설계
```
/design-seq-inner     # 내부 시퀀스 설계
/design-class         # 클래스 설계
/design-data          # 데이터 설계
```

### Phase 5: 물리 아키텍처 설계
```
/design-physical      # 물리 아키텍처 설계
/design-front         # 프론트엔드 설계
```

### Phase 6: 품질 개선 (선택사항)
```
/design-improve-userstory   # 유저스토리 품질 높이기
/design-improve-prototype   # 프로토타입 개선
/design-fix-prototype       # 프로토타입 오류수정
/design-update-uiux         # 설계서 업데이트
```

## 📋 설계 단계 주요 산출물
- UI/UX설계서: design/uiux/uiux.md
- 아키텍처패턴: design/pattern/architecture-pattern.md
- API설계서: design/backend/api/*
- 클래스설계서: design/backend/class/*
- 데이터설계서: design/backend/database/*

## 💡 다음 단계
설계 완료 후 `/develop-help`를 실행하여 개발 단계로 진행하세요.