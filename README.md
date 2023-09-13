# 📝 Dailylog
달마다 얼마나 일기를 작성했는지 그래프로 보여줍니다. <br/>
사진과 함께 기록하여 그 날을 더 생생하게 기록할 수 있습니다.

## 💡 기간
2023.02~2023.08

2023.08~ 리팩토링 진행중

## 💡 이용 기술
프론트엔드  <br/><br/> 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Styled %20 Components-DB7093?style=flat&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/React %20 Query-FF4154?style=flat&logo=react-query&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-3578E5?style=flat&logo=Recoil&logoColor=white"/>
<br/><br/>
백엔드 <br/><br/> 
<img src="https://img.shields.io/badge/node.js-339933?style=flat&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/express.js-000000?style=flat&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/mysql-4479A1?style=flat&logo=mysql&logoColor=white"/>

배포  <br/><br/>
<img src="https://img.shields.io/badge/koyeb-121212?style=flat&logo=koyeb&logoColor=white"/>
<img src="https://img.shields.io/badge/netlify-00C7B7?style=flat&logo=netlify&logoColor=white"/>

## 💡 API명세
|종류|Method|URL|설명|
|------|---|---|---|
|로그인|Post|/api/auth/log|로그인시 토큰을 생성합니다.|
|회원가입|Post|/api/auth/signup|회원가입시 회원정보를 생성합니다.|
|회원탈퇴|Delete|/api/user/delete|회원탈퇴시 성공/실패메시지를 생성합니다.|
|일기 달별 불러오기|Get|/api/log/:user_id/month/date?year={value}&month={value}|달별 작성한 일기를 불러옵니다.|
|일기 페이지별 불러오기|Get|/api/log/:user_id/list?page={value}|페이지별 일기를 불러옵니다.|
|일기작성|Post|/api/log|일기를 생성합니다.|
|일기수정|Patch|/api/log/:id|일기 수정시 생성합니다.|
|일기통계|Get|/api/log/:user_id/year|작성한 일기개수를 불러옵니다.|

## 💡 Demo

|로그인|회원가입|홈|일기기록,일기작성,마이페이지|
|------|---|---|---|
|![로그인](https://github.com/devhobak/diary/assets/74497080/816994cf-6600-4472-9108-248bab182e6e)|![회원가입](https://github.com/devhobak/diary/assets/74497080/1048b678-42ab-436d-bd16-4eb46dfbbaef)|![diary  글올리기 gif](https://github.com/devhobak/diary/assets/74497080/e08f5920-1143-4714-b7bb-c54e1509d924)|![diary  일기기록 일기작성 마이페이지](https://github.com/devhobak/diary/assets/74497080/5b4635c2-32c1-4570-a011-35436c2f53c8)|


## 💡 핵심 기능


## 💡 리팩토링
### 이미지 resizing

### 이미지 svg로 대체
