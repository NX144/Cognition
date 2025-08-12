function dropdownHeaderMenu() {
    document.querySelectorAll('.header__item.sub').forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();

		})
	})
	document.querySelectorAll('.header__item_bool').forEach(item => {
		const kill = item.querySelector('.header__item_bool-switch');
		let bool = false;

		kill.addEventListener('click', () => {
			item.setAttribute('data-tab', `${!bool}`)
			bool = !bool;
			item.parentElement.querySelectorAll('.header__item_list').forEach(list => {
				if(list.getAttribute('data-tab') !== `${!bool}`) {
					list.classList.add('active');
				} else {
					list.classList.remove('active');
				}
			})
		})
	})
}

export default dropdownHeaderMenu;