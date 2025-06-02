// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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
