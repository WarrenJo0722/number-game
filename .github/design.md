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

## 2.3 숫자 정답 확인 – 설계
- 버튼 클릭 시 인풋 태그의 숫자를 읽어 `checkNumber(userNumber)` 함수에 전달한다.
- 해당 함수는 초기화된 랜덤 숫자와 입력값을 비교해 정답 여부를 반환한다.
- 정답일 경우 이벤트 핸들러에서 `alert("정답입니다!")`를 출력한다.