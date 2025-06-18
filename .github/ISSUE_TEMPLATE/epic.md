---
name: epic
about: Describe this issue template's purpose here.
title: ''
labels: ''
assignees: ''

---

name: 🧱 Epic 이슈
description: 여러 작업 이슈를 묶는 Epic입니다.
title: "[Epic] "
labels: ["epic"]
body:
  - type: input
    id: goal
    attributes:
      label: Epic 목표
      placeholder: 전체 Epic의 목적을 간단히 설명
    validations:
      required: true

  - type: textarea
    id: features
    attributes:
      label: 관련 기능 이슈 링크
      description: 하위 이슈를 체크리스트로 작성하거나 자동 연결 (e.g., #45, #47)

  - type: textarea
    id: note
    attributes:
      label: 참고사항 및 메모
