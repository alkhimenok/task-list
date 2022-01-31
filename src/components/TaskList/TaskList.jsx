import React from 'react'

const Form = ({ blockClass, taskList }) => {
	return (
		<ul className={[blockClass ?? '', 'task-list'].join(' ')}>
			{taskList.map(task => (
				<li className="task-list__item" key={task.id}>
					{task.title}
					<form className="task-list__form">
						<button className="task-list__btn" name="important">
							<i className="icon-important"></i>
						</button>
						<button className="task-list__btn" name="completed">
							<i className="icon-completed"></i>
						</button>
						<button className="task-list__btn" name="delete">
							<i className="icon-delete"></i>
						</button>
					</form>
				</li>
			))}
		</ul>
	)
}

export default Form
