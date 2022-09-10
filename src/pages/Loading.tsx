import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
//[ package ]

import Loader from 'components/reusable/Loading/HalfFilled'
//[ Components ]

import { _pageLoad, $ } from 'store/status'
//[ store ]

//=> DOM
export default () => {
	const pageLoad = $(_pageLoad)

	const [hide, sethide] = useState<boolean>(true)

	useEffect(() => {
		if (pageLoad) setTimeout(() => sethide(true), 500)
		else sethide(false)
	}, [pageLoad])

	return (
		<Main
			style={{
				display: hide ? 'none' : 'flex',
				animation: `${!pageLoad ? 'FadeIn' : 'FadeOut'} 0.25s forwards`
			}}>
			<Loader
				color={'#ffec5d'}
				speed={1.2}
				lineSpeed={1.4}
				width={4}
				size={50}
			/>
		</Main>
	)
}

//=> Style
const Main = styled.main`
	position: absolute;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	top: 0;
`
