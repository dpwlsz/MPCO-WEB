/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css';

import React from 'react';

const HomePage = () => {
	// tailwindcss classes
	return (
		<div
			className={css`
				width: 100%;
				height: 100vh;
				background-color: red;
			`}
		>
			<h1
				className="wd
				text-4xl
				text-center
				text-blue-500
				font-bold
"
			>
				Hello mpco
			</h1>
		</div>
	);
};

export default HomePage;
