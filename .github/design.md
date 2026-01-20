# Number Guessing Game - 설계 문서

## 1. 시스템 아키텍처

### 1.1 파일 구조
```
number-game/
├── index.html          # 게임 UI
└── script.js          # 게임 로직
```

---

## 2. 설계

### 2.1 HTML 요소
- **input 태그**: 사용자가 숫자를 입력하는 필드
  - type: "number"
  - id: "guessInput"
  - placeholder: "1~100 사이의 숫자를 입력하세요"

- **button 태그**: 제출 버튼
  - id: "submitBtn"
  - text: "제출"

### 2.2 JavaScript 변수
- **secretNumber**: 정답 숫자 (1~100 범위의 랜덤 정수)
  - 생성 방식: `Math.floor(Math.random() * 100) + 1`
