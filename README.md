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

---

## 4. 미니 프로젝트

### 간단한 Counter 앱 제작

- 테스트 코드 작성을 위해 간단한 Counter 컴포넌트를 생성한다.

  ```jsx
  const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
      setCounter(counter + 1);
    };

    const handleDecrease = () => {
      setCounter(counter - 1);
    };

    return (
      <div>
        <p>{counter}</p>
        <button type="button" onClick={handleIncrease}>
          +
        </button>
        <button type="button" onClick={handleDecrease}>
          -
        </button>
      </div>
    );
  };
  ```

### 첫 번째 테스트 코드 작성

> 🚨 E2E 테스트 코드를 작성할 때에는 작성한 코드 기반이 아니라 **사용자 관점에서 코드를 작성**해야 한다!!
> - 사용자 관점에서 작성된 테스트 시나리오에 집중한다.
> - 코드를 보고 정상적으로 동작하는지 확인하는 것이 **아니다**.
> - 사용자가 입력하고 인터렉션 했을 때 사용자가 기대하는 결과를 테스트 코드로 풀어내는 것이다.
> - 이 시뮬레이션을 자동화함으로써 **"서비스가 정상적으로 동작하는지 여러 명의 사용자가 확인한다"**는 관점에서 테스트 코드를 작성해야 한다.

<br />

- **cypress/e2e** 폴더 내부에 `counter.cy.js`라는 이름의 테스트 파일을 생성한다.

- 테스트 코드를 작성한다.

  ① 테스트를 위해 DOM 요소(Element)로 접근해야 하는데, 어떤 DOM 요소인지 명확히 하기 위해 `data-cy`라는 테스트용 ID를 부여한다.

  ```jsx
  <p data-cy="counter">{counter}</p>
  ```

  ② `cy.get()` 메서드를 사용하여 DOM 요소를 불러온다.

  - `cy.get(selector)`: 페이지에 있는 요소를 불러오는 cypress 메서드

    |                                                      `cy.get()`                                                       |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="500" alt="Image" src="https://github.com/user-attachments/assets/0cf3b338-cd1d-4c25-8e95-6b68a4f0488c" /> |

  - `data-cy`가 `counter`인 요소를 불러와서 해당 요소가 `0`을 가지고 있는지 확인한다.

    ```js
    cy.get('[data-cy=counter]').contains(0);
    ```

  - 전체 테스트 코드는 다음과 같다.

    ```js
    describe('Counter 앱', () => {
      // 첫 번째 테스트 시나리오 - 데이터가 정상적으로 표시되었는지
      it('페이지에 진입하면 Counter 앱이 정상적으로 실행된다: 0이 표시된다.', () => {
        cy.visit('http://localhost:3000');

        // 페이지에 있는 요소를 불러오는 cypress 메서드
        cy.get('[data-cy=counter]').contains(0);
      });
    });
    ```

    |                                                   테스트 실행 결과                                                    |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="500" alt="Image" src="https://github.com/user-attachments/assets/e433abe7-cd50-48d6-924b-3494240a54f5" /> |

### 두 번째 테스트 코드 작성

- 버튼 동작을 테스트하기 위한 테스트 코드를 작성한다.

  ① `counter` 요소와 마찬가지로, 버튼에도 `data-cy`라는 cypress를 위한 테스트용 ID를 부여한다.

  - 물론 기존의 `id` 속성을 이용해도 동일하게 동작하지만, 비즈니스 로직과도 겹칠 수 있기 때문에 테스트 코드 전용 ID를 부여하는 것이 공식문서에서 제시하는 Best-Practice이다.

    ```jsx
    <button type="button" data-cy="plus-button" onClick={handleIncrease}>
      +
    </button>
    <button type="button" data-cy="minus-button" onClick={handleDecrease}>
      -
    </button>
    ```

  ② `cy.click()` 메서드를 사용하여 요소의 클릭을 시뮬레이션 한다.

  - `cy.click()`: 페이지에 있는 요소의 클릭을 시뮬레이션 하는 cypress 메서드

    |                                                     `cy.click()`                                                      |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="500" alt="image" src="https://github.com/user-attachments/assets/e6345984-970d-47bf-a7b3-1f76798b7426" /> |

  - `data-cy`가 `plus-button`인 요소를 불러와서 요소의 클릭을 시뮬레이션 한다.

    ```js
    cy.get('[data-cy=plus-button]').click();
    ```

  - `counter` 요소의 데이터가 `1` 증가했는지 확인한다.

    ```js
    cy.get('[data-cy=counter]').contains(1);
    ```

  - 전체 테스트 코드는 다음과 같다. 마이너스 버튼의 시나리오도 플러스 버튼과 동일하다.

    ```js
    // 두 번째 테스트 시나리오 - 플러스 버튼을 누르면 데이터가 증가하는지
    it('플러스 버튼을 누르면 counter가 1 증가한다.', () => {
      cy.visit('http://localhost:3000');

      // 요소 클릭을 시뮬레이션 하는 cypress 메서드
      cy.get('[data-cy=plus-button]').click();
      cy.get('[data-cy=counter]').contains(1);
    });

    // 세 번째 테스트 시나리오 - 마이너스 버튼을 누르면 데이터가 감소하는지
    it('마이너스 버튼을 누르면 counter가 1 감소한다.', () => {
      cy.visit('http://localhost:3000');

      // 요소 클릭을 시뮬레이션 하는 cypress 메서드
      cy.get('[data-cy=minus-button]').click();
      cy.get('[data-cy=counter]').contains(-1);
    });
    ```

    |                                                   테스트 실행 결과                                                    |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="500" alt="image" src="https://github.com/user-attachments/assets/0133dabb-84e2-4241-9adb-5296a939880c" /> |

