import Link from 'next/link';
import React from 'react';

function BasicLayout({ children }) {
	return (
		<main>
			<nav>
				<Link href="/">Product</Link> |{' '}
				<Link data-cy="cart-link" href="/cart">
					Cart
				</Link>
			</nav>
			<div>{children}</div>
		</main>
	);
}

export default BasicLayout;
