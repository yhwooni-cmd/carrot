---
command: "/develop-test-backend"
description: "백엔드 테스트 요청"
---

# 백엔드 테스트

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