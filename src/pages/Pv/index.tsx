import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//[ package ]

//[ components ]

import { _pageLoad, $ } from 'store/status'
//[ store ]

//=> DOM
export default () => {
	//=> MAIN EFFECTS
	const [SHOW, setSHOW] = useState<Boolean>(false)
	const pageLoad = $(_pageLoad)
	useEffect(() => {
		if (!pageLoad) {
			_pageLoad.set(true)
			setSHOW(true)
		}
	}, [''])

	return (
		<Main
			style={
				SHOW && !pageLoad ? { animation: 'FadeOut 0.5s forwards' } : {}
			}></Main>
	)
}

//=> Style
const Main = styled.main`
	width: 100%;
	animation: FadeIn 0.25s forwards;
`
