import React, { useState, useEffect } from 'react'
import Body from './common/Body'
import Container from './common/Container'
import Form from './Form'
import List from './List'
import { uid } from 'uid'
import { setListHeight } from '../scripts/listHeight'

const Main = () => {
	const [taskList, setTaskList] = useState([])

	const handleTaskSubmit = task => {
		setTaskList([{ id: uid(), isCompleted: false, isImportant: false, isDelete: false, content: task }, ...taskList])
	}

	const handleTaskAction = e => {
		if (e.target.tagName !== 'BUTTON') return

		const { target } = e
		const { dataset } = target
		const currentTarget = target.closest('li')

		setTaskList(() => {
			return taskList
				.map(task => {
					if (currentTarget.id === task.id) task[dataset.btn] = !task[dataset.btn]

					return task
				})
				.filter(task => !task.isDelete)
		})

		e.preventDefault()
	}

	useEffect(() => {
		setListHeight()

		setTaskList(JSON.parse(localStorage.getItem('taskListData')) ?? [])
	}, [])

	window.addEventListener('beforeunload', () => localStorage.setItem('taskListData', JSON.stringify(taskList)))

	return (
		<main className="main">
			<Container parentBlockClass={'main__container'}>
				<Body parentBlockClass={'main__body'}>
					<Form parentBlockClass={'main__form'} handleSubmit={handleTaskSubmit} />
					<List parentBlockClass={'main__list'} taskList={taskList} handleClick={handleTaskAction} />
				</Body>
			</Container>
		</main>
	)
}

export default Main
