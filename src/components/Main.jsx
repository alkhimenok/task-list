import React, { useState } from 'react'
import Body from './common/Body'
import Container from './common/Container'
import Form from './Form'
import List from './List'

const Main = () => {
	const [taskList, setTaskList] = useState(['hello','hello','hello','hello','hello','hello','hello','hello','hello'])

	const handleTaskSubmit = task => setTaskList([task, ...taskList])

	const handleTaskAction = e => {
		console.log(e.target)

		e.preventDefault()
	}

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
