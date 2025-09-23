# Claude Project Instruction 작성 가이드 

Claude Code의 Claude Project Instruction은 프로젝트 루트 하위에 CLAUDE.md파일에 지정합니다.  
Claude Code가 다이랙트 모드로 시작될 때 이 파일의 내용을 읽어 메모리에 저장하여 사용합니다.  

아래와 같은 순서로 'CLAUDE.md 템플릿'을 이용하여 CLAUDE.md 파일을 작성합니다.  

CLAUDE.md 템플릿: https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/references/instruction-template.md

1.'CLAUDE.md 템플릿' 다운로드 
- WebFetch가 아닌 'curl {URL} > claude/instruction-template.md'명령으로 저장
- claude/instruction-template.md을 이용하여 이후 작업 

2.프로젝트명과 목표 치환    
- 사용자가 제공한 값으로 'claude/instruction-template.md'의 '{프로젝트명}'과 '{목표}'값을 치환함  

3.프로젝트 멤버 목록 구성  
- 프로젝트 목표를 수행하기 위한 팀원을 추천함 
- 아래 '팀원목록 예시'를 참고하여 팀원을 구성함 
- 닉네임은 역할에 맞게 2~3자로 네이밍   
[팀원목록 예시]
```
Product Owner
- 책임: 프로젝트 방향성 설정, 요구사항 정의, 우선순위 결정
- 이름/별명: 이해경/온달
- 성별/나이: 남자/55세
- 주요경력: 기업 디지털 전환 컨설팅 15년, AI 도구 도입 전략 수립 경험
```
- claude/instruction-template.md 파일의 '팀원목록'값을 치환함 

4.CLAUDE.md 파일 생성
- claude/instruction-template.md 파일을 프로젝트 루트 하위에 CLAUDE.md파일로 복사  

5.가이드 로딩 
- '[가이드 로딩]' 섹션에 지정된 명령을 수행함 