---

## 5. 커스텀 커맨드와 공통 훅

### 공통 훅으로 반복되는 코드 줄이기

- `beforeEach`를 사용해 반복되는 코드를 제거한다.

  - `beforeEach`: `describe`라는 테스트 그룹 내의 모든 코드를 실행하기 전에 `beforeEach` 내부의 코드가 실행된다.

    ```js
    beforeEach(() => {
      // 현재 그룹핑된 describe 안의 모든 테스트 코드가 실행되기 전에 실행하고 싶은 로직을 추가
      cy.visit('http://localhost:3000');
    });
    ```

  - 나머지 테스트 코드에서 공통으로 묶은 코드를 제거한다.

    ```js
    describe('Counter 앱', () => {
      beforeEach(() => {
        // 현재 그룹핑된 describe 안의 모든 테스트 코드가 실행되기 전에 실행하고 싶은 로직을 추가
        cy.visit('http://localhost:3000');
      });
    
      // 첫 번째 테스트 시나리오 - 데이터가 정상적으로 표시되었는지
      it('페이지에 진입하면 Counter 앱이 정상적으로 실행된다: 0이 표시된다.', () => {
        // 페이지에 있는 요소를 불러오는 cypress 메서드
        cy.get('[data-cy=counter]').contains(0);
      });
    
      // 두 번째 테스트 시나리오 - 플러스 버튼을 누르면 데이터가 증가하는지
      it('플러스 버튼을 누르면 counter가 1 증가한다.', () => {
        // 요소 클릭을 시뮬레이션 하는 cypress 메서드
        cy.get('[data-cy=plus-button]').click();
        cy.get('[data-cy=counter]').contains(1);
      });
    
      // 세 번째 테스트 시나리오 - 마이너스 버튼을 누르면 데이터가 감소하는지
      it('마이너스 버튼을 누르면 counter가 1 감소한다.', () => {
        // 요소 클릭을 시뮬레이션 하는 cypress 메서드
        cy.get('[data-cy=minus-button]').click();
        cy.get('[data-cy=counter]').contains(-1);
      });
    });
    ```

  - 테스트 실행 결과는 이전과 동일하다.

    |                                                   테스트 실행 결과                                                    |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="500" alt="image" src="https://github.com/user-attachments/assets/8c741b9a-6bda-46d8-970f-a64e973cefd7" /> |


### cypress 공통 훅

