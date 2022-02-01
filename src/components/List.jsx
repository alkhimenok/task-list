import React from 'react'

const List = ({ parentBlockClass, taskList, handleClick }) => {
	return (
		<ul className={[parentBlockClass, 'list'].join(' ')}>
			{taskList.map((task, i) => (
				<li className="list__item list__item--completed" onClick={handleClick} key={i}>
					<span className="list__text">{task}</span>
					<form className="list__form">
						<button className="list__btn icon-completed"></button>
						<button className="list__btn icon-important"></button>
						<button className="list__btn icon-delete"></button>
					</form>
				</li>
			))}
		</ul>
	)
}

export default List
