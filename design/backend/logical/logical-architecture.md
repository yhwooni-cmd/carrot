# 중고 거래 플랫폼 서비스 - 논리아키텍처 설계서

## 목차
- [1. 개요](#1-개요)
- [2. 아키텍처 개요](#2-아키텍처-개요)
- [3. 서비스별 역할 및 책임](#3-서비스별-역할-및-책임)
- [4. 서비스 간 의존성](#4-서비스-간-의존성)
- [5. 데이터 흐름](#5-데이터-흐름)
- [6. 비동기 처리 전략](#6-비동기-처리-전략)
- [7. 캐싱 전략](#7-캐싱-전략)
- [8. 외부 서비스 연동](#8-외부-서비스-연동)
- [9. 확장성 및 성능 고려사항](#9-확장성-및-성능-고려사항)

---

## 1. 개요

### 1.1 설계 목적
중고 사기 방지 및 취약계층(여성, 노약자 등)을 위한 안전한 거래 진행을 위한 마이크로서비스 기반 논리 아키텍처 설계

### 1.2 설계 원칙
- **마이크로서비스 아키텍처**: 서비스별 독립적인 개발, 배포, 확장
- **안전성 우선**: Safety Service를 중심으로 한 안전도 기반 의사결정
- **캐시 우선 전략**: Redis를 통한 성능 최적화와 직접 의존성 최소화
- **선택적 비동기**: 장시간 작업(안전도 계산, 위험 감지)만 비동기 처리
- **컨텍스트 분리**: 도메인별 명확한 경계와 책임 분리

### 1.3 기술 스택
- **API Gateway**: 요청 라우팅, 인증, 속도 제한
- **마이크로서비스**: Node.js/Express 또는 Spring Boot
- **데이터베이스**: PostgreSQL (관계형 데이터), MongoDB (로그/비정형 데이터)
- **캐시**: Redis (세션, 안전도, 실시간 데이터)
- **메시지 큐**: RabbitMQ/Apache Kafka (비동기 이벤트)
- **파일 저장소**: AWS S3/MinIO (이미지, 첨부파일)

---

## 2. 아키텍처 개요

### 2.1 논리아키텍처 다이어그램

```mermaid
graph TD
    %% 클라이언트 레이어
    Client[클라이언트<br/>웹/모바일 앱]

    %% API Gateway
    APIGateway[API Gateway<br/>요청 라우팅, 인증, 제한]

    %% 마이크로서비스들
    UserService[User Service<br/>사용자 인증 및 프로필 관리]
    SafetyService[Safety Service<br/>안전도 계산 및 표시 생성]
    ReportService[Report Service<br/>신고 접수 및 처리]
    MonitorService[Monitor Service<br/>위험 감지 및 실시간 대응]
    TransactionService[Transaction Service<br/>거래 이력 및 상품 관리]

    %% 데이터베이스 레이어
    UserDB[(User DB<br/>사용자, 인증, 프로필)]
    SafetyDB[(Safety DB<br/>안전도 점수, 규칙)]
    ReportDB[(Report DB<br/>신고, 처리 이력)]
    MonitorDB[(Monitor DB<br/>위험 패턴, 로그)]
    TransactionDB[(Transaction DB<br/>거래, 상품)]

    %% 캐시 레이어
    Cache[(Redis Cache<br/>세션, 안전도, 실시간 데이터)]

    %% 메시지 큐
    MessageQueue[Message Queue<br/>비동기 이벤트 처리]

    %% 외부 서비스
    AuthProvider[외부 인증<br/>SMS, 이메일, OAuth]
    FileStorage[파일 저장소<br/>이미지, 첨부파일]

    %% 클라이언트 연결
    Client --> APIGateway : HTTPS 요청

    %% API Gateway 라우팅
    APIGateway --> UserService : [User] 회원가입, 로그인
    APIGateway --> SafetyService : [Safety] 안전도 조회
    APIGateway --> ReportService : [Report] 신고 접수
    APIGateway --> MonitorService : [Monitor] 위험 알림
    APIGateway --> TransactionService : [Transaction] 상품 등록, 거래

    %% 서비스 간 동기적 의존성 (필수)
    SafetyService --> UserService : 사용자 정보 조회
    SafetyService --> TransactionService : 거래 이력 조회
    SafetyService --> ReportService : 신고 정보 조회
    ReportService --> UserService : 신고자/피신고자 정보
    MonitorService --> UserService : 사용자 활동 패턴
    MonitorService --> TransactionService : 거래 패턴 분석
    TransactionService --> UserService : 판매자 정보 조회

    %% 서비스 간 비동기적 의존성 (이벤트)
    UserService ->> SafetyService : 회원가입 이벤트
    TransactionService ->> SafetyService : 거래 완료 이벤트
    ReportService ->> SafetyService : 신고 처리 이벤트
    MonitorService ->> SafetyService : 위험 감지 이벤트

    %% 데이터베이스 연결
    UserService --> UserDB : 사용자 데이터 관리
    SafetyService --> SafetyDB : 안전도 데이터 관리
    ReportService --> ReportDB : 신고 데이터 관리
    MonitorService --> MonitorDB : 모니터링 데이터 관리
    TransactionService --> TransactionDB : 거래 데이터 관리

    %% 캐시 사용
    UserService --> Cache : 세션, 사용자 정보
    SafetyService --> Cache : 안전도 점수, 표시 정보
    MonitorService --> Cache : 실시간 위험 점수
    TransactionService --> Cache : 인기 상품, 검색 결과

    %% 메시지 큐 사용
    UserService --> MessageQueue : 사용자 이벤트 발행
    SafetyService --> MessageQueue : 안전도 갱신 이벤트
    ReportService --> MessageQueue : 신고 처리 이벤트
    MonitorService --> MessageQueue : 위험 감지 이벤트
    TransactionService --> MessageQueue : 거래 이벤트 발행

    %% 외부 서비스 연결
    UserService --> AuthProvider : SMS/이메일 인증
    ReportService --> FileStorage : 증거 자료 저장
    TransactionService --> FileStorage : 상품 이미지 저장
```

### 2.2 아키텍처 레이어

**1. 프레젠테이션 레이어**
- 클라이언트 애플리케이션 (웹/모바일)
- API Gateway (요청 라우팅, 인증, 속도 제한)

**2. 비즈니스 서비스 레이어**
- 5개 마이크로서비스 (User, Safety, Report, Monitor, Transaction)
- 도메인별 비즈니스 로직 처리

**3. 데이터 레이어**
- 서비스별 전용 데이터베이스
- Redis 캐시 (성능 최적화)
- Message Queue (비동기 처리)

**4. 외부 연동 레이어**
- 인증 서비스 (SMS, 이메일, OAuth)
- 파일 저장소 (이미지, 첨부파일)

---

## 3. 서비스별 역할 및 책임

### 3.1 User Service (사용자 관리)
**주요 책임**
- 사용자 인증 및 인가 (회원가입, 로그인, JWT 관리)
- 프로필 관리 (기본 정보, 추가 인증)
- 세션 관리 및 보안

**핵심 기능**
- 다단계 인증 (SMS, 이메일, 신분증)
- 프로필 완성도 관리
- 사용자 활동 로깅

**API 엔드포인트**
- `POST /auth/register` - 회원가입
- `POST /auth/login` - 로그인
- `GET /users/profile` - 프로필 조회
- `PUT /users/profile` - 프로필 수정
- `POST /users/verify` - 추가 인증

### 3.2 Safety Service (안전도 관리) - 핵심 서비스
**주요 책임**
- 안전도 점수 계산 및 갱신
- 시각적 안전 표시 생성
- 안전도 기반 필터링 및 정렬

**핵심 기능**
- 복합 요소 기반 안전도 계산
- 실시간 및 배치 안전도 갱신
- 사용자 맞춤 안전 표시 생성
- 안전도 히스토리 관리

**API 엔드포인트**
- `GET /safety/score/{userId}` - 사용자 안전도 조회
- `GET /safety/display/{userId}` - 안전 표시 조회
- `POST /safety/recalculate` - 안전도 재계산
- `GET /safety/dashboard` - 안전도 대시보드

### 3.3 Report Service (신고 처리)
**주요 책임**
- 신고 접수 및 분류
- 신고 검토 및 처리
- 제재 조치 관리

**핵심 기능**
- 체계적 신고 접수 (유형별 분류)
- 증거 자료 관리
- 신고 처리 워크플로우
- 처리 결과 통보

**API 엔드포인트**
- `POST /reports` - 신고 접수
- `GET /reports/{reportId}` - 신고 상태 조회
- `PUT /reports/{reportId}/process` - 신고 처리 (관리자)
- `GET /reports/user/{userId}` - 사용자별 신고 이력

### 3.4 Monitor Service (위험 감지)
**주요 책임**
- 실시간 위험 패턴 감지
- 의심 활동 모니터링
- 자동 위험 대응

**핵심 기능**
- 패턴 기반 위험 감지
- 실시간 위험도 평가
- 자동/수동 대응 조치
- 위험 알림 및 경고

**API 엔드포인트**
- `POST /monitor/events` - 위험 이벤트 수집
- `GET /monitor/risks/{userId}` - 사용자 위험도 조회
- `POST /monitor/actions` - 위험 대응 조치
- `GET /monitor/alerts` - 위험 알림 목록

### 3.5 Transaction Service (거래 관리)
**주요 책임**
- 상품 등록 및 관리
- 거래 이력 추적
- 거래 상태 관리

**핵심 기능**
- 상품 정보 검증 및 등록
- 거래 단계별 상태 관리
- 거래 품질 지표 계산
- 거래 통계 및 분석

**API 엔드포인트**
- `POST /products` - 상품 등록
- `GET /products` - 상품 목록 조회
- `GET /products/{productId}` - 상품 상세 조회
- `POST /transactions` - 거래 생성
- `PUT /transactions/{transactionId}/status` - 거래 상태 변경
- `GET /transactions/history/{userId}` - 거래 이력 조회

---

## 4. 서비스 간 의존성

### 4.1 동기적 의존성 (실선 화살표 →)
**필수 의존성으로 즉시 응답이 필요한 경우**

**Safety Service → Other Services**
- `Safety → User`: 안전도 계산을 위한 사용자 정보 조회
- `Safety → Transaction`: 거래 이력 기반 안전도 계산
- `Safety → Report`: 신고 정보 반영한 안전도 조정

**Report Service → User Service**
- `Report → User`: 신고자/피신고자 정보 확인

**Monitor Service → Other Services**
- `Monitor → User`: 사용자 활동 패턴 분석
- `Monitor → Transaction`: 거래 패턴 이상 감지

**Transaction Service → User Service**
- `Transaction → User`: 판매자 정보 조회 및 검증

### 4.2 비동기적 의존성 (점선 화살표 ->>)
**이벤트 기반으로 처리 지연이 허용되는 경우**

**이벤트 발행 → 구독**
- `User ->> Safety`: 회원가입 이벤트 → 초기 안전도 부여
- `Transaction ->> Safety`: 거래 완료 이벤트 → 안전도 재계산
- `Report ->> Safety`: 신고 처리 이벤트 → 안전도 차감
- `Monitor ->> Safety`: 위험 감지 이벤트 → 안전도 긴급 조정

### 4.3 캐시를 통한 느슨한 결합
**Redis Cache를 통해 직접 의존성 최소화**

- Safety Service는 계산된 안전도를 캐시에 저장
- 다른 서비스들은 캐시에서 안전도 정보 조회
- 캐시 미스 시에만 Safety Service 직접 호출

---

## 5. 데이터 흐름

### 5.1 사용자 회원가입 플로우
```
1. Client → API Gateway → User Service: 회원가입 요청
2. User Service → AuthProvider: SMS/이메일 인증
3. User Service → UserDB: 사용자 정보 저장
4. User Service → MessageQueue: 회원가입 이벤트 발행
5. Safety Service ← MessageQueue: 이벤트 수신
6. Safety Service → SafetyDB: 초기 안전도 계산 및 저장
7. Safety Service → Cache: 안전도 정보 캐싱
```

### 5.2 안전도 조회 플로우
```
1. Client → API Gateway → Safety Service: 안전도 조회 요청
2. Safety Service → Cache: 캐시 조회 (Cache Hit)
   2-1. Cache Miss → User/Transaction/Report Service: 데이터 수집
   2-2. Safety Service: 안전도 계산
   2-3. Safety Service → Cache: 계산 결과 캐싱
3. Safety Service → Client: 안전도 정보 응답
```

### 5.3 거래 완료 플로우
```
1. Client → API Gateway → Transaction Service: 거래 완료 처리
2. Transaction Service → TransactionDB: 거래 이력 저장
3. Transaction Service → MessageQueue: 거래 완료 이벤트 발행
4. Safety Service ← MessageQueue: 이벤트 수신
5. Safety Service: 안전도 재계산
6. Safety Service → SafetyDB: 갱신된 안전도 저장
7. Safety Service → Cache: 캐시 업데이트
```

### 5.4 위험 감지 플로우
```
1. Monitor Service: 실시간 패턴 분석
2. Monitor Service → MonitorDB: 위험 패턴 저장
3. Monitor Service → MessageQueue: 위험 감지 이벤트 발행
4. Safety Service ← MessageQueue: 이벤트 수신
5. Safety Service: 긴급 안전도 조정
6. Safety Service → Cache: 안전도 즉시 업데이트
7. Client ← API Gateway ← Monitor Service: 위험 알림
```

---

## 6. 비동기 처리 전략

### 6.1 비동기 처리 대상
**장시간 처리 작업**
- 안전도 계산 및 갱신 (복합 요소 분석)
- 위험 패턴 분석 (대용량 로그 처리)
- 배치 안전도 갱신 (전체 사용자 대상)
- 신고 처리 워크플로우

**이벤트 기반 처리**
- 회원가입 → 안전도 초기화
- 거래 완료 → 안전도 재계산
- 신고 처리 → 안전도 조정
- 위험 감지 → 즉시 대응

### 6.2 Message Queue 활용
**이벤트 종류별 큐 분리**
- `user.events`: 사용자 관련 이벤트
- `transaction.events`: 거래 관련 이벤트
- `safety.events`: 안전도 관련 이벤트
- `monitor.events`: 위험 감지 이벤트
- `report.events`: 신고 처리 이벤트

**메시지 우선순위**
- 높음: 위험 감지, 긴급 신고
- 보통: 거래 완료, 신고 처리
- 낮음: 배치 갱신, 통계 계산

### 6.3 이벤트 보장 및 복구
- **At-least-once delivery**: 이벤트 중복 처리 허용
- **Idempotency**: 중복 이벤트 처리 시 결과 일관성 보장
- **Dead Letter Queue**: 처리 실패 이벤트 별도 관리
- **Circuit Breaker**: 서비스 장애 시 이벤트 처리 중단

---

## 7. 캐싱 전략

### 7.1 캐시 데이터 분류
**세션 데이터 (TTL: 30분)**
- 사용자 로그인 세션
- JWT 토큰 블랙리스트
- 일시적 인증 데이터

**안전도 데이터 (TTL: 1시간)**
- 사용자별 안전도 점수
- 시각적 안전 표시 정보
- 안전도 등급 및 배지

**상품 및 거래 데이터 (TTL: 30분)**
- 인기 상품 목록
- 검색 결과 캐시
- 거래 현황 정보

**실시간 모니터링 데이터 (TTL: 5분)**
- 위험도 점수
- 실시간 알림 정보
- 시스템 상태 정보

### 7.2 캐시 갱신 전략
**Write-Through**: 안전도 계산 결과
- DB 저장과 동시에 캐시 업데이트
- 일관성 보장 우선

**Write-Behind**: 사용자 활동 로그
- 캐시 먼저 업데이트, DB는 배치로 저장
- 성능 우선

**Cache-Aside**: 상품 정보
- 애플리케이션에서 캐시 관리
- 유연한 캐시 정책 적용

### 7.3 캐시 무효화
**이벤트 기반 무효화**
- 안전도 변경 시 관련 캐시 즉시 무효화
- 사용자 정보 수정 시 관련 캐시 갱신

**TTL 기반 자동 만료**
- 데이터 특성에 따른 차등 TTL 적용
- 메모리 효율성 고려

---

## 8. 외부 서비스 연동

### 8.1 인증 서비스 연동
**SMS 인증**
- 휴대폰 번호 인증
- 2단계 인증
- 위험 상황 알림

**이메일 인증**
- 이메일 주소 인증
- 비밀번호 재설정
- 중요 알림 발송

**OAuth 인증**
- 소셜 미디어 연동
- 추가 신뢰도 확보

### 8.2 파일 저장소 연동
**상품 이미지**
- 다중 이미지 업로드
- 이미지 품질 검증
- 썸네일 자동 생성

**증거 자료**
- 신고 시 첨부 파일
- 채팅 스크린샷
- 거래 증빙 자료

**프로필 사진**
- 사용자 프로필 이미지
- 신분증 인증 이미지

### 8.3 연동 안정성
- **Retry Mechanism**: 일시적 장애 대응
- **Circuit Breaker**: 외부 서비스 장애 격리
- **Fallback**: 대체 서비스 또는 기본값 제공
- **Timeout**: 적절한 타임아웃 설정

---

## 9. 확장성 및 성능 고려사항

### 9.1 서비스별 확장 전략
**Safety Service (CPU 집약적)**
- 수평 확장으로 안전도 계산 분산
- 캐싱을 통한 계산 부하 감소
- 배치 처리 최적화

**Monitor Service (I/O 집약적)**
- 스트림 처리 엔진 활용
- 분산 로그 처리
- 실시간 패턴 매칭

**Transaction Service (읽기 위주)**
- 읽기 전용 레플리카 활용
- 검색 엔진 연동
- CDN 활용한 이미지 서빙

**User/Report Service (균형적 부하)**
- 표준적 수평 확장
- 로드 밸런싱 적용

### 9.2 데이터베이스 확장
**분산 데이터베이스**
- 서비스별 독립적 확장
- 샤딩을 통한 수평 분할
- 읽기 전용 레플리카

**캐시 확장**
- Redis 클러스터 구성
- 일관된 해싱 적용
- 메모리 사용량 최적화

### 9.3 성능 모니터링
**메트릭 수집**
- 응답 시간, 처리량, 에러율
- 리소스 사용률 (CPU, 메모리, 디스크)
- 비즈니스 메트릭 (안전도 계산 시간, 거래 완료율)

**알람 및 대응**
- 임계치 기반 알람
- 자동 스케일링 트리거
- 장애 자동 복구

### 9.4 보안 고려사항
**데이터 보호**
- 개인정보 암호화 저장
- 통신 구간 TLS 적용
- 접근 권한 최소화

**API 보안**
- JWT 기반 인증
- API 호출 제한
- 요청 검증 및 필터링

**감사 로깅**
- 중요 작업 로깅
- 접근 기록 보관
- 이상 패턴 감지

---

**작성자**: 보안이 (Backend Developer)
**검토자**: 안전이 (Product Owner), 접근이 (Frontend Developer)
**승인자**: 팀 리더
**작성일**: 2024-12-25