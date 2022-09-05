import React from 'react'
import styled from 'styled-components'
//[ package ]

import Menu from 'components/global/Menu'
import Download from 'components/global/Download'
//[ components ]

//=> DOM
export default () => {
	return (
		<Footer>
			<Download />
			<Menu />
		</Footer>
	)
}

//=> Style
const Footer = styled.footer`
	width: 100%;
	height: 75px;
	padding: 0 5% 0;
	display: flex;
	align-items: center;
	justify-content: center;
`
