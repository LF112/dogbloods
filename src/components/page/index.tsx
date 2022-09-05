import React from 'react'
import styled from 'styled-components'
//[ package ]

import GameName from './GameName'
//[ components ]

//=> DOM
export default () => {
	return (
		<Main>
			<div>
				<GameName />
			</div>
		</Main>
	)
}

//=> Style

const Main = styled.main`
	width: 100%;
	height: calc(87% - 127px);
	padding: 10px 5% calc(10% - 75px);
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
