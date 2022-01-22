import Select from './components/Select/Select'

const App = () => {
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
		</div>
	)
}

export default App
