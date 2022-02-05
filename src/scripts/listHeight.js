export const setListHeight = () => {
	const $main = document.querySelector('#main')
	const $footer = document.querySelector('#footer')
	const $form = document.querySelector('#formTask')
	const $list = document.querySelector('#listTask')

	if (!$list) return

	$list.style.maxHeight = $main.clientHeight - $footer.clientHeight - $form.clientHeight * 2 + 'px'
console.log($list.style.maxHeight);
	window.addEventListener('resize', setListHeight)
}
