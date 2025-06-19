---
name: feature_request
about: Suggest an idea for this project
title: ""
labels: ""
assignees: ""
---

name: ✨ 기능 요청
description: 새로운 기능 개발을 위한 이슈입니다.
title: "[Feature] "
labels: ["feature"]
assignees:
  - 작성자 GitHub ID (기본값 설정 가능)
body:
  - type: input
    id: overview
    attributes:
      label: 기능 요약
      placeholder: 어떤 기능인지 간단히 서술
    validations:
      required: true

  - type: textarea
    id: detail
    attributes:
      label: 기능 상세 설명
      description: 화면 흐름, 입력/출력, 예외 처리 등을 포함

  - type: textarea
    id: checklist
    attributes:
      label: 작업 항목 (체크리스트)
      value: |
        - [ ] UI 구현
        - [ ] API 연동
        - [ ] 테스트
    validations:
      required: false

  - type: dropdown
    id: estimate
    attributes:
      label: 예상 소요 시간
      options:
        - 0.5d
        - 1d
        - 2d
        - 3d+
    validations:
      required: false
