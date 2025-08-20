function dropdownHeaderMenu() {
    document.querySelectorAll('.header__item.sub > a').forEach(item => {
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

			let height = 315;
			document.querySelectorAll(".header__item_wrap ul").forEach(list => {
				if(list.clientHeight > height) {
					height = list.offsetHeight - 100;
				}
			})
			document.querySelectorAll(".header__item_list").forEach(list => {
				if(list.getAttribute('data-tab') === "true") {
					list.style.height = height + "px";
				}
			})
		})
	})
	function Konus(item, a, ul) {
		item.addEventListener('click', (e) => {
			document.querySelectorAll(a).forEach(item => {
				item.classList.remove('active');
			})
			document.querySelectorAll(ul).forEach(item => {
				item.classList.remove('active');
			})
			if(item.parentNode.childNodes[3] && item.parentNode.childNodes[3].nodeName === "UL") {
				e.preventDefault();

				item.parentNode.childNodes[3].classList.add('active');
				item.classList.add('active');
			}
		})
	}
	document.querySelectorAll('.header__item_list > li > a').forEach(item => {
		Konus(item, '.header__item_list li a', '.header__item_list li ul')
	})
	document.querySelectorAll('.header__item_list > li > ul a').forEach(item => {
		Konus(item, '.header__item_list li > ul a', '.header__item_list li > ul ul')
	})


	document.querySelectorAll('.header__item_link').forEach(item => {
		item.addEventListener('click', (e) => {

			if(item.parentNode.childNodes[3] && item.parentNode.childNodes[3].nodeName === "DIV") {
				e.preventDefault();

				document.querySelectorAll('.header__item_wrap').forEach(wrap => {
					if(wrap.classList.contains('active') && item.parentNode.childNodes[3] != wrap) {
						wrap.classList.remove('active');
					}
				})
				document.querySelectorAll('.header__item_link').forEach(item => {
					item.classList.remove('active');
				})

				item.classList.toggle('active');
				item.parentNode.childNodes[3].classList.toggle('active');
			} else {
				document.querySelectorAll('.header__item_link').forEach(item => {
					item.classList.remove('active')
				})
				document.querySelectorAll('.header__item_wrap').forEach(item => {
					item.classList.remove('active')
				})
			}
		})
	})
}

export default dropdownHeaderMenu;