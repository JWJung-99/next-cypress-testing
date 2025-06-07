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

## 6. 실전 프로젝트 - Part 1

### 실전 프로젝트

- 실전 프로젝트에서는 아래 이미지와 같은 상품 목록 페이지에 대한 테스트 코드를 작성한다.

  |                                                   상품 목록 페이지                                                    |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="300" alt="image" src="https://github.com/user-attachments/assets/29383fd7-9b31-4b31-9c4a-9ba6e84b3735" /> |

### 첫 번째 테스트 코드 작성

- 먼저 어떤 것을 테스트할지 **테스트 시나리오**를 작성한다.

  - **테스트 시나리오**: 사용자 관점에서 발생하는 동작과 하나의 플로우
  <br />
  
  > ① 페이지에 진입했을 때 상품들이 화면에 잘 표시되어야 한다.

  - `/cypress/e2e` 폴더 내부에 `product-page.cy.js`라는 테스트 파일을 생성한다. 파일 이름은 소문자로 작성하며, 두 단어 이상은 하이픈(-)으로 연결한다.

    |                                                   상품 목록 페이지                                                    |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="200" alt="image" src="https://github.com/user-attachments/assets/dd60d4a3-5288-4fff-a283-a0cad323e153" /> |

  - 상품 목록 컴포넌트에서 상품(item)에 cypress 테스트 ID를 부여한다.

    ```jsx
    {
      products &&
        products.map(({ imageUrl, name, id }, index) => {
          return (
            <li data-cy="product-item" className={styles.item} key={index}>
              <Link href={`/products/${id}`}>
                <div>
                  <Image src={imageUrl} width={300} height={300} alt={name} />
                </div>
                <div>{name}</div>
              </Link>
            </li>
          );
        }
      );
    }
    ```

  - 페이지에 진입했을 때 `product-item`이라는 값이 존재하는지 확인한다.

    - `should`: 받아온 요소가 "꼭 어떤 요소여야 한다"라는 api

      - 다양한 옵션이 있는데, 여기서는 **"화면에 있어야 한다"**라는 의미의 `be.visible`을 사용한다.

    ```js
    describe('상품 목록 페이지', () => {
      // 첫 번째 테스트 시나리오
      it('페이지에 진입했을 때 상품 목록이 표시된다.', () => {
        cy.visit('http://localhost:3000');
        cy.getByCy('product-item').should('be.visible');
      });
    });
    ```

  - 테스트 실행 결과는 다음과 같다.

    |                                                   테스트 실행 결과                                                    |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="500" alt="image" src="https://github.com/user-attachments/assets/997270d5-0571-42ac-86f8-a56702a5bc77" /> |


### 테스트 코드 설계 방법 팁

- TDD: 테스트 주도 개발 (Test Driven Development)

  - 테스트 코드를 설계할 때 기능을 모두 구현한 다음에 테스트 코드를 작성하는 것이 아니라 **먼저 테스트 코드를 작성한 다음에 기능을 구현**하는 방법

    1. 위의 예시에서, 컴포넌트 개발 전에는 페이지에 어떤 요소도 존재하지 않으므로 `should` 옵션을 `not.be.visible`로 설정한다.

    2. 컴포넌트와 기능이 개발되고 나면 **1) 테스트 케이스는 실패할 것이므로** `should` 옵션을 `be.visible`로 변경한다.

  - 이처럼 실패하는 케이스에 대한 테스트 코드를 설계한 후 기능들을 붙이면서 그 테스트 코드가 성공하게끔 바꿔나가는 방식을 TDD라고 한다.

  - **단점**

    - 현실적이지 못하고 실용적이지 않다.

      - 빠르게 비즈니스 모델을 입증/검증해야 하는 입장에서, 테스트까지 겸하며 진행하기에는 속도감이 떨어지고 전반적인 사이클이 길어지게 되어 무리가 갈 것이다.

    - 또한 빠르게 사용자 피드백을 반영해 유기적으로 서비스를 바꿔 나가야하는 입장에서 테스트 코드가 발목을 잡아 속도를 낮출 수 있다.

    - 따라서 테스트 코드를 언제 써야 하는지에 대한 판단도 굉장히 중요하다.

- `should` 옵션을 `not.be.visible`로 변경하면 어떤 문제가 발생하는지 확인한다.

  - 테스트 예상 결과가 옳지 않을 때는 다음과 같이 에러를 통해 어떤 문제가 있는지 알려준다.

    - 현재 상품 목록이 이미 존재하는 상태인데 `not.be.visible`로 예상하고 있어 오류가 발생하는 것을 확인할 수 있다.

    |                                                   테스트 실행 오류                                                    |
    | :-------------------------------------------------------------------------------------------------------------------: |
    | <img width="500" alt="image" src="https://github.com/user-attachments/assets/7b55046e-5bec-4b40-bf34-80061f56f001" /> |


