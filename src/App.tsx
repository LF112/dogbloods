import React from 'react'
import styled from 'styled-components'
import { HashRouter as Router } from 'react-router-dom'
//[ package ]

import Header from 'components/global/Header'
import Page from 'pages'
import Loading from 'pages/Loading'
import Footer from 'components/global/Footer'
import Mask from 'components/global/Mask'
//[ components ]

//=> Main Component
export default () => {
	return (
		<Container>
			<Mask style={{ top: 0 }} />
			<Main>
				<Router>
					<Header />
					<Page />
					<Footer />
				</Router>
			</Main>
			<Loading />
			<Mask style={{ bottom: 0 }} />
		</Container>
	)
}

//=> Style Component
const Container = styled.main`
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`

const Main = styled.main`
	position: relative;
	width: 100vw;
	height: calc(100vh - 16%);
	display: flex;
	align-items: center;
`
