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

});