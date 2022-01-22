import React, { useState } from 'react'

const Form = ({ blockClass, onAddTask }) => {
	const [task, setTask] = useState('')

	const handleFormSubmit = e => {
		onAddTask(task)

		setTask('')

		e.preventDefault()
	}

	return (
		<form className={[blockClass ?? '', 'form'].join(' ')} onSubmit={handleFormSubmit}>
			<fieldset className="form__item">
				<input className="form__input" name="input" type="text" value={task} onChange={e => setTask(e.target.value)} />
				<label className="form__label">enter youre task</label>
			</fieldset>
			<button className="form__btn">add</button>
		</form>
	)
}

export default Form