### baseUrl 설정과 테스트 실행 명령어 팁

- 루트 폴더의 `cypress.config.js` 파일로 이동한다.

  |                                                  `cypress.config.js`                                                  |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="200" alt="image" src="https://github.com/user-attachments/assets/e6e61a6d-e7af-41a0-b63d-49e5bcb0c118" /> |

- `e2e` 하위에 다음과 같이 `baseUrl`을 지정하면, 매번 테스트 코드에서 `baseUrl`을 치는 부분이 필요 없어지고 `/` 하나만 지정하면 된다.

  ```js
  module.exports = defineConfig({
    e2e: {
      baseUrl: 'http://localhost:3000',
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  });
  ```

- 이제 테스트 코드에서 `baseUrl`을 직접 입력한 부분을 제거하고 `/`만 지정해도 `http://localhost:3000`으로 이동할 것이다.

  ```js
  describe('상품 목록 페이지', () => {
    // 첫 번째 테스트 시나리오
    it('페이지에 진입했을 때 상품 목록이 표시된다.', () => {
      cy.visit('/');
      cy.getByCy('product-item').should('be.visible');
    });
  });
  ```

- 테스트 실행 결과는 다음과 같다.

  |                                                   테스트 실행 결과                                                    |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="image" src="https://github.com/user-attachments/assets/796ee06d-d5dd-4b03-ae24-f55246eeb38b" /> |

### 두 번째 테스트 코드 작성

- 두 번째 테스트 시나리오를 작성한다.

  > ② 내비게이션 바의 링크를 클릭하면 해당 페이지로 이동한다.

  - 장바구니 링크 요소에 cypress 테스트 ID를 부여한다.

    ```jsx
    <Link data-cy="cart-link" href="/cart">
      Cart
    </Link>
    ```

  - 장바구니 링크를 불러와서 링크를 클릭하면 해당 페이지로 이동하는지 테스트한다.

    - `cy.url()`: 현재 페이지의 URL을 가져오는 api
    - `should('include', '/cart')`: URL이 `/cart`를 포함하는지 확인(assertion)한다.

    ```js
    // 두 번째 테스트 시나리오
    it('내비게이션 바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다.', () => {
      // prepare (준비)
      // cy.visit();

      // action (사용자 인터렉션)
      cy.getByCy('cart-link').click();

      // assertion (보장)
      cy.url().should('include', '/cart');
    });
    ```

- 테스트 실행 결과는 다음과 같다.

  |                                                   테스트 실행 결과                                                    |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="image" src="https://github.com/user-attachments/assets/6a894562-d347-4388-9471-f15e5a0f5208" /> |

### 두 번째 테스트 코드의 커버리지 높이기

- 두 번째 테스트 코드를 작성한 구간은 사실상 링크의 동작만을 검증하고 있다.

  ⇒ **장바구니 UI가 떴는지 안 떴는지 검증하지 않아** 테스트 커버리지가 낮다.

- 장바구니 페이지로 이동했을 때 **장바구니 페이지**라는 헤더가 화면에 표시된다면 페이지의 요소가 어느 정도 그려졌다고 판단할 수 있을 것이다. 따라서 테스트 코드를 추가한다.

  > ②-1 페이지로 이동했을 때 해당 페이지의 헤더가 화면에 표시된다.

  - 장바구니 페이지의 헤더에 cypress 테스트 ID를 부여한다.

    ```jsx
    <h1 data-cy="cart-header">장바구니 페이지</h1>
    ```

  - 장바구니 페이지로 이동했을 때 장바구니 헤더가 화면에 잘 표시되는지 테스트한다.

    ```js
    cy.getByCy('cart-header').should('be.visible');
    ```

  - 테스트 실행 결과는 다음과 같다. `assertion`이 추가되어 테스트 코드의 커버리지가 높아진 것을 확인할 수 있다.

    |                                                    테스트 실행 결과                                                    |
    | :--------------------------------------------------------------------------------------------------------------------: |
    | <img width="500" alt="image" src="https://github.com/user-attachments/assets/b8d2be6c-b378-4499-88ac-bb458084f494" /> |

### 테스트 코드의 적절한 assertion 개수

- 테스트 코드의 하나의 시나리오에는 하나의 assertion만 추가하는 것을 권장한다.

  - 위의 예시에서는 URL과 헤더를 모두 검증했지만, 사실 `cart-header`가 잘 렌더링되었다는 것이 확인된다면 URL은 당연히 검증되었다고 볼 수 있다.

  **⇒ URL이 바뀌었다고 해서 페이지가 제대로 렌더링이 되었는지는 검증할 수 없지만 페이지의 UI가 렌더링 되었다면 URL이 잘 변경된 것은 검증할 수 있다.**

