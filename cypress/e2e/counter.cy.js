describe('Counter 앱', () => {
	// 첫 번째 테스트 시나리오 - 데이터가 정상적으로 표시되었는지
	it('페이지에 진입하면 Counter 앱이 정상적으로 실행된다: 0이 표시된다.', () => {
		cy.visit('http://localhost:3000');

		// 페이지에 있는 요소를 불러오는 cypress 메서드
		cy.get('[data-cy=counter]').contains(0);
	});
});
