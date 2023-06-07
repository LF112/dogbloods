import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//[ package ]

import Nav from 'components/page/Character/Nav'

import { _pageLoad, $ } from 'store/status'
//[ store ]

//=> DOM
export default () => {
	const [choose, setChoose] = useState<number>(0)

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
			style={SHOW && !pageLoad ? { animation: 'FadeOut 0.5s forwards' } : {}}>
			<Nav
				choose={choose}
				setChoose={setChoose}
				list={['主人公', '前辈', '死神', '王子殿下', '警察同志']}
			/>
		</Main>
	)
}

//=> Style
const Main = styled.main`
	width: 100%;
	height: 100vh;
	animation: FadeIn 0.25s forwards;
`
