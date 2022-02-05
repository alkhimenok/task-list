import React, { useState, useEffect } from 'react'
import Body from './common/Body'
import Container from './common/Container'
import Form from './Form'
import List from './List'
import Footer from './Footer'
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

	const handleFooterClick = e => {
		if (e.target.tagName !== 'BUTTON') return

		const { target } = e
		const { dataset } = target

		setTaskList(actionAllTask[dataset.btn]().filter(task => !task.isDelete))

		e.preventDefault()
	}

	const actionAllTask = {
		completed: () =>
			taskList.map(task => {
				task.isCompleted = true

				return task
			}),
		important: () =>
			taskList.map(task => {
				task.isImportant = true

				return task
			}),
		delete: () =>
			taskList.map(task => {
				task.isDelete = true

				return task
			})
	}

	useEffect(setListHeight, [taskList])
	useEffect(() => setTaskList(JSON.parse(localStorage.getItem('taskListData')) ?? []), [])
	
	window.addEventListener('beforeunload', () => localStorage.setItem('taskListData', JSON.stringify(taskList)))

	return (
		<main className="main" id='main'>
			<Container parentBlockClass={'main__container'}>
				<Body parentBlockClass={'main__body'}>
					<Form parentBlockClass={'main__form'} handleSubmit={handleTaskSubmit} />
					{taskList.length ? (
						<List parentBlockClass={'main__list'} taskList={taskList} handleClick={handleTaskAction} />
					) : (
						<h2 className="main__title">All tasks have been completed so far</h2>
					)}
				</Body>
			</Container>
			<Footer parentBlockClass={'main__footer'} handleClick={handleFooterClick} />
		</main>
	)
}

export default Main