### 세 번째 테스트 코드 작성

- 세 번째 테스트 시나리오를 작성한다.

  > ③ 목록을 클릭했을 때 상세 페이지로 이동한다.

  - 상품(item) 요소를 불러와서 링크를 클릭하면 해당 상품의 상세 페이지로 이동하는지 테스트한다.

    - `cy.getByCy('product-item')` api를 이용하면 상품 목록에 있는 상품을 모두 검색해서 불러오기 때문에 배열에 담길 수도 있다. 따라서 첫 번째 DOM 요소만 선택한다.

      - `first()`: 불러온 여러 요소 중 첫 번째 요소만 선택한다.

      <br />

    ```js
    // 세 번째 테스트 시나리오
    it('상품 목록의 아이템을 클릭하면 상품 상세 페이지로 이동한다.', () => {
      // action
      cy.getByCy('product-item').first().click();

      // assertion
      cy.url().should('include', '/products/');
    });
    ```

    - `product-header`를 상품 목록 페이지와 상품 상세 페이지에서 공통으로 사용하고 있어 UI를 이용한 검증 과정을 이용하지 않았다.(테스트 코드는 최대한 간단하게 작성하는 것이 중요하기 때문이다.)

- 테스트 실행 결과는 다음과 같다.

  |                                                   테스트 실행 결과                                                    |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="image" src="https://github.com/user-attachments/assets/7d399936-bde8-4e25-a9c2-7a3705790b49" /> |

---

## 7. 실전 프로젝트 - Part 2

### 상품 상세 페이지 첫 번째 테스트 코드 작성

> ① 상품 상세 페이지로 이동하면 상품의 이름과 가격이 정상적으로 표시된다.

- 상품 상세 페이지에 있는 요소에 cypress 테스트 ID를 부여한다.

  ```jsx
  <div>
    <Image data-cy="product-image" src={imageUrl} width={250} height={250} alt={name} />
  </div>
  <div className={styles.description}>
    <p data-cy="product-name">{name}</p>
    <p data-cy="product-price">{price}</p>
    <button onClick={addCart}>장바구니에 담기</button>
  </div>
  ```

- 테스트 코드를 작성한다.

  ```js
  describe('상품 상세 페이지', () => {
    it('상품 상세 페이지로 이동하면 상품의 이름과 가격이 정상적으로 표시된다.', () => {
      // prepare & action
      cy.visit('/products/0');

      // assertion
      cy.getByCy('product-image').should('be.visible');
      cy.getByCy('product-name').should('be.visible');
      cy.getByCy('product-price').should('be.visible');
    });
  });
  ```

- 테스트 실행 결과는 다음과 같다.

  |                                                   테스트 실행 결과                                                    |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="image" src="https://github.com/user-attachments/assets/f0dc1b5d-eb39-4056-a9a7-e25cf78edccc" /> |

### 상품 상세 페이지 두 번째 테스트 코드 작성 - 시스템 alert

> ② 상품을 장바구니에 추가했을 때 시스템 alert가 잘 나타나는지 확인한다.

- "장바구니에 담기" 버튼에 cypress 테스트 ID를 부여한다.

  ```jsx
  <button data-cy="cart-button" onClick={addCart}>
    장바구니에 담기
  </button>
  ```