> **참고**: [cypress hooks 공식문서](https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests#Hooks)

```js
describe('Hooks', () => {
  before(() => {
    // runs once before all tests in the block
  });

  beforeEach(() => {
    // runs before each test in the block
  });

  afterEach(() => {
    // runs after each test in the block
  });

  after(() => {
    // runs once after all tests in the block
  });
});
```

- `before` : `describe` 내부의 모든 테스트 코드를 실행되기 전에 **한 번만** 실행하는 코드를 작성

- `beforeEach` : `describe` 내부의 **각각의** 테스트 코드를 실행하기 전에 **반복해서** 실행하는 코드를 작성

- `afterEach` : `describe` 내부의 **각각의** 테스트 코드를 실행한 후 **반복해서** 실행하는 코드를 작성

- `after` : `describe` 내부의 모든 테스트 코드를 실행한 후 **한 번만** 실행하는 코드를 작성

### cypress 커스텀 커맨드

> **참고**: [cypress 커스텀 커맨드 공식문서](https://docs.cypress.io/api/cypress-api/custom-commands)
>
> - `Cypress.Commands.add()`: 새로운 커스텀 커맨드를 추가하는 api
> - `Cypress.Commands.overwrite()`: 기존 api를 덮어써서 나만의 로직을 작성하는 api
>   - `overwrite`를 사용해 cypress에서 제공하는 api의 규격, 성질, 동작이 바뀐다면 예측 불가능한 코드가 될 수 있으므로 권장하지 않는다.
> - cypress 커스텀 커맨드를 이용해 주로 로그인 인증 등의 자동화가 주로 이루어진다.

- 현재 작성된 테스트 코드에서는 `data-cy`라는 부분이 계속해서 반복되고 있다.

  |                                                  반복되는 `data-cy`                                                   |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="300" alt="image" src="https://github.com/user-attachments/assets/005ad07b-4660-448b-a49f-f804b1ed3616" /> |

  - 간단한 애플리케이션이라면 괜찮겠지만, 애플리케이션이 커질수록 복잡하고 많은 요소들이 표현되고 인터렉션 또한 훨씬 많을 것이므로 `data-cy` 같은 테스트 ID가 테스트 코드에서 계속 반복된다면 굉장히 가독성이 떨어질 것이다.

- cypress 커스텀 커맨드를 이용해 효율적인 코드를 작성한다.

  - cypress를 처음 실행했을 때 생성된 **support** 폴더 아래에 `command.js`라는 파일이 존재한다.

    |                                             `/cypress/support/command.js`                                             |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="200" alt="image" src="https://github.com/user-attachments/assets/86e4c271-c94a-4bbf-bc53-215555284323" /> |

  - 반복적인 `data-cy` 사용을 줄이기 위한 api를 추가한다.

    - 요소에 부여한 테스트 ID를 `text`로 입력 받아 기존에 반복적으로 사용하던 `cy.get` api를 `return`한다.

      ```js
      Cypress.Commands.add('getByCy', (text) => {
        return cy.get(`[data-cy=${text}]`);
      });
      ```

    - 생성한 `getByCy` api로 테스트 코드의 `cy.get('[data-cy=테스트ID]')` 부분을 대체한다.

      ```js
      it('페이지에 진입하면 Counter 앱이 정상적으로 실행된다: 0이 표시된다.', () => {
        // before
        cy.get('[data-cy=counter]').contains(0);

        // after
        cy.getByCy('counter').contains(0);
      });
      ```

- 테스트가 정상적으로 동작하는 것을 확인할 수 있다.

  |                                                   테스트 실행 결과                                                    |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="image" src="https://github.com/user-attachments/assets/5b79670c-3da0-4bc2-af45-6952f63674ee" /> |

### 커스텀 커맨드 함수를 다룰 때 유의할 점

- 개발자 경험을 저하시킨다.

  - cypress에서 제공하는 api를 사용하면 다음과 같이 해당 요소에 맞는 api가 자동완성되며, api에 대한 설명 또한 확인할 수 있다.
    

    |                                                   cypress api 사용                                                    |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="300" alt="image" src="https://github.com/user-attachments/assets/cea9a93f-ccce-4863-b99e-34a1436c1d4f" /> |

  - 하지만 커스텀 커맨드를 이용할 경우 찾은 요소에 활용할 수 있는 api를 확인할 수 없다.

    - 이는 `getByCy` api의 반환 타입이 설정되지 않았기 때문인데, TypeScript 기반의 cypress 환경에서 타입을 지정하면 활용할 수 있다.
    <br />
    
    |                                                  커스텀 커맨드 사용                                                   |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="300" alt="image" src="https://github.com/user-attachments/assets/07078cd4-c300-40aa-bff8-ece3163346a4" /> |

- 커스텀 커맨드가 어떤 역할을 하는지 잘 드러나지 않는다.

  - 이는 실무에서 지양해야 하는 코드 작성법이며, 의도를 담아서 작성한 코드에는 주석을 달아주는 것이 중요하다.

  - 작성한 커스텀 커맨드에 JSDoc 방식으로 주석을 달아 해당 코드가 어떤 역할을 하며, 어떤 매개변수를 필요로 하는지 등을 작성하는 것이 좋다.

    ```js
    /**
     * @description data-cy로 설정된 요소를 쉽게 찾을 수 있는 커스텀 api
     * @param {string} text - `data-cy` 값으로 사용할 요소의 테스트 ID
     * @returns {Cypress.Chainable} - 선택된 DOM 요소를 반환
     *
     * @example
     * cy.getByCy('plus-button').click();
     */
    Cypress.Commands.add('getByCy', (text) => {
      return cy.get(`[data-cy=${text}]`);
    });
    ```

---
