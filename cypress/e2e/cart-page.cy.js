describe('장바구니 페이지 테스트 코드', () => {
	beforeEach(() => {
		// prepare
		cy.visit('/cart');
	});

	// 첫 번째 테스트 시나리오
	it('페이지로 진입했을 때 상품 목록이 표시된다.', () => {
		// assertion
		cy.getByCy('cart-image').should('be.visible');
		cy.getByCy('cart-name').should('be.visible');
		cy.getByCy('cart-price').should('be.visible');
	});

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
});
