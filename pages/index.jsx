import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/ProductList';
import BasicLayout from '@/layouts/BasicLayout';
import { useState } from 'react';

function Counter() {
	const [counter, setCounter] = useState(0);

	const handleIncrease = () => {
		setCounter(counter + 1);
	};

	const handleDecrease = () => {
		setCounter(counter - 1);
	};

	return (
		<div>
			<p data-cy="counter">{counter}</p>
			<button type="button" data-cy="plus-button" onClick={handleIncrease}>
				+
			</button>
			<button type="button" data-cy="minus-button" onClick={handleDecrease}>
				-
			</button>
		</div>
	);
}

// "http://localhost:3000"에 진입했을 때 보이는 페이지 컴포넌트
function ProductPage() {
	const headerTitle = '상품 목록 페이지';

	return (
		<BasicLayout>
			{/* <Counter /> */}
			<ProductHeader title={headerTitle} />
			<ProductList />
		</BasicLayout>
	);
}

export default ProductPage;
