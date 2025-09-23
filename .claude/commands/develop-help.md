---
command: "/develop-help"
description: "개발 작업 순서 및 가이드를 표시합니다"
---

# 개발 작업 가이드

## 🔧 개발 작업 순서

### Phase 1: 인프라 환경 설정
```
/develop-db-guide     # 데이터베이스 설치계획서 작성
/develop-db-install   # 데이터베이스 설치 수행
```

### Phase 2: 백킹 서비스 설정 (필요시)
```
/develop-mq-guide     # Message Queue 설치 계획서 작성
/develop-mq-install   # Message Queue 설치 수행
```

### Phase 3: 백엔드 개발
```
/develop-dev-backend  # 백엔드 개발
/develop-make-run-profile # 서비스 실행파일 작성
/develop-test-backend # 백엔드 테스트
```

### Phase 4: 프론트엔드 개발
```
/develop-dev-front    # 프론트엔드 개발
```

### Phase 5: 문제 해결 (필요시)
```
/develop-fix-backend  # 백엔드 오류 해결
/develop-db-remove    # 데이터베이스 설치 제거 (필요시)
/develop-mq-remove    # Message Queue 설치 제거 (필요시)
```

## 📋 개발 단계 주요 산출물
- 데이터베이스설치계획서: develop/database/plan/
- 백엔드개발결과서: develop/dev/dev-backend.md
- 백엔드테스트결과서: develop/dev/test-backend.md
- 실행 프로파일 및 스크립트

## 💡 다음 단계
개발 완료 후 `/deploy-help`를 실행하여 배포 단계로 진행하세요.