<div align="center">
  <img src="https://github.com/user-attachments/assets/8890c995-0f44-4076-949d-f445f6ae606d#gh-light-mode-only" width="36px" height="36px" />
  <img src="https://github.com/user-attachments/assets/8ec0f544-1535-4bc8-8992-2a69c38b3f91#gh-dark-mode-only" width="36px" height="36px" />
</div>

## KBotDocs

**KBotDocs**는 레거시 API, API2 등 카카오톡봇 개발에 필요한 여러 요소들을 정리한 문서입니다. KBotDocs는 Issues, Pull requests 등을 통해 누구나 기여할 수 있습니다!

## 문서 작성 가이드라인

**KBotDocs**에 존재하는 문서는 `*.MDX`형식의 파일로 `markdown/` 내에 저장되어 있습니다. MDX는 기존 마크다운(`*.md`)에서 JSX를 사용할 수 있으며, 확장가능합니다.

### 섹션(Section)

KBotDocs의 문서는 여러 개의 섹션(Section)으로 나누어져 있습니다.

<div align="center">
  <img src="https://github.com/user-attachments/assets/2ac12cf9-4de3-4f1c-b545-9ba162212e7d#gh-light-mode-only" width="75%" height="auto" />
  <img src="https://github.com/user-attachments/assets/4133b0cc-f38d-4801-a460-19d7b4dfed4f#gh-dark-mode-only" width="75%" height="auto" />
</div>

위의 경우, **알아두기** 섹션과 **카카오톡봇이 무엇인가요?** 섹션으로 이루어져 있습니다. 섹션은 최소 아래의 조건을 만족해야 합니다:

- `<Section></Section>`(`section`이 아님)으로 구분됨.
- 섹션의 제목을 나타내는 `<h2>` 태그로 시작함.

가령, 위의 경우는 다음과 같이 작성된 결과입니다:

```mdx
<Section>
    ## 알아두기

    카카오톡봇 개발 전 꼭 알아두어야 할 몇 가지 사항이 있습니다!

    - **Java와 JavaScript는 서로 다른 언어입니다!** 이 말은 JavaScript를 "Java"라고 줄여서 부르지 않는다는 것이죠. 차라리 **"JS"** 라고 부르기로 합시다.
    - 카카오톡봇 개발에 사용되는 JS는 웹 개발에 사용되는 JS가 아니라 **Rhino라는 JS구현 엔진**입니다. JS의 여러 최신 문법/기능이 빠지긴 했어도 **Java클래스를 사용할 수 있**다는 장점이 있죠!
    - 카카오톡봇을 작동시키기 위해서는 기기의 운영체제가 **Android OS**, 그 중에서도 **버전 5.0(롤리팝) 이상**이어야 해요.
</Section>
<Section>
    ## 카카오톡봇이 무엇인가요?

    카카오톡봇은 **카카오톡 상단바 알림을 읽고, 자동으로 응답하는 자동응답 봇**이에요. 이걸 개발하기 위해서는 [메신저봇R](https://github.com/MessengerBotTeam/msgbot-old-release/releases), [채팅 자동응답 봇](https://github.com/DarkTornado/KakaoTalkBot/releases) 등의 앱이 쓰인답니다.
</Section>
```

올바르게 섹션을 작성했을 경우, TOC(Table of Content)에 각 섹션의 제목이 표시됩니다.

### 부 섹션(Sub Section)

부 섹션은 한 섹션에서 추가적인 설명을 위해 추가할 수 있습니다. 부 섹션은 하나의 섹션에 종속적이여야 합니다.

<div align="center">
  <img src="https://github.com/user-attachments/assets/f225c009-a64b-47dc-8ad0-8a0b6d00130d#gh-light-mode-only" width="75%" height="auto" />
  <img src="https://github.com/user-attachments/assets/d3462dba-0b30-49ae-af88-fe3cd04c2286#gh-dark-mode-only" width="75%" height="auto" />
</div>

위 이미지에서 **개발 준비** 섹션은 일반 섹션, **앱 설치**와 **부계정을 사용하신다고요?** 섹션은 **개발 준비**에 종속된 부 섹션입니다. 부 섹션은 최소 아래 조건을 만족해야 합니다:

- `<Section></Section>`(`section`이 아님)으로 구분됨.
- 자신의 부모 섹션 내에 존재해야 함.
- 섹션의 제목은 부모 섹션의 제목보다 한 단계 작아야 함. 가령, 부모 섹션의 제목이 `<h2>` 태그인 경우, 부 섹션은 `<h3>` 태그여야 함.

