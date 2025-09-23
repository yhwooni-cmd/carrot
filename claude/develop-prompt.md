# 개발 프롬프트

## 데이터베이스 설치계획서 작성 요청 
command: "/develop-db-guide"
prompt: 
```
@backing-service  
"데이터베이스설치계획서가이드"에 따라 데이터베이스 설치계획서를 작성해 주십시오.
```

---

## 데이터베이스 설치 수행 요청
command: "/develop-db-install"
prompt: 
```
@backing-service   
[요구사항]
'데이터베이스설치가이드'에 따라 설치해 주세요.  
'[설치정보]'섹션이 없으면 수행을 중단하고 안내 메시지를 표시하세요.  
{안내메시지}
'[설치정보]'섹션 하위에 아래 예와 같이 설치에 필요한 정보를 추가해 주세요.  
- 설치대상환경: 개발환경
- AKS Resource Group: rg-digitalgarage-01
- AKS Name: aks-digitalgarage-01
- Namespace: tripgen-dev
```

---

## 데이터베이스 설치 제거 요청 (필요시)
command: "/develop-db-remove"
prompt: 
```
@backing-service   
[요구사항]
- "데이터베이스설치결과서"를 보고 관련된 모든 리소스를 삭제
- "캐시설치결과서"를 보고 관련된 모든 리소스를 삭제
- 현재 OS에 맞게 수행  
- 서브 에이젼트를 병렬로 수행하여 삭제
- 결과파일은 생성할 필요 없고 화면에만 결과 표시 
[참고자료]
- 데이터베이스설치결과서
- 캐시설치결과서
```

---

## Message Queue 설치 계획서 작성 요청 
command: "/develop-mq-guide"
prompt: 
```
@backing-service 
"MQ설치게획서가이드"에 따라 Message Queue 설치계획서를 작성해 주세요.  
```

---

## Message Queue 설치 수행 요청(필요시)
command: "/develop-mq-install"
prompt: 
```
@backing-service 
[요구사항]
'MQ설치가이드'에 따라 설치해 주세요.  
'[설치정보]'섹션이 없으면 수행을 중단하고 안내 메시지를 표시하세요.  
{안내메시지}
'[설치정보]'섹션 하위에 아래 예와 같이 설치에 필요한 정보를 추가해 주세요.  
- 설치대상환경: 개발환경
- Resource Group: rg-digitalgarage-01
- Namespace: tripgen-dev
```

---

## Message Queue 설치 제거 요청
command: "/develop-mq-remove"
prompt: 
```
@backing-service 
[요구사항]
- "MQ설치결과서"를 보고 관련된 모든 리소스를 삭제
- 현재 OS에 맞게 수행  
- 서브 에이젼트를 병렬로 수행하여 삭제
- 결과파일은 생성할 필요 없고 화면에만 결과 표시 
[참고자료]
- MQ설치결과서
```

---

## 백엔드 개발 요청
command: "/develop-dev-backend"
prompt: 
```
@dev-backend
[요구사항]
- "백엔드개발가이드"에 따라 개발해 주세요. 
```

---

## 백엔드 오류 해결 요청
command: "/develop-fix-backend"
prompt:
```
@fix as @back
개발된 각 서비스와 common 모듈을 컴파일하고 에러를 해결해 주세요.   
- common 모듈 우선 수행   
- 각 서비스별로 서브 에이젠트를 병렬로 수행  
- 컴파일이 모두 성공할때까지 계속 수행 
```

---

## 서비스 실행파일 작성 요청
command: "/develop-make-run-profile"
prompt:
```
@test-backend  
'서비스실행파일작성가이드'에 따라 테스트를 해 주세요.   
프롬프트에 '[작성정보]'항목이 없으면 수행을 중단하고 안내 메시지를 표시해 주세요.  
DB나 Redis의 접근 정보는 지정할 필요 없습니다. 특별히 없으면 '[작성정보]'섹션에 '없음'이라고 하세요.      
{안내메시지}
[작성정보]
- API Key
  - Claude: sk-ant-ap...
  - OpenAI: sk-proj-An4Q...
  - Open Weather Map: 1aa5b...
  - Kakao API Key: 5cdc24....
```

---

## 백엔드 테스트 요청
command: "/develop-test-backend"
prompt:
```
@test-backend  
'백엔드테스트가이드'에 따라 테스트를 해 주세요.   
프롬프트에 '[테스트정보]'항목이 없으면 수행을 중단하고 안내 메시지를 표시해 주세요.  
테스트 대상 서비스를 지정안하면 모든 서비스를 테스트 합니다.  
{안내메시지}
'[테스트정보]'섹션 하위에 아래 예와 같이 테스트에 필요한 정보를 제시해 주세요.   
테스트 대상 서비스를 콤마로 구분하여 입력할 수 있으며 전체를 테스트 할 때는 '전체'라고 입력하세요.  
- 서비스: user-service
- API Key
  - Claude: sk-ant-ap...
  - OpenAI: sk-proj-An4Q...
  - Open Weather Map: 1aa5b...
  - Kakao API Key: 5cdc24....
```

---

## 프론트엔드 개발 요청
command: "/develop-dev-front"
prompt: 
```
@dev-front
"프론트엔드개발가이드"에 따라 개발해 주세요.   
프롬프트에 '[개발정보]'항목이 없으면 수행을 중단하고 안내 메시지를 표시해 주세요. 
{안내메시지}
'[개발정보]'섹션 하위에 아래 예와 같이 개발에 필요한 정보를 제시해 주세요.   
[개발정보]
- 개발프레임워크: Typescript + React 18
- UI프레임워크: MUI v5
- 상태관리: Redux Toolkit
- 라우팅: React Router v6
- API통신: Axios
- 스타일링: MUI + styled-components
- 빌드도구: Vite
```