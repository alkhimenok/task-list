import React, { useState } from 'react'

const Select = ({ blockClass }) => {
	const optionList = ['all', 'important', 'completed', 'unfulfilled']

	const [currentOption, setCurrentOption] = useState('all')

	const handleChangeCurrentOption = e => setCurrentOption(e.target.textContent)

	return (
		<div className={[blockClass ?? '', 'select'].join(' ')}>
			<h2 className="select__current-option">{currentOption}</h2>
			<ul className="select__list" onClick={handleChangeCurrentOption}>
				{optionList.map(option => (
					<li
						className={currentOption === option ? 'select__option select__option--current-option' : 'select__option'}
						key={option}>
						{option}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Select
