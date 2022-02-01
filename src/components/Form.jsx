import React, { useState } from 'react'

const Form = ({ parentBlockClass, handleSubmit }) => {
	const [task, setTask] = useState('')

	return (
		<form
			className={[parentBlockClass, 'form'].join(' ')}
			onSubmit={e => {
				if (task !== '') {
					handleSubmit(task)
					setTask('')
				} else {
          // showModal()
        }

				e.preventDefault()
			}}>
			<fieldset className="form__item">
				<input
					className="form__input"
					id="taskInput"
					type="text"
					placeholder=" "
					value={task}
					onChange={e => setTask(e.target.value)}
				/>
				<label className="form__label" htmlFor="taskInput">
					Enter your task
				</label>
			</fieldset>
			<button className="form__btn" type="submit">
				add task
			</button>
		</form>
	)
}

export default Form
