# **About team Seoulminer - mining codes**

- FrontEnd: [양회진](https://github.com/hjyang369)(project manager), [이지원](https://github.com/jiwon614118)
- BackEnd: [신동현](https://github.com/donghyeun02), [최리나](https://github.com/lchoe24), [하준수](https://github.com/joonsooha123)(product manager)
- 개발기간: 2023.06.23 ~ 2023.07.07
- 깃헙 링크 : [FrontEnd](https://github.com/wecode-bootcamp-korea/47-1st-seoulminer-frontend) , [BackEnd](https://github.com/wecode-bootcamp-korea/47-1st-seoulminer-backend)
    

---

## Clone Coding project - 배민문방구

웹 개발의 첫 걸음을 뗀 seoulminers는 사람들이 가장 일상적으로 영위하는 행동 중 하나인 상거래를 웹페이지로 구현해 보기로 했다.

---

## 우리가 구현해야 할 행위 - 전자상거래

인터넷이 우리 생활에 보급된 이래, 사람들이 현실세계에서 영위하는 행동들 중 많은 수가 온라인의 세계로 이식되었다. 

특히 상거래는 단언컨대 유사 이래 가장 많이 수행된 사람과 사람 사이의 상호작용일 것이다.

---

## PEFT 분석

### Product: 우리의 프로덕트가 커버하는 제품과 서비스는 어떤 종류의 것일까? 

1. eCommerce를 영위: 네트워크 상에서 이루어지는 제품의 거래
   - 실제로 제품을 보고 구매의사결정을 내리는 것이 아닌, 웹페이지에 게시된 정보를 바탕으로 구매의사결정을 내리게 됨. 따라서 제공 가능한 선에서 상품에 대한 상세 정보를 제공할 수 있어야 함.
   - 구매의사 결정 및 지불이 끝났다고 해서 바로 상품을 수령할 수 있지 않으므로, 상품의 인도에 있어 필요한 정보가 잘 관리되어야 함.
2. 취급품목: 재미있는 소품
   - 특이하고 기성품이 아닌 이벤트성 상품을 판매함.
   - 가격대도 높은 편이 아님. 부담없이 구매할 수 있는 수준.
   - 친구에게 장난으로 선물하면 좋을 물건.

### End-user: 우리의 프로덕트는 어떤 사람이 사용하게 될까? 

- 재미있는 소품을 사용할 만한 사람들
- 이 사람들은 특이한 물건을 사용하는 것을 / 특이한 선물을 하는 것을 좋아한다. 
- 또한 일상적인 구매(식자재 구매와 같은)가 이뤄지는 것은 아니다.
    
### Feature: 우리의 프로덕트는 어떤 기능을 가지고 있어야할까?

1. SignUp: 엔드유저를 인지하는 회원가입 기능.
   - 어떤 사람이 어떤 품목을 얼마만큼 구매했는지를 알 수 있어야 한다. 이를 위해서는 해당하는 엔드유저를 특정할 수 있어야 하며, 회원가입을 통해 웹페이지 내의 활동에 대해 엔드유저를 특정할 수 있다.
   - 아울러 특정 엔드유저의 주소지 등에 대한 정보도 관리해야 구매건에 대해 배송등의 사후처리도 수행할 수 있다.
2. SignIn: 엔드유저의 구매행위를 지원하고 분석하는 로그인 기능.
   - 로그인 기능을 통해, 어떤 엔드유저가 웹페이지 상에서 어떤 행동을 취했는지 파악할 수 있다.
   - 특히 eCommerce는 거래가 메인이 되는 만큼, 거래의 주체를 정확히 특정하고 파악할 수 있어야 한다.
3. ProductView: 엔드유저에게 상품의 정보를 제공하는 상품조회 기능.
   - 상품을 팔기 위해서는, 구매자가 해당 상품에 대한 정보를 제공받을 수 있어야 한다.
   - 상품의 물리적 실체를 관찰하고 구매의사를 내릴 수 있는 것이 아니다 보니, 매체 안에서 제공할 수 있는 한도 안에서 최대한 상세한 정보를 전달해야 한다. 
   - 상품의 리스트도 볼 수 있어야 하고, 개별상품에 대한 접근도 가능해야 한다.
4. Cart: 엔드유저가 구매의사가 있는 상품의 데이터를 저장하는 장바구니 기능.
   - 엔드유저의 구매 편의성을 위해, 장바구니 기능을 제공해야 한다.
   - 엔드유저는 로그인한 상태에서 본인이 구매하고자 하는 상품들을 담아두었다가 한번에 구매를 할 수 있어야 한다.
5. Order: 엔드유저의 구매이력을 확인, 확정하는 주문서 기능.
   - 엔드유저가 구매한 상품에 대해, 판매자도 그 내역을 확인해야 상품의 배송 등의 사후절차를 진행할 수 있다.
   - 아울러 관계법령 상 거래에 대한 정보는 일정 기간 보관되어야 한다.

### Tech: 우리가 사용할 기술스택

- 기술스택
    - Front End : 자바스크립트, 리액트, SCSS
      <div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /><img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /><img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" /></div>

- 협업툴
<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>

---

## 구현 기능 상세

#### 1. SignUp
- 첫번째 페이지
   - 레이아웃
   - 상태관리를 통한 약관 전체 동의 및 부분 동의
- 두번째 페이지
   - 레이아웃
   - 정규표현식에 따라 유저정보 입력할 수 있으며 조건에 맞으면 버튼 활성화
   - 회원가입 성공 시 축하 모달 띄워주고 setTimeOut 이용해 3초 뒤에 main 페이지로 이동
   - 가입한 유저의 정보 POST 요청
      
![miner 회원가입](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/01aafcb9-fbd5-4227-9836-6d809da9e68a)
![miner 회원가입 약관동의](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/5b49e18e-1cc6-420f-bc9d-e2a9d7fd0dde)


#### 2. SignIn
- 레이아웃
- 모든 입력창에 입력 시 로그인 버튼 활성화
- 로그인한 유저의 정보 POST 요청

![miner 로그인](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/230cd4d1-b66f-4929-abb9-383a4747366f)


#### 3. main page
- nav
  - JWT 토큰의 local storage 저장 유무에 따라 로그인/로그아웃 버튼 및 nav toggle ui 변화
  - 비로그인 시 장바구니 버튼 클릭 시 로그인 페이지로 이동해 로그인 유도
- main
  - GET 요청을 통해 상품 정보 받아옴
  - event handler 이용해 상품 이미지 hover 시 이미지 및 글자 색 바뀌도록 구현
- 상품 리스트 page
  - 쿼리스트링 이용해 카테고리 버튼 클릭 시 상품리스트페이지에 그에 맞는 정보 노출
  - 카테고리 ID에 따라 카테고리 제목 바뀌는 UI 구현

![상세페이지이동](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/1a15b9a5-9e9f-4ac8-9953-bdfdebd9f24a)
![리스트노출gif](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/90b3507a-9eed-4c3d-832e-a87110d5ba99)


#### 4. 상품 상세 page
- 레이아웃
- 수량 올리면 총 금액 바뀌도록 구현
- 수량이 1이상이며 재고수량과 같거나 적을 때 장바구니, 바로구매 버튼 활성화 및 재고수량보다 많을 시 버튼 비활성화, 재고부족 글 보여줌
- 장바구니 버튼 클릭 시 상품의 정보에 대한 POST 요청 및 장바구니에 추가되었다는 alert 창 노출
- 바로구매 버튼 클릭 시 localStorage에 저장 후 구매 페이지로 넘어가서 localStorage에 저장된 정보 불러옴
- 쿼리스트링 이용해 현재 상품의 카테고리에 맞는 추천 상품 리스트 보여줌
- 상태관리를 통해 상품정보/구매후기/상세정보 버튼에 따라 다른 UI 구현
- useParams 사용해 상품에 대한 정보 GET 요청

![상품기본후기정보](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/7204bbc0-33d5-4cc2-8b11-33a11715dc60)
![재고관리](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/75da1aec-7b67-47ea-ae2e-4f1dbbe130ab)


#### 5. Cart
- 레이아웃
- 결제하기 버튼 클릭 시 장바구니에 있는 상품 정보 POST 요청
  
![장바구니로이동](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/765ff39c-4bc5-43f9-9483-9a837986fcbe)
![비회원장바구니](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/b1b84752-4eb9-4552-b443-4f2a1a757005)


#### 6. Order
- 모든 입력창 입력해야 버튼 활성화
- 상태관리를 통해 결제수단 및 전체동의 체크박스 구현
- 장바구니에서 결제창으로 오는 경우와 바로구매로 오는 경우에 따라 다른 정보 불러옴
  - 장바구니 : 장바구니에 있는 상품 목록 get 요청
  - 바로구매 : localStorage에 있는 상품 정보 불러오고 결제버튼 클릭 시 삭제
- 물품 결제 성공 시 구매 성공 모달 창 오픈

![바로구매](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/679c9038-48a0-41fd-82aa-5832650f986c)


#### 7. 404 page
- 레이아웃
- 라우터 통해서 404페이지에는 nav, footer 안보이도록 구현

![404페이지](https://github.com/hjyang369/seoulminer-frontend/assets/125977702/de0f9a0b-a2c0-4812-8430-9bd58500b518)


---

## 데모영상

[Team SeoulMiners DEMO](https://youtu.be/t2XcuRR5fUA)

---

## 참고자료

- Notion Teamspace - Seoulminer
    
    [https://www.notion.so/Home-Seoulminer-6ec547cfd20d4b64949230fa66d3a34d?pvs=4](https://www.notion.so/Home-Seoulminer-6ec547cfd20d4b64949230fa66d3a34d?pvs=21)
    
- Trello - Ticket management
    
    [Trello](https://trello.com/b/UuPuThmi/teamseoulminer)
    
- dbdiagram - ERD
    
    [A Free Database Designer for Developers and Analysts](https://dbdiagram.io/d/6498e51a02bd1c4a5e0b0349)
    
- Postman - Seoulminer API
    
    [Seoulminer](https://documenter.getpostman.com/view/27927438/2s93zFXeiA)
    
- REACT
    
    [React – 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리](https://ko.legacy.reactjs.org/)
    

---

## 추가적으로 구현해보고 싶었던 것들

- [ ] 외부 API 이용한 주소 조회
- [x] sns login (다음 프로젝트에서 구현함)
- [ ] point 차감 방식의 결제
- [x] 로그인 페이지에서 아이디 저장
- [ ] 장바구니에서 상품 선택삭제 및 전체삭제 기능
  
---

## Reference

- 이 프로젝트는 [배민문방구](https://brandstore.baemin.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트 이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제가 될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것으로, 해당 프로젝트 외부인이 사용할 수 없습니다.

---

