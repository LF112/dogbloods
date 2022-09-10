import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
//[ package ]

//=> DOM
export default (props: any) => {
	const { list, setChoose, style, Default = null } = props

	const [choose, updateChoose] = useState<Number>(-1)
	const [touchWidth, setTouchWidth] = useState<Number>(0)
	const [touchLeft, setTouchLeft] = useState<Number>(0)
	const [chooseWidth, setChooseWidth] = useState<Number>(0)
	const [chooseLeft, setChooseLeft] = useState<Number>(0)

	const node = useRef<HTMLElement>(null)

	//=> Set the initial selection bar position
	useEffect(() => {
		const { current: DOM } = node

		let NodeIndex = 0
		list.forEach(([, to], index: number) => {
			if (to === Default) {
				NodeIndex = index
				updateChoose(index)
			}
		})

		if (DOM) {
			setTimeout(() => {
				const { clientWidth, offsetLeft } = DOM.childNodes[NodeIndex] as any

				setChooseWidth(clientWidth)
				setChooseLeft(offsetLeft - 22)
				setTouchWidth(clientWidth)
				setTouchLeft(offsetLeft - 22)
			}, 116)
		}
	}, [Default])

	const handleTouch = (event: any) => {
		const { target } = event
		setTouchWidth(target.clientWidth)
		setTouchLeft(target.offsetLeft - 22)
	}

	const handleClick = (event: any, index: number, to: string) => {
		const { target } = event
		setChooseWidth(target.clientWidth)
		setChooseLeft(target.offsetLeft - 22)
		updateChoose(index)
		setChoose(to)
	}

	return (
		<Main ref={node} style={style}>
			{list.map(([name, to], index: number) => {
				return (
					<Item
						key={index}
						onClick={(event: any) => {
							if (choose === index) event.preventDefault()
							else handleClick(event, index, to)
						}}
						onMouseEnter={handleTouch}
						onMouseLeave={() => {
							setTouchWidth(chooseWidth)
							setTouchLeft(chooseLeft)
						}}>
						<h1
							className='cyber'
							data-text={name}
							style={
								choose === index
									? { color: '#fdec65', fontSize: '16px', cursor: 'default' }
									: {}
							}>
							{name}
						</h1>
					</Item>
				)
			})}
			<Line style={{ width: `${touchWidth}px`, left: `${touchLeft}px` }} />
		</Main>
	)
}

//=> Style
const Main = styled.main`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 4px 14px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	> div + div {
		margin-left: 20px;
	}
`

const Item = styled.div`
	position: relative;
	cursor: pointer;
	> h1 {
		color: #d5d5d5;
		font-size: 15px;
		line-height: 1;
		font-family: 'REEJI-PinboGB';
		user-select: none;
		pointer-events: none;
	}
	:hover {
		> h1 {
			color: #fff;
			font-size: 16px;
		}
		> h1:after {
			display: block;
		}
	}
`

const Line = styled.div`
	position: absolute;
	width: 0;
	height: 3px;
	border-radius: 2px;
	left: 0;
	bottom: 8px;
	animation: animate 2.5s linear infinite;
	background-size: 50px 50px;
	background-image: linear-gradient(
		to right bottom,
		#1f1f1f 0%,
		#1f1f1f 25%,
		#ffec5d 25%,
		#ffec5d 50%,
		#1f1f1f 50%,
		#1f1f1f 75%,
		#ffec5d 75%,
		#ffec5d 100%
	);
`
