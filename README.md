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

- `<Section></Section>`(`section`이 아님)으로 구분됨됨.
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

### 표(Table)

KBotDocs에서 표는 객체의 메소드나 프로퍼티 등을 나타내기 위해 많이 사용합니다. 가령, 다음과 같습니다:

<div align="center">
  <img src="https://github.com/user-attachments/assets/5aada1a1-d7e1-4db6-a568-d8671bc9c2d8#gh-light-mode-only" width="75%" height="auto" />
  <img src="https://github.com/user-attachments/assets/ec9f622e-ebfe-46b0-ac45-d5201484e364#gh-dark-mode-only" width="75%" height="auto" />
</div>

위의 경우, 다음과 같이 작성합니다:

```mdx
<Table>
    <thead>
        <tr>
            <Th>자료형</Th>
            <Th>설명</Th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <Td>`android.content.Context`</Td>
            <Td>
                `getContext()` \
                앱의 Context(컨텍스트)를 반환합니다.
            </Td>
        </tr>
        <tr>
            <Td>`undefined`</Td>
            <Td>
                `runOnUiThread(`*`task: Function, onComplete: Function`*`)` \
                UI쓰레드 상에서 특정 함수를 실행합니다.
                <br />
                `task`: UI쓰레드 상에서 실행할 함수 \
                `complete`: 결과를 처리할 함수 \
                매개변수:
                - `error`: `task`함수 실행 도중 일어난 에러의 객체를 전달받는 인자
                - `result`: `task`함수의 반환값을 전달받는 인자

            </Td>
        </tr>
    </tbody>
</Table>
```

KBotDocs에서 표를 작성할 때, 유의해야 할 점이 몇 가지 있습니다:

- 표는 `<Table></Table>`(`table`이 아님)로 구분합니다.
- 표의 헤더는 `<thead>`를, 표의 본문은 `<tbody>`를 사용하여 구분합니다.
- `<th>`와 `<td>`는 각각 `<Th>`, `<Td>`로 작성해야 합니다.

객체의 메소드나 프로퍼티 등을 나타내기 위해 사용할 때엔, 몇 가지 지켜야 할 사항이 더 있습니다. 가령, 다음과 같이 작성해야 합니다:

```mdx
<Table>
    <thead>
        <tr>
            <Th>자료형</Th>
            <Th>설명</Th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <Td>`{메소드 / 프로퍼티의 자료형}`</Td>
            <Td>
                `{메소드1}()` \
                {메소드1의 설명} \
                {메소드1의 반환값이 존재하는 경우, 메소드1의 반환값에 대한 설명}
            </Td>
        </tr>
        <tr>
            <Td>`undefined`</Td>
            <Td>
                `{메소드2}(`*`{매개변수1}: {매개변수1의 타입}, {매개변수2}: {매개변수2의 타입} {, ...})` \
                {메소드2의 설명} \
                {메소드2의 반환값이 존재하는 경우, 메소드2의 반환값에 대한 설명}
                <br />
                `{매개변수1}`: {매개변수1에 대한 설명} \
                `{매개변수2}`: {매개변수2에 대한 설명} \
                매개변수:
                - `{콜백함수 매개변수2의 매개변수A}`: {매개변수A에 대한 설명}
                - `{콜백함수 매개변수2의 매개변수B}`: {매개변수B에 대한 설명}
            </Td>
        </tr>
    </tbody>
</Table>
```

### 인용문(Blockquote)

KBotDocs에서 인용문은 인용 내용 뿐만 아니라 부가적인 정보, 경고, 위험한 정보 등을 알리는 데 사용합니다. 아래의 경우, 부가적인 정보를 알리는 인용문입니다.

<div align="center">
  <img src="https://github.com/user-attachments/assets/03f1e88b-9036-43f3-920b-df702274ca03#gh-light-mode-only" width="75%" height="auto" />
  <img src="https://github.com/user-attachments/assets/663a2696-3f03-41db-bec0-7c1c98ff507f#gh-dark-mode-only" width="75%" height="auto" />
</div>

인용문의 종류는 4가지이며, `className`으로 종류를 구분합니다.

<div align="center">
  <img src="https://github.com/user-attachments/assets/194b22a5-852d-4e3e-bde4-9b5bba105651#gh-light-mode-only" width="75%" height="auto" />
  <img src="https://github.com/user-attachments/assets/6b418fb8-d99a-4853-9e32-152b7010533a#gh-dark-mode-only" width="75%" height="auto" />
</div>

위의 경우, 다음과 같이 작성합니다:

```mdx
<Blockquote className="danger">
    해당 내용을 알아차리지 않으면 위험할 수 있습니다.
</Blockquote>

<Blockquote className="warning">
    해당 내용을 준수하기를 권장합니다.
</Blockquote>

<Blockquote className="info">
    해당 내용은 추가적으로 알아두면 좋은 정보입니다.
</Blockquote>

<Blockquote>
    해당 내용은 인용문입니다.
</Blockquote>
```

한 문서 전체에 대한 알림의 경우, 문서의 처음 섹션 앞에 섹션을 추가해 인용문을 사용합니다. 가령

<div align="center">
  <img src="https://github.com/user-attachments/assets/f10bc365-e755-4a64-bebf-b04e15d90ce7#gh-light-mode-only" width="75%" height="auto" />
  <img src="https://github.com/user-attachments/assets/447aea82-c8d1-464a-ab8e-cffc598ad409#gh-dark-mode-only" width="75%" height="auto" />
</div>

위의 경우, 다음과 같이 작성합니다:

```mdx
<Section>
    <Blockquote className="warning">
        이 레거시 API는 더 이상 권장되지 않습니다. 새로운 프로젝트에서는 사용을 피하고, 가능한 경우 API2로 마이그레이션하는 것이 좋습니다.
    </Blockquote>
</Section>
<Section>
    ## 레거시 API
    
    카카오톡봇 개발에 사용되는 내장 API는 두 가지가 있어요. 하나는 지금 이 편에서 다룰 **레거시 API**이고, 다른 하나는 다음 편에서 알아볼 **API2**라는 것이죠. \
    레거시 API는 카카오톡봇 초창기부터 지원해오고 있는 내장 API예요. 등장한지 오래되었지만 일부에서는 사용 중인 API이죠.
    
    일단 레거시 API의 객체부터 알아보도록 합시다!
</Section>
```
