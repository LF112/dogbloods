import React from 'react'
import styled from 'styled-components'
//[ package ]

import LOGO from 'components/global/Logo'
//[ assets ]

import GameName from './GameName'
import Menu from './Menu'
//[ components ]

//=> DOM
export default () => {
	return (
		<Page>
			<header>
				<LOGO />
			</header>
			<Main>
				<div>
					<GameName />
					<Menu />
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
