# 포트폴리오 배포 가이드

## 🌐 배포 방법 (무료)

### 방법 1: Vercel (가장 쉬움, 추천 ⭐)

1. **GitHub에 코드 업로드**
   ```bash
   # Git 초기화 (아직 안 했다면)
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   
   # GitHub에 새 저장소 만들고 연결
   git remote add origin https://github.com/your-username/my-react-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Vercel 배포**
   - https://vercel.com 접속
   - "Sign Up" → GitHub 계정으로 로그인
   - "Add New Project" 클릭
   - GitHub 저장소 선택 (`my-react-portfolio`)
   - 설정은 기본값 그대로 → "Deploy" 클릭
   - 완료! 자동으로 URL 생성 (예: `your-portfolio.vercel.app`)

3. **자동 업데이트**
   - GitHub에 코드를 푸시하면 자동으로 재배포됩니다!

---

### 방법 2: Netlify

1. **GitHub에 코드 업로드** (위와 동일)

2. **Netlify 배포**
   - https://www.netlify.com 접속
   - "Sign up" → GitHub 계정으로 로그인
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - "Deploy site" 클릭
   - 완료! URL 생성 (예: `your-portfolio.netlify.app`)

---

### 방법 3: GitHub Pages (추가 설정 필요)

1. **GitHub에 코드 업로드**

2. **배포 설정**
   ```bash
   # gh-pages 패키지 설치
   npm install -D gh-pages
   ```

3. **package.json에 스크립트 추가**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://your-username.github.io/my-react-portfolio"
   }
   ```

4. **배포 실행**
   ```bash
   npm run deploy
   ```

5. **GitHub 저장소 설정**
   - Settings → Pages → Source: `gh-pages` 브랜치 선택

---

## 📝 배포 전 체크리스트

- [ ] `package.json`에 올바른 정보가 있는지 확인
- [ ] 모든 링크가 정상 작동하는지 확인
- [ ] 모바일 반응형이 잘 작동하는지 확인
- [ ] 이미지나 에셋 경로가 올바른지 확인

---

## 🔄 업데이트 방법

배포 후 코드를 수정했다면:

**Vercel/Netlify**: GitHub에 푸시만 하면 자동 재배포

**GitHub Pages**: `npm run deploy` 다시 실행

---

## 💡 도메인 연결 (선택사항)

- Vercel/Netlify에서 무료 커스텀 도메인 추가 가능
- 예: `portfolio.yourname.com`

