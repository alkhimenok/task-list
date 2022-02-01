import React from 'react'

const Form = ({ parentBlockClass }) => {
	return (
		<form className={[parentBlockClass, 'form'].join(' ')}>
			<fieldset className="form__item">
				<input className="form__input" id="taskInput" type="text" placeholder=" " />
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
