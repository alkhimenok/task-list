import React from 'react'

const Form = ({ blockClass, taskList }) => {
	return (
		<ul className={[blockClass ?? '', 'task-list'].join(' ')}>
			{taskList.map(task => (
				<li className="task-list__item" key={task.id}>
					{task.title}
				</li>
			))}
		</ul>
	)
}

export default Form
