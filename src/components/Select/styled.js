import styled from 'styled-components'

export const CastomSelect = styled.div`
	background-color: red;
	&:hover {
		.select__list {
			display: block;
		}
	}
`

export const SelectTitle = styled.h2`
	color: green;
`

export const SelectList = styled.ul`
	display: none;
	background-color: blue;
`

export const SelectOption = styled.li`
	color: yellow;
	&.select__option--current-option {
		color: black;
	}
`
