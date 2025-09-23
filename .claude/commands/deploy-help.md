---
command: "/deploy-help"
description: "배포 작업 순서 및 가이드를 표시합니다"
---

# 배포 작업 가이드

## 🚀 배포 작업 순서

### Phase 1: 컨테이너 이미지 작성
```
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/build-image-back.md > claude/build-image-back.md
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/build-image-front.md > claude/build-image-front.md
```
- 백엔드 및 프론트엔드 컨테이너 이미지를 작성합니다

### Phase 2: 컨테이너 실행 방법 확인
```
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/run-container-guide-back.md > claude/run-container-guide-back.md
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/run-container-guide-front.md > claude/run-container-guide-front.md
```
- 컨테이너 실행 방법을 확인합니다

### Phase 3: 쿠버네티스 배포 (선택사항)
```
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/deploy-k8s-back.md > claude/deploy-k8s-back.md
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/deploy-k8s-front.md > claude/deploy-k8s-front.md
```
- 쿠버네티스 클러스터에 배포합니다

### Phase 4: CI/CD 파이프라인 설정 (선택사항)

#### Jenkins 파이프라인
```
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/deploy-jenkins-cicd-back.md > claude/deploy-jenkins-cicd-back.md
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/deploy-jenkins-cicd-front.md > claude/deploy-jenkins-cicd-front.md
```

#### GitHub Actions 파이프라인
```
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/deploy-actions-cicd-back.md > claude/deploy-actions-cicd-back.md
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/deploy-actions-cicd-front.md > claude/deploy-actions-cicd-front.md
```

#### ArgoCD 파이프라인
```
curl https://raw.githubusercontent.com/cna-bootcamp/clauding-guide/refs/heads/main/guides/deploy/deploy-argocd-cicd.md > claude/deploy-argocd-cicd.md
```

## 📋 배포 단계 주요 산출물
- Docker 이미지 및 Dockerfile
- Kubernetes 배포 매니페스트
- CI/CD 파이프라인 설정
- 배포 가이드 문서

## 💡 배포 완료
모든 단계가 완료되면 서비스가 성공적으로 배포됩니다!