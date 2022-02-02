import React from 'react'
import Task from './Task'

const List = ({ parentBlockClass, taskList, handleClick }) => {
	return (
		<ul className={[parentBlockClass, 'list'].join(' ')} onClick={handleClick}>
			{[
				...taskList.filter(task => task.isImportant && !task.isCompleted),
				...taskList.filter(task => !task.isImportant && !task.isCompleted),
				...taskList.filter(task => task.isCompleted)
			].map((task, i) => (
				<Task parentBlockClass={'list__task'} taskData={task} handleClick={handleClick} key={i} />
			))}
		</ul>
	)
}

export default List