가령, 위의 경우는 다음과 같이 작성된 결과입니다:

```mdx
<Section>
    ## 개발 준비

    <Section>
        ### 앱 설치

        카카오톡봇을 개발하려면, 일단 개발하고 구동시킬 앱이 필요하겠죠? 지금 이 편과 앞으로의 편 모두 **메신저봇R**을 기준으로 할게요.

        - 우선, GitHub Release에서 [**메신저봇R**](https://github.com/MessengerBotTeam/msgbot-old-release/releases)을 설치해주세요.
        - 안드로이드 버전이 7.0(누가) 미만일 경우 [**Wear OS by Google**](https://play.google.com/store/apps/details?id=com.google.android.wearable.app&hl=ko)를 추가로 설치해야 해요. (설치만 하면 된답니다. 이 앱에 대해서는 추가로 설정해야할 것이 없어요!)
        - 메신저봇R 최초 실행 시 **데이터 폴더**창이 나와요. 앞으로 자신이 개발할 봇의 소스코드를 어디에 저장할 것인지 지정하는 것이니 저장할 폴더를 지정하시면 됩니다.
        - 드디어 메신저봇R의 메인 화면을 구경할 수 있게 되었네요! 자신의 첫 봇을 만들기 위해 우측 하단에 있는 스크립트 추가 버튼을 클릭해봅시다.
        - **새 봇** 창에 자신의 봇 이름을 입력하고 **확인**을 누르세요.
        - 이제 자신의 봇이 어떻게 작동될 것인지를 코딩할 스크립트 파일이 생성되었습니다! 생성된 스크립트를 클릭한 다음 연필 버튼을 클릭하면 소스코드를 작성할 수 있습니다.
    </Section>
    <Section>
        ### 부계정을 사용하신다고요?

        부계정을 사용할건데 별도로 작업해야할 것이 있냐고요? 음... 모른다는 뜻이 아닙니다.

        - 삼성 듀얼 메신저 기능을 사용하신다면, **봇 전용 계정인 아닌 계정의 카카오톡 알림**을 비활성화해야 합니다. 그러지 않으면 봇 전용 계정과 자신의 주 계정 모두가 봇으로서 작동될 수 있어요.
        - 복제 앱을 사용하신다고요? 그러면 **메신저봇R** > **공용 설정** > **알림을 읽을 패키지명**에서 봇으로 사용할 메신저앱의 패키지명을 입력하세요.
    </Section>
</Section>
```

부 섹션의 경우, 1차 부 섹션(`<h3>`)까지만 TOC에 표시합니다. 섹션은 여러 번 중첩할 수 있지만, 4중첩 이상(`<h5>` 이상)을 권장하지 않습니다.

### 인라인 코드(Inline Code)와 코드 블럭(Code Block)

인라인 코드는 마크다운의 인라인 코드 문법을 따릅니다. 다만, 아래와 같이 스타일을 추가해야 하는 경우가 존재합니다:

<div align="center">
  <img src="https://github.com/user-attachments/assets/3696bd91-8132-4b52-8816-46ad57883d4c#gh-light-mode-only" />
  <img src="https://github.com/user-attachments/assets/64064ee5-8c1c-4b73-be04-8b1c44add912#gh-dark-mode-only" />
</div>

이런 경우, 아래와 같이 작성합니다:

```mdx
`canReply(`*`room: String`*`)`
```

여러 줄의 코드를 작성할 경우, 코드 블럭을 사용합니다. 가령, 아래와 같은 경우는

<div align="center">
  <img src="https://github.com/user-attachments/assets/32b4df26-5dfd-447e-9680-43e2ce394f25#gh-light-mode-only" width="75%" height="auto" />
  <img src="https://github.com/user-attachments/assets/9d264247-2778-42bd-b8f0-9f61b8fdd6d8#gh-dark-mode-only" width="75%" height="auto" />
</div>

다음과 같이 작성합니다:

```mdx
~~~json
{
    "url": String, // request를 보낼 URL
    "timeout": Number, // request 타임아웃 (밀리초; 기본값: 3000)
    "method": String, // request 메소드 (기본값: "GET")
    "headers": { /* Header */ } // request 헤더 (기본값: null)
}
~~~
```
