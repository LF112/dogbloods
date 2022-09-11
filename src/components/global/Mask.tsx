import React from 'react'
import styled from 'styled-components'
//[ package ]

import { _coverHeight, $ } from 'store/status'
//[ store ]

//=> Main Component
export default (props: any) => {
	const { style } = props

	return <Mask style={{ ...style, height: `${$(_coverHeight)}%` }} />
}

//=> Style
const Mask = styled.div`
	position: absolute;
	width: 100%;
	height: 8%;
	background: black;
	z-index: 100;
`
