# 설계 프롬프트
아래 순서대로 설계합니다.  

## UI/UX 설계
command: "/design-uiux"
prompt:
```
@uiux 
UI/UX 설계를 해주세요:
- 'UI/UX설계가이드'를 준용하여 작성
```

---

# 프로토타입 작성
command: "/design-prototype"
prompt:
**1.작성**   
```
@prototype 
프로토타입을 작성해 주세요:
- '프로토타입작성가이드'를 준용하여 작성
```

---

**2.검증**  
command: "/design-test-prototype"
prompt:
```
@test-front 
프로토타입을 테스트 해 주세요. 
```

---

**3.오류수정**   
command: "/design-fix-prototype"
prompt:
```
@fix as @front  
'[오류내용]'섹션에 제공된 오류를 해결해 주세요.      
프롬프트에 '[오류내용]'섹션이 없으면 수행 중단하고 안내 메시지 표시 
{안내메시지}
'[오류내용]'섹션 하위에 오류 내용을 제공
```

---

**4.개선**   
command: "/design-improve-prototype"
prompt: 
```
@improve as @front  
'[개선내용]'섹션에 있는 내용을 개선해 주세요.     
프롬프트에 '[개선내용]'항목이 없으면 수행을 중단하고 안내 메시지 표시
{안내메시지}
'[개선내용]'섹션 하위에 개선할 내용을 제공 
```

---

**5.유저스토리 품질 높이기**   
command: "/design-improve-userstory"
prompt:
```
@analyze as @front 프로토타입을 웹브라우저에서 분석한 후,  
@document as @scribe 수정된 프로토타입에 따라 유저스토리를 업데이트 해주십시오.  
```

---

**6.설계서 다시 업데이트**  
command: "/design-update-uiux"
prompt: 
```
@document @front 
현재 프로토타입과 유저스토리를 기준으로 UI/UX설계서와 스타일가이드를 수정해 주세요. 
```

---

## 클라우드 아키텍처 패턴 선정 
command: "/design-pattern"
prompt: 
```
@design-pattern 
클라우드 아키텍처 패턴 적용 방안을 작성해 주세요:
- '클라우드아키텍처패턴선정가이드'를 준용하여 작성 
```

---

## 논리아키텍처 설계
command: "/design-logical"
prompt: 
```
@architecture 
논리 아키텍처를 설계해 주세요:
- '공통설계원칙'과 '논리아키텍처 설계 가이드'를 준용하여 설계 

```

---

## 외부 시퀀스 설계
command: "/design-seq-outer"
prompt: 
```
@architecture 
외부 시퀀스 설계를 해 주세요:
- '공통설계원칙'과 '외부시퀀스설계가이드'를 준용하여 설계 

```

---

## 내부 시퀀스 설계
command: "/design-seq-inner"
prompt: 
```
@architecture 
내부 시퀀스 설계를 해 주세요:
- '공통설계원칙'과 '내부시퀀스설계 가이드'를 준용하여 설계 

```

---

## API 설계
command: "/design-api"
prompt: 
```
@architecture 
API를 설계해 주세요:
- '공통설계원칙'과 'API설계가이드'를 준용하여 설계 

```

---

## 클래스 설계
command: "/design-class"
prompt: 
```
@architecture 
'공통설계원칙'과 '클래스설계가이드'를 준용하여 클래스를 설계해 주세요.   
프롬프트에 '[클래스설계 정보]'항목이 없으면 수행을 중단하고 안내 메시지를 표시합니다. 
{안내메시지}
'[클래스설계 정보]' 섹션에 아래 예와 같은 정보를 제공해 주십시오. 
[클래스설계 정보]
- 패키지 그룹: com.unicorn.tripgen
- 설계 아키텍처 패턴 
  - User: Layered 
  - Trip: Clean
  - Location: Layered 
  - AI: Layered
```

---

## 데이터 설계
command: "/design-data"
prompt: 
```
@architecture 
데이터 설계를 해주세요:
- '공통설계원칙'과 '데이터설계가이드'를 준용하여 설계
```

---

## High Level 아키텍처 정의서 작성  
command: "/design-high-level"
prompt: 
```
@architecture 
'HighLevel아키텍처정의가이드'를 준용하여 High Level 아키텍처 정의서를 작성해 주세요.  
'CLOUD' 정보가 없으면 수행을 중단하고 안내메시지를 표시하세요.  
{안내메시지}
아래 예와 같이 CLOUD 제공자를 Azure, AWS, Google과 같이 제공하세요.  
- CLOUD: Azure
```

---

## 물리 아키텍처 설계
command: "/design-physical"
prompt: 
```
@architecture 
'물리아키텍처설계가이드'를 준용하여 물리아키텍처를 설계해 주세요.  
'CLOUD' 정보가 없으면 수행을 중단하고 안내메시지를 표시하세요.  
{안내메시지}
아래 예와 같이 CLOUD 제공자를 Azure, AWS, Google과 같이 제공하세요.  
- CLOUD: Azure 
```

## 프론트엔드 설계
command: "/design-front"
prompt: 
```
@plan as @front
'프론트엔드설계가이드'를 준용하여 **프론트엔드설계서**를 작성해 주세요.
프롬프트에 '[백엔드시스템]'항목이 없으면 수행을 중단하고 안내 메시지를 표시합니다. 
{안내메시지}
'[백엔드시스템]' 섹션에 아래 예와 같은 정보를 제공해 주십시오. 
[백엔드시스템]
- 시스템: tripgen
- 마이크로서비스: user-service, location-service, trip-service, ai-service 
- API문서
  - user service: http://localhost:8081/v3/api-docs
  - location service: http://localhost:8082/v3/api-docs
  - trip service: http://localhost:8083/v3/api-docs
  - ai service: http://localhost:8084/v3/api-docs
[요구사항]
- 각 화면에 Back 아이콘 버튼과 화면 타이틀 표시
- 하단 네비게이션 바 아이콘화: 홈, 새여행, 주변장소검색, 여행보기
```

