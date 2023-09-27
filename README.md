# 📝 Dailylog
📍 오늘 하루를 기록할 수 있는 일기장입니다. <br/>
- 달마다 얼마나 일기를 작성했는지 그래프로 보여줍니다. <br/>
- 사진과 함께 기록하여 그 날을 더 생생하게 기록할 수 있습니다. <br/>
site :https://daily-diary-happy.netlify.app/

## 💡 기간
2023.02~2023.08

2023.09~ 리팩토링 진행중

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

## 화면
<img width="677" alt="image" src="https://github.com/devhobak/diary/assets/74497080/be5bf3df-085b-4e5d-b425-c3eadf95696c">
<img width="672" alt="image" src="https://github.com/devhobak/diary/assets/74497080/8a3fcb95-03e7-40c6-9e6d-0c4fb0cb6deb">


## 💡 리팩토링

### 이미지 resizing
<details>
<summary>전</summary>
<div markdown="1">
<img width="883" alt="image" src="https://github.com/devhobak/diary/assets/74497080/328258b4-de9b-45b5-9157-cc4f958c77be">

</div>
</details>
<details>
<summary>후</summary>
<div markdown="1">
<코드> <br/>
  
  ```
  const reSizing = async (file: File) => {
    let options = {
        maxSizeMB: 0.5,
    };
    let resizingImg = await imageCompression(file, options);
    let FileResizing = new File([resizingImg], file.name, { type: file.type });

    return FileResizing;
};
```
<br/>
<결과> <br/>
<img width="906" alt="image" src="https://github.com/devhobak/diary/assets/74497080/7aff6a8d-ff51-4c34-b703-487623fbec26">

</div>
</details>

### react-query 분리
흩어져 있던 useQuery와 useMutation을 같은 폴더로 모아 깔끔하게 관리
<details>
<summary>폴더 구조</summary>
<div markdown="1">
<img width="446" alt="image" src="https://github.com/devhobak/diary/assets/74497080/66682e44-945d-49f7-b2bb-d24e722fc4c4">
</div>
</details>

### 성능 개선
<details>
<summary>코드 분할</summary>
<div markdown="1">
  <br/>
  
  ```
  import { Suspense, lazy } from 'react';
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const WritePage = lazy(() => import('../pages/WritePage'));
const ViewPage = lazy(() => import('../pages/ViewPage'));
const MyPage = lazy(() => import('../pages/MyPage'));
  ```

  <br/>
</div>
</details>



