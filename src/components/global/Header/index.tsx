import React from 'react'
import styled from 'styled-components'
//[ package ]

import LOGO from 'components/global/Logo'
//[ components ]

//=> DOM
export default () => {
	return (
		<Header>
			<LOGO />
		</Header>
	)
}

//=> Style
const Header = styled.header`
	padding: 5% 5% 0;
	user-select: none;
`
