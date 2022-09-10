import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
//[ package ]

import Menu from 'components/reusable/Menu'
//[ components ]

import { _pageLoad } from 'store/status'
//[ store ]

//=> DOM
export default () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const [choose, setChoose] = useState<string>('')

	useEffect(() => {
		if (choose !== '' && pathname !== choose) {
			_pageLoad.set(false)
			setTimeout(() => navigate(choose), 250)
		} else if (pathname !== '/') {
			navigate(pathname)
			setChoose(pathname)
		}
	}, [choose])

	return (
		<Main>
			<Nav>
				<Decorate1>
					<i />
					<div />
					<nav />
				</Decorate1>
				<Decorate2>
					<nav />
					<div>
						<p>CAUTION</p>
					</div>
				</Decorate2>
				<Menu
					Default={pathname}
					setChoose={setChoose}
					list={[
						['首页', '/'],
						['PV', '/pv'],
						['剧情简介', '/story'],
						['人物介绍', '/character'],
						['关于', '/about'],
						['周边', '/merchandise']
					]}
				/>
			</Nav>
		</Main>
	)
}

//=> Style
const Main = styled.main`
	width: 528px;
	height: 60px;
`

const Nav = styled.nav`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 1px;
	background-color: rgba(0, 0, 0, 15%);
	backdrop-filter: blur(4px);
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	overflow: hidden;
	> main {
		padding-top: 16px;
	}
`

const Decorate1 = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 12px;
	height: 100%;
	background-color: #ffec5d;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	padding: 4px 0;
	> div {
		position: absolute;
		width: 1px;
		height: 40px;
		background-color: #1e1f1f;
		top: 16px;
		left: 2px;
		margin: auto 0;
	}
	> nav {
		width: 2px;
		height: 2px;
		background-color: #1e1f1f;
		border-radius: 50%;
		margin-left: 2px;
	}
	> i {
		background-color: #1f1f1f;
		height: 12px;
		position: absolute;
		right: -4px;
		top: 4px;
		transform: rotate(25deg);
		width: 14px;
	}
`

const Decorate2 = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 12px;
	background-color: #1f1f1f;
	> div {
		position: absolute;
		margin-top: -5px;
		z-index: 2;
		display: inline-block;
		transform: scale(0.44);
		padding: 2px;
		background-color: #1f1f1f;
		border-radius: 5px;
		overflow: hidden;
		> p {
			font-size: 12px;
			color: black;
			font-family: 'Open Sans', sans-serif;
			padding: 2px 3px;
			background: #ffec5d;

			user-select: none;
		}
	}
	> nav {
		position: absolute;
		height: 100%;
		width: 44px;
		animation: animate 8s linear infinite;
		background-size: 10px 10px;
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
		z-index: 1;
	}
`