- "장바구니에 담기" 버튼을 클릭 시뮬레이션 코드를 작성한다.

  - `then()`: 앞 동작이 실행되고 나면 연결해서 실행할 동작에 대해 정의하는 cypress api ([공식문서](https://docs.cypress.io/api/commands/then))

    ```js
    cy.getByCy('cart-button').click().then();
    ```

    - 클릭해서 나온 결과물에 대한 요소 접근이 필요할 때 사용한다.

  ```js
  cy.getByCy('cart-button').click();
  ```

- [공식문서](https://docs.cypress.io/api/cypress-api/catalog-of-events#Window-Alert)를 참고하여 시스템 alert 관련 cypress 코드를 작성한다.

  - 테스트 코드 실행 전 `stub`을 실행하는 것이 좋다.

  ```js
  it('장바구니에 담기 버튼을 클릭하면 "장바구니에 추가됨"이 표시된다.', () => {
    // prepare
    const stub = cy.stub();
    cy.on('window:alert', stub);

    // action
    cy.getByCy('cart-button')
      .click()
      .then(() => {
        // assertion
        expect(stub.getCall(0)).to.be.calledWith('장바구니에 추가됨');
    });
  });
  ```

- 테스트 실행 결과는 다음과 같다.

  |                                                   테스트 실행 결과                                                    |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="image" src="https://github.com/user-attachments/assets/0729874c-a1f2-406d-8a2e-d955dd73f99c" /> |

### 상수화

- 컴포넌트에서 작성한 코드와 테스트에서 작성한 코드가 하나라도 다를 경우 에러가 발생한다.

  |                                            **"."** 하나 차이로 발생한 에러                                            |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="image" src="https://github.com/user-attachments/assets/066c947b-5074-42e0-b279-3ed1188317d5" /> |

- 컴포넌트의 외부에서 해당 메시지를 상수화하여 `export`한다.

  ```jsx
  import React from 'react';
  ...
  export const ALERT_MESSAGE = '장바구니에 추가됨';

  function ProductDetail({ product }) {
    ...
    const addCart = async () => {
      try {
        const { data } = await createCartItem(product);
        // alert(`${data.name}가 장바구니에 담겼습니다`);
        alert(ALERT_MESSAGE);
        router.push('/cart');
      } catch (error) {
        console.log(error);
      }
    };
    ...
  }
  ```

- 테스트 코드에서 해당 상수를 불러온다.

  ```jsx
  // action
  cy.getByCy('cart-button')
    .click()
    .then(() => {
      // assertion
      expect(stub.getCall(0)).to.be.calledWith(ALERT_MESSAGE);
    });
  ```

### 세 번째 테스트 코드 작성

- 테스트 코드 실행 팁

  - `it.only`: cypress가 `only` 키워드가 있는 테스트 시나리오만 실행한다.
  - `it.skip`: cypress가 `skip` 키워드가 있는 테스트 시나리오는 실행하지 않는다.

  ⇒ 지정한 테스트 코드를 실행/건너뛰기 하기 때문에 다른 테스트 시나리오 실행으로 인한 데이터 오염을 방지할 수 있다.

> ③ 상품을 장바구니에 추가했을 때 장바구니 페이지로 잘 이동하는지 확인한다.

- 테스트 코드를 작성한다.

  ```js
  // 세 번째 테스트 시나리오
  it.only('장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다.', () => {
    // action
    cy.getByCy('cart-button').click();

    // assertion
    cy.url().should('include', '/cart');
  });
  ```

- `it.only`를 사용했기 때문에 해당 테스트 시나리오만 실행된 것을 cypress UI에서 확인할 수 있다.

  |                                                   테스트 실행 결과                                                    |
  | :-------------------------------------------------------------------------------------------------------------------: |
  | <img width="500" alt="image" src="https://github.com/user-attachments/assets/c143f988-6138-4661-a3e7-6a4c19923c75" /> |

### 네 번째 테스트 코드 작성

- 장바구니 페이지에 대한 테스트 코드를 작성한다.

  > ① 장바구니 페이지에 접속했을 때 상품 목록이 표시된다.

  ```js
  // 첫 번째 테스트 시나리오
  it('페이지로 진입했을 때 상품 목록이 표시된다.', () => {
    // assertion
    cy.getByCy('cart-image').should('be.visible');
    cy.getByCy('cart-name').should('be.visible');
    cy.getByCy('cart-price').should('be.visible');
  });
  ```

  > ② 삭제하기 버튼을 눌렀을 때 상품이 삭제된다.

  - `then` 구문을 사용하지 않고 다음과 같이 코드를 작성하면 문제가 발생한다.

    ```js
    const cartLength = cy.getByCy('cart-list').length;

    cy.getByCy('cart-delete-button')
      .first()
      .click()
      .then(() => {
        cy.getByCy('cart-amount').contains(cartLength - 1);
      });
    ```

    - 그 이유는 `cy.getByCy('cart-list')`가 비동기 명령이므로, cypress 명령어가 즉시 값을 반환하지 않고 체인 형태로 실행 큐에 등록하기 때문에 length 같은 동기 JavaScript 메서드를 바로 호출하면 undefined 또는 오류가 발생하는 것이다.

    - 에러 내용

      |                                                   테스트 실행 결과                                                    |
      | :-------------------------------------------------------------------------------------------------------------------: |
      | <img width="500" alt="image" src="https://github.com/user-attachments/assets/2a14177f-ebeb-4037-ad6a-f12e01c32018" /> |

  - 따라서 `then` 구문 안에서 비동기 명령을 처리한다.

    ```js
    // 두 번째 테스트 시나리오
    it('삭제하기 버튼을 클릭하면 장바구니 목록의 총 수량이 1 감소한다.', () => {
      cy.getByCy('cart-list').then(($list) => {
        const cartLength = $list.length;

        cy.getByCy('cart-delete-button')
          .first()
          .click()
          .then(() => {
            cy.getByCy('cart-amount').contains(cartLength - 1);
          });
      });
    });
    ```

    - 테스트 실행 결과는 다음과 같다.

      |                                                   테스트 실행 결과                                                    |
      | :-------------------------------------------------------------------------------------------------------------------: |
      | <img width="500" alt="image" src="https://github.com/user-attachments/assets/fd0dc781-bc41-498e-b37d-adbbe2a9036f" /> |

