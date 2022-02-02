export const setListHeight = () => {
	const $main = document.querySelector('main')
	const $form = document.querySelector('.form')
	const $list = document.querySelector('.list')

	$list.style.maxHeight = $main.clientHeight - $form.clientHeight * 2 + 'px'

	window.addEventListener('resize', setListHeight)
}
