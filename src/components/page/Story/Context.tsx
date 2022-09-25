import React from 'react'
import styled from 'styled-components'
//[ package ]

//=> DOM
export default () => {
	return (
		<Main>
			<p>
				DOG × BLOODS
				讲述了被厄运缠身的主人公，在参加葬礼时邂逅了自称为“前辈”的银狐，在他的干涉下一面规避灾难，一面探寻自身的秘密。
			</p>
		</Main>
	)
}

//=> Style
const Main = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	> p {
		width: 75%;
		color: #fff;
		font-size: 1.8rem;
		font-family: 'ZCOOL KuaiLe';
	}
`
