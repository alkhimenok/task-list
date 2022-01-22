import React, { useState } from 'react'
import Select from './components/Select/Select'
import Form from './components/Form/Form'
import TaskList from './components/TaskList/TaskList'

const App = () => {
	const [taskList, setTaskList] = useState([])

	const addTask = title => setTaskList([{ id: Date.now().toString(), title }, ...taskList])

	return (
		<div className="wrapper">
			<header className="header">
				<div className="header__container --container">
					<div className="header__body --body">
						<h1 className="header__logo">Task list</h1>
						<Select blockClass={'header__select'} />
					</div>
				</div>
			</header>
			<main className="main">
				<div className="main__container --container">
					<div className="main__body --body">
						<Form blockClass={'main__form'} onAddTask={addTask} />
						<TaskList blockClass={'main__task-list'} taskList={taskList} />
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
