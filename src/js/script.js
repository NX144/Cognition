import dropdown from "./modules/dropdown";
import truncateString from "./modules/sliceString";
import dropdownHeaderMenu from "./modules/dropdownHeaderMenu";
import answer from "./modules/answer";
import scroll from "./modules/scroll";

document.addEventListener("DOMContentLoaded", () => {
	
	// Dropdown menu (select - option)
	try {
		dropdown()
	} catch(error) {
		throw new Error(`Dropdown script error! \n Error: ${error}`)
	}


	// SliceString function
	try {
		document.querySelectorAll('.blog__list_item-descr p').forEach(item => {
			item.textContent = truncateString(item.textContent, 293);
		})
	} catch(error) {
		throw new Error(`SliceString function script error! \n Error: ${error}`)
	}
	

	// Dropdown menu header
	try {
		dropdownHeaderMenu();
		// window.addEventListener('resize', dropdownHeaderMenu);
	} catch(error) {
		throw new Error(`Dropdown menu header function script error! \n Error: ${error}`)
	}

	// Answer
	try {
		answer();
	} catch(error) {
		throw new Error(`answer function script error! \n Error: ${error}`)
	}

	// Scroll
	try {
		scroll();
	} catch(error) {
		throw new Error(`scroll function script error! \n Error: ${error}`)
	}

	document.querySelectorAll('.news img').forEach(img => {
		if(img.style.float == "right") {
			img.style.marginLeft = '20px';
		} else if(img.style.float == "left") {
			img.style.marginRight = '73px';
		}
	})

	document.querySelectorAll('.groups__btns a').forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			document.querySelectorAll('.groups__btns a').forEach(link => {
				link.classList.remove('active');
			})
			link.classList.add('active');
			document.querySelectorAll('.group__list').forEach(list => {
				if(list.getAttribute('data-tab') == link.getAttribute('data-tab')) {
					list.classList.add('active');
				} else {
					list.classList.remove('active');
				}
			})
		})
	})

});