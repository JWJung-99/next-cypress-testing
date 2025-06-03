describe('상품 목록 페이지', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	// 첫 번째 테스트 시나리오
	it('페이지에 진입했을 때 상품 목록이 표시된다.', () => {
		cy.getByCy('product-item').should('be.visible');
	});

	// 두 번째 테스트 시나리오
	it('내비게이션 바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다.', () => {
		// prepare (준비)
		// cy.visit();

		// action (사용자 인터렉션)
		cy.getByCy('cart-link').click();

		// assertion (보장)
		cy.url().should('include', '/cart');
		cy.getByCy('cart-header').should('be.visible');
	});

	// 세 번째 테스트 시나리오
	it('상품 목록의 아이템을 클릭하면 상품 상세 페이지로 이동한다.', () => {
		// action
		cy.getByCy('product-item').first().click();

		// assertion
		cy.url().should('include', '/products/');
	});
});
