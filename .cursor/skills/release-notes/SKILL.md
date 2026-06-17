---
name: release-notes
description: 두 git 태그/커밋 사이의 변경으로 한국어 릴리스 노트를 작성한다. 사용자가 "릴리스 노트", "변경 로그", "changelog"를 언급하거나 배포 준비를 할 때 사용한다.
---

# Release Notes 작성

## 언제 사용하나
- 새 버전 배포 전, 마지막 릴리스 이후의 변경을 정리할 때

## 절차
1. `scripts/collect_commits.sh <이전태그> <현재태그>`를 실행해 커밋 목록을 수집한다.
2. 커밋을 `✨ 기능 / 🐛 버그 수정 / 🧹 기타`로 분류한다.
3. 사용자에게 보여줄 한국어 릴리스 노트를 다음 형식으로 작성한다:
   - 맨 위 한 줄 요약
   - 카테고리별 불릿 (이슈 번호가 있으면 붙인다)
4. 내부 리팩터링·오타 수정은 "기타"로 묶어 간결하게.

## GitHub MCP로 커밋 수집

`user-github` MCP 도구를 사용한다. 호출 전 `mcps/user-github/tools/`에서 도구 스키마를 확인한다.

### 저장소 식별
- `git remote -v`로 `owner/repo`를 확인한다.
- 사용자가 태그를 지정하지 않으면 `list_tags` 또는 `get_latest_release`로 마지막 릴리스 태그를 찾는다.

### 태그 → 커밋 범위
1. `get_tag`로 `<이previous태그>`, `<현재태그>` 각각의 커밋 SHA를 확인한다.
2. `list_commits`로 `owner`, `repo`, `sha`(현재 태그)를 지정해 커밋 목록을 가져온다.
3. 이전 태그 SHA에 해당하는 커밋까지 포함되면, 그 커밋 **이후**만 릴리스 노트 대상으로 필터한다.
4. 100개를 초과하면 `page`/`perPage`로 페이지네이션한다.

### 분류 힌트
- 커밋 메시지의 `feat`, `fix`, `refactor` 등 conventional prefix와 PR/이슈 참조(`#123`, `Fixes #123`)를 활용한다.
- 상세 변경이 필요하면 `get_commit`(detail: `stats`)으로 파일별 변경 규모를 참고한다.

### 스크립트 대체
- `scripts/collect_commits.sh`가 있으면 로컬에서 실행해도 된다.
- GitHub MCP와 결과가 다르면 MCP(원격 기준)를 우선한다.

## 출력 형식
마크다운. 사용자에게 바로 복사 가능한 형태로 제시한다.

### 예시

```markdown
## v1.2.0 — 이메일 검증 및 릴리스 노트 스킬 추가

### ✨ 기능
- 이메일 형식 검증 모듈 추가 (#12)
- release-notes 스킬 추가

### 🐛 버그 수정
- 빈 문자열 입력 시 오류 처리 (#15)

### 🧹 기타
- validator 문서 정리, 코드 스타일 규칙 추가
```
