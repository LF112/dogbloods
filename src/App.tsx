import React from 'react'
import styled from 'styled-components'
//[ package ]

import Background from 'components/global/Background'
import Header from 'components/global/Header'
import Main from 'components/page'
import Footer from 'components/global/Footer'
//[ components ]

//=> Main Component
export default () => {
	return (
		<Page>
			<Background />
			<Header />
			<Main />
			<Footer />
		</Page>
	)
}

//=> Style Component
const Page = styled.main`
	position: relative;
	width: 100vw;
	height: 100vh;
`
