import React from 'react'
import styled from 'styled-components'
//[ package ]

import LOGO from 'components/global/Logo'

//=> DOM
export default () => {
	return (
		<Page>
			<header>
				<LOGO />
			</header>
			<Main>
				<div>
					<GameName>
						<h1>丧家犬与落水狗的冒险剧</h1>
						<h2>DOG × BLOODS</h2>
					</GameName>
				</div>
			</Main>
		</Page>
	)
}

//=> Style
const Page = styled.main`
	width: 100vw;
	height: calc(100vh - 16%);
	> header {
		padding: 5% 5% 0;
		user-select: none;
	}
`

const Main = styled.main`
	width: 100%;
	height: calc(100% - 10% - 52px);
	padding: 10px 5% 10%;
	display: flex;
	justify-content: flex-end;
	> div {
		width: 65%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`

const GameName = styled.div`
	> * {
		font-family: 'REEJI-PinboGB';
		text-shadow: rgba(6, 7, 25, 50%) 0.05em 0.05em 0px;
	}
	> h1 {
		color: rgba(255, 255, 255, 0.65);
		font-size: 3rem;
		font-weight: 400;
	}
	> h2 {
		color: rgba(255, 255, 255, 0.55);
		font-size: 2rem;
		/* display: initial;
		transition: all 0.5s linear;
		animation: animate 5s linear infinite;
		background-size: 100px 100px;
		background-image: linear-gradient(
			to right bottom,
			#21252b 0%,
			#21252b 25%,
			#ffe92c 25%,
			#ffe92c 50%,
			#21252b 50%,
			#21252b 75%,
			#ffe92c 75%,
			#ffe92c 100%
		);
		padding: 0 4px 0 2px; */
	}
`
