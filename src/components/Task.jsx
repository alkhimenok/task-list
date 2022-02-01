import React from 'react'

const Task = ({ parentBlockClass, taskData }) => {
	const { id, isCompleted, isImportant, isDelete, content } = taskData

	return (
		<li
			className={[
        parentBlockClass,
				'task',
				isCompleted ? 'task--completed' : '',
				isImportant ? 'task--important' : '',
				isDelete ? 'task--delete' : ''
			].join(' ')}
			id={id}>
			<span className="task__text">{content}</span>
			<form className="task__form">
				<button className="task__btn icon-completed" data-btn="isCompleted"></button>
				<button className="task__btn icon-important" data-btn="isImportant"></button>
				<button className="task__btn icon-delete" data-btn="isDelete"></button>
			</form>
		</li>
	)
}

export default Task
