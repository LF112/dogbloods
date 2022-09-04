import React from 'react'
import styled from 'styled-components'
//[ package ]

//=> DOM
export default () => {
	return (
		<GameName>
			<h1>丧家犬与落水狗的冒险剧</h1>
			<h2>DOG × BLOODS</h2>
		</GameName>
	)
}

//=> Style
const GameName = styled.div`
	> h1,
	h2 {
		font-family: 'REEJI-PinboGB';
	}
	> h1 {
		color: rgba(255, 255, 255, 0.85);
		font-size: 3rem;
		font-weight: 400;
		text-shadow: rgba(6, 7, 25, 50%) 0.05em 0.05em 0px;
	}
	> h2 {
		color: rgba(253, 236, 101, 0.8);
		font-size: 2rem;
	}
`
