# cursor-demo

이메일 검증 유틸과 Cursor 프로젝트 설정(Rules, Skills, Docs)을 담은 데모 저장소입니다.

## 사용법

```bash
npm test
```

## 릴리스 노트

### v1.0.0 — 이메일 검증 유틸과 Cursor 프로젝트 기반 구축

#### ✨ 기능
- 사용자 배열에서 이메일 추출·형식 검증·중복 제거 유틸 추가 (`src/email.js`)
  - `extractEmails`, `isValidEmail`, `getValidEmails`, `uniqueValidEmails`
- RFC 5322 정규식 및 RFC 3696 길이 제한을 적용한 `isValidEmail` 모듈 추가 (`src/validator.js`)
- Node.js 내장 test 러너 기반 이메일 유틸 테스트 추가 (`src/email.test.js`)
- release-notes Agent Skill 추가 — 태그/커밋 간 변경으로 한국어 릴리스 노트 작성 (`.cursor/skills/release-notes/`)

#### 🐛 버그 수정
- (해당 없음)

#### 🧹 기타
- `validator.js` 구현 스펙 문서 추가 (`docs/validator.md`)
- 프로젝트 공통 코딩 규칙 추가 — 한국어 주석·ESM·JSDoc (`cursor/rules/coding-style.mdc`)
- `npm test` 스크립트를 `node --test src/email.test.js`로 설정
- 커밋 수집용 `collect_commits.sh` 스크립트 추가
