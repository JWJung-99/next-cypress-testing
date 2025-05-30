describe('Counter 앱', () => {
	// 첫 번째 테스트 시나리오 - 데이터가 정상적으로 표시되었는지
	it('페이지에 진입하면 Counter 앱이 정상적으로 실행된다: 0이 표시된다.', () => {
		cy.visit('http://localhost:3000');

		// 페이지에 있는 요소를 불러오는 cypress 메서드
		cy.get('[data-cy=counter]').contains(0);
	});

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
});
