import React, { useState } from 'react'
import { CastomSelect, SelectTitle, SelectList, SelectOption } from './styled'

const Select = ({ blockClass }) => {
	const optionList = ['all', 'important', 'completed', 'unfulfilled']

	const [currentOption, setCurrentOption] = useState('all')

	const handleChangeCurrentOption = e => setCurrentOption(e.target.textContent)

	return (
		<CastomSelect className={[blockClass ?? '', 'select'].join(' ')}>
			<SelectTitle className="select__current-option">{currentOption}</SelectTitle>
			<SelectList className="select__list" onClick={handleChangeCurrentOption}>
				{optionList.map(option => (
					<SelectOption
						className={currentOption === option ? 'select__option select__option--current-option' : 'select__option'}
						key={option}>
						{option}
					</SelectOption>
				))}
			</SelectList>
		</CastomSelect>
	)
}

export default Select
