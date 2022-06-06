# 33기 1차 프로젝트 - wesulloc

## 개요
* 오설록 웹페이지 클론코딩 프로젝트
* 클론코딩은 개발 환경 셋팅부터 시작하였으며, 하단 시연 영상은 모두 백엔드와의 데이터 연동을 통해 실제 서비스에서 이용되는 수준으로 구현하였습니다.
* 프로젝트는 2주동안 진행됨에 따라 디자인과 아래 서술한 기능들만 선택하여 구현했습니다.
  * Nav Bar & Footer, 메인페이지
  * 상품 페이지
  * 상품 상세 및 리뷰 
  * 장바구니
* 개발 일정에 맞춘 작업량 배분, 기능별 git 분기 및 merge의 중요성을 직접 느낄 수 있었으며, 차주에 진행되는 2차 프로젝트에서는 해당 경험을 통해 보다 부드러운 일정 진행이 이뤄질 수 있도록 하려고 합니다.

## 팀원

`Front-End` 
  * 김현주, 안수정, 이윤섭, 손가영

`Back-End` 
  * 최바다, 황재승

## 사용한 기술

`Front-End` 
  * HTML, CSS(SASS), Javascript, React

`Back-End` 
  * Django, Python, 기타 추가 필요

`Cowork` 
  * Git, Slack, Trello

## 시연 연상

https://www.youtube.com/watch?v=hi08z17A2s0

## 구현 기능

* Nav Bar & Footer, 메인페이지 (손가영)

  <img width="500" src="https://velog.velcdn.com/images/ka0son/post/6d025d21-7b81-4d1f-b152-6aeb5bcea78b/image.gif"/>
  
  * Nav Bar & Footer

    ```
    - 상수데이터를 이용한 카테고리 데이터 관리
    - map함수를 적용하여 카테고리 정렬
    - 네브바 최상단 fixed 적용
    - useNavigate를 이용해 세부 카테고리에 접근
    - 드롭다운 메뉴바 구성
    - 토큰 유무에 따른 로그인 및 로그아웃 액션 변화
    ```
  
  * 메인페이지

    ```
    - 최상단 페이지 배너를 화면 너비에 맞게 이미지가 넘어가도록 하는 carousel 구현
    - 공지사항 영역에 애니메이션 효과를 적용해 텍스트가 위로 올라가며 사라지고, 다른 공지사항이 나오게 구현
    - 베스트 제품영역을 카드형 carousel로 구현 
    - 백엔드에서 받아온 데이터를 활용하여 할인율 및 신제품 여부 반영 가능
    - keyfram을 적용한 hover시 페이드아웃 액션구현
    ```
  
