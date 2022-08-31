import React from 'react'
import styled from 'styled-components'
//[ package ]

import Background from 'components/global/Background'
//[ components ]

//=> Main Component
export default () => {
	return (
		<Main>
			<Background />
		</Main>
	)
}

//=> Style Component
const Main = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
