import React from 'react'
import styled from 'styled-components'
//[ package ]

import Background from 'components/global/Background'
import Header from 'components/global/Header'
import Page from 'components/page'
import Footer from 'components/global/Footer'
import { Mask } from 'components/global/Mask'
//[ components ]

//=> Main Component
export default () => {
	return (
		<Container>
			<Background />
			<Mask />
			<Main>
				<Header />
				<Page />
				<Footer />
			</Main>
			<Mask />
		</Container>
	)
}

//=> Style Component
const Container = styled.main`
	position: relative;
	width: 100vw;
	height: 100vh;
`

const Main = styled.main`
	width: 100vw;
	height: calc(100vh - 16%);
`
