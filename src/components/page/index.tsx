import React from 'react'
import styled from 'styled-components'
//[ package ]

//=> DOM
export default () => {
	return (
		<Main>
			<header>
				<h1>丧家犬与落水狗的冒险剧</h1>
				<h2>DOG × BLOODS</h2>
			</header>
		</Main>
	)
}

//=> Style
const Main = styled.main`
	width: 100vw;
	height: calc(100vh - 16%);
	> header {
		padding: 5% 5% 0;
		user-select: none;
		> * {
			color: rgba(255, 255, 255, 0.55);
			font-family: 'REEJI-PinboGB';
			text-shadow: rgba(6, 7, 25, 50%) 0.05em 0.05em 0px;
		}
		> h1 {
			font-size: 28px;
			font-weight: 400;
		}
		> h2 {
			font-size: 20px;
		}
	}
`
