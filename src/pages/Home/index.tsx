import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//[ package ]

import GameName from 'components/page/Home/GameName'
import Background from 'components/global/Background'
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
			style={SHOW && !pageLoad ? { animation: 'FadeOut 0.5s forwards' } : {}}>
			<div>
				<GameName />
				<Background />
			</div>
		</Main>
	)
}

//=> Style

const Main = styled.main`
	width: 100%;
	padding: 10px 5%;
	display: flex;
	justify-content: flex-end;
	animation: FadeIn 0.25s forwards;
	> div {
		width: 65%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`
