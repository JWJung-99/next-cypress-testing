# Next.js + Cypress 테스팅 실습

## 1. 프론트엔드 테스팅

### 왜 테스트 코드가 필요할까?

- 모든 시스템을 사람이 일일이 직접 테스트하는 것은 불가능하다.
- 규모가 작은 시스템은 테스팅이 필요 없을 수도 있지만, 규모가 커질수록 테스트할 수 있는 범위의 한계와 테스트 시간이 늘어난다.

### 무엇을 테스트 해야할까?

- Front-end 개발자는 사용자 관점의 인터렉션과 기능 동작을 테스트 해야한다.

### 어떻게 테스트 해야할까?

- 대중적인 라이브러리들을 사용한다.
- Unit Test: **React Testing Library** 등
- E2E Test: **Cypress** 등

### 왜 Cypress일까?

- Front-end 개발 E2E 분야에서 가장 대중적이고 안정적인 라이브러리이다.
- [문서화](https://docs.cypress.io/)가 잘 되어 있고, 참고할 수 있는 레퍼런스가 많다.

### E2E가 무엇일까?

- **E2E**: End-to-End 테스트를 의미한다.

  |                                               프로젝트 폴더                                               |
  | :-------------------------------------------------------------------------------------------------------: |
  | <img width="500" src="https://github.com/user-attachments/assets/d61ebc08-7157-4660-a402-152a7c20cf0b" /> |

  - **Unit Test**

    테스트 코드를 작성하는 비용이 가장 작다.

    ⇒ 테스트 코드 작성에 시간이 적게 들고 쉽게 작성할 수 있다.

  - **Integration Test**

    Unit Test 몇 개를 조합하여 하나의 기능을 점검하는 측면이다.

  - **End-to-End Test**

    서비스의 최종 품질을 보장하기 위해 사용하며, 가장 비용이 많이 들어간다.

    ⇒ 테스트 코드 작성에 시간이 많이 들고 작성하기 어렵다.

---

## 2. 테스팅 실습 환경 구성

> **환경** : Next.js + Cypress ([공식문서](https://nextjs.org/docs/app/guides/testing/cypress))

### 프로젝트에 cypress 설치

- `devDependencies`에 cypress를 설치한다.

  ```bash
  npm install -D cypress

  # or

  yarn add -D cypress

  # or

  pnpm install -D cypress
  ```

- package.json 파일의 `scripts`에 다음과 같이 커스텀 명령어를 추가한다.

  ```json
  {
  	"scripts": {
  		"dev": "next dev",
  		"build": "next build",
  		"start": "next start",
  		"lint": "next lint",
  		"cypress:open": "cypress open"
  	}
  }
  ```

### cypress 실행

- 터미널에서 script에 추가한 명령어를 입력해 cypress를 실행한다.

  ```bash
  npm run cypress:open
  ```

  |                                                   cypress 실행 결과                                                   |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="Image" src="https://github.com/user-attachments/assets/d2cf7003-96b0-4fc8-b824-16409b408895" /> |

- **E2E Testing을 선택**하고 테스트할 브라우저를 선택한다.

  |                                                     브라우저 선택                                                     |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="Image" src="https://github.com/user-attachments/assets/29ef270b-512f-446f-a7b8-6ce3699532d5" /> |

- cypress 창을 닫고 프로젝트 폴더로 돌아오면, cypress 폴더와 cypress 설정 파일이 생성된 것을 확인할 수 있다.

  |                                                     프로젝트 폴더                                                     |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="150" alt="Image" src="https://github.com/user-attachments/assets/da448202-a32c-41cf-94c9-b25a8305e2fd" /> |

---

## 3. 테스팅 시작하기

### 첫 번째 테스트 코드 작성

- 생성된 cypress 폴더 안에 **e2e** 폴더를 생성하고 이 안에 테스트 코드를 작성한다.

  - 파일 이름은 `[파일 이름]/cy.js` 형태이다.
    - `cy.js`: JavaScript로 작성된 cypress 코드를 의미한다.

  <br />

  ```js
  describe("홈페이지 테스트 코드", () => {
    it('"/"로 진입하면 페이지가 정상적으로 표시된다.', () => {
      cy.visit("http://localhost:3000/");
    });
  });
  ```

  - `describe`: 테스트 그룹
  - `it`: 테스트 시나리오

### cypress 실행

- cypress를 실행하면 cypress가 작성한 테스트 파일을 인식하는 것을 확인할 수 있다.

  |                                                   cypress 실행 결과                                                   |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="Image" src="https://github.com/user-attachments/assets/d672a5c9-12c9-4876-9ae9-e1b12159ac97" /> |

- 테스트 파일을 선택하면 다음과 같이 테스트가 정상적으로 실행되는 모습을 확인할 수 있다.

  |                                                   테스트 실행 결과                                                    |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="Image" src="https://github.com/user-attachments/assets/e4338a83-0f94-4f6e-8ece-381c7aa277ac" /> |

### cypress UI

- cypress의 UI는 다음과 같다.

  - Test Body의 각 단계에 마우스를 호버하면 각 단계별 결과를 확인할 수 있도록 화면을 제어한다.
  - 우측에는 테스트 결과를 확인할 수 있는 미리보기도 제공한다.
  - Chrome 브라우저에서 제공하는 개발자 도구 역시 사용할 수 있다. [command(⌘) + option(⌥) + i]

  |                                                   테스트 성공 시 UI                                                   |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="Image" src="https://github.com/user-attachments/assets/639c3071-f137-4027-9e77-9fa6a8f83a52" /> |

- 만약 에러가 발생한다면, cypress는 에러가 발생한 위치와 그 이유를 알려준다.

  |                                                    에러 발생 시 UI                                                    |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="Image" src="https://github.com/user-attachments/assets/25eb7b2f-0a7a-4c78-8231-fc66ac7013a7" /> |

### cypress eslint 환경 구성

> **참고** : [Cypress ESLint Plugin Github Repository](https://github.com/cypress-io/eslint-plugin-cypress)

- cypress eslint plugin을 설치한다.

  > **⚠️ 중요** Cypress ESLint Plugin은 ESLint V9 이상만 지원하기 때문에 이전 버전이라면 **반드시** 업데이트가 필요하다.

  ```bash
  npm install eslint eslint-plugin-cypress --save-dev
  ```

- `eslint.config.*js` 파일의 상단에 `pluginCypress`를 `import` 한다.

  ```js
  import pluginCypress from 'eslint-plugin-cypress/flat';
  ```

- recommended rules를 추가하기 위해 다음 코드를 `eslint.config.*js` 파일에 추가한다.

  ```js
  import pluginCypress from 'eslint-plugin-cypress/flat';

  export default [
    ...
    pluginCypress.configs.recommended,
    ...
    {
      rules: {
        'cypress/no-unnecessary-waiting': 'off'
      }
    }
  ]
  ```
