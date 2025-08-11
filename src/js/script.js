document.addEventListener("DOMContentLoaded", () => {
	const customSelects = document.querySelectorAll(".custom-select");

	customSelects.forEach((customSelect) => {
		const selectButton = customSelect.querySelector(".select-button");
		const dropdown = customSelect.querySelector(".select-dropdown");
		const options = dropdown.querySelectorAll("li");
		const selectedValue = selectButton.querySelector(".selected-value");

		let focusedIndex = -1;

		const toggleDropdown = (expand = null) => {
			const isOpen =
				expand !== null ? expand : dropdown.classList.contains("hidden");
			dropdown.classList.toggle("hidden", !isOpen);
			selectButton.setAttribute("aria-expanded", isOpen);

			if (isOpen) {
				focusedIndex = [...options].findIndex((option) =>
					option.classList.contains("selected")
				);
				focusedIndex = focusedIndex === -1 ? 0 : focusedIndex;
				updateFocus();
			} else {
				focusedIndex = -1;
				selectButton.focus();
			}
		};

		const updateFocus = () => {
			options.forEach((option, index) => {
				if (option) {
					option.setAttribute("tabindex", index === focusedIndex ? "0" : "-1");
					if (index === focusedIndex) option.focus();
				}
			});
		};

		const handleOptionSelect = (option) => {
			options.forEach((opt) => opt.classList.remove("selected"));
			option.classList.add("selected");
			selectedValue.textContent = option.textContent.trim(); // Update selected value

			document.querySelectorAll('.certificates__slider').forEach(slider => {
				if(slider.getAttribute('data-tab') === option.textContent.trim()) {
					slider.classList.add('active');
				} else {
					slider.classList.remove('active');
				}
			})

			if (option.dataset.value === "clear") {
				// Reset to the default value
				selectedValue.textContent = "Выбрать психолога";
				options.forEach((opt) => opt.classList.remove("selected"));
				return;
			}
		};

		options.forEach((option) => {
			option.addEventListener("click", () => {
				handleOptionSelect(option);
				toggleDropdown(false);
			});
		});

		selectButton.addEventListener("click", () => {
			toggleDropdown();
		});

		selectButton.addEventListener("keydown", (event) => {
			if (event.key === "ArrowDown") {
				event.preventDefault();
				toggleDropdown(true);
			} else if (event.key === "Escape") {
				toggleDropdown(false);
			}
		});

		dropdown.addEventListener("keydown", (event) => {
			if (event.key === "ArrowDown") {
				event.preventDefault();
				focusedIndex = (focusedIndex + 1) % options.length;
				updateFocus();
			} else if (event.key === "ArrowUp") {
				event.preventDefault();
				focusedIndex = (focusedIndex - 1 + options.length) % options.length;
				updateFocus();
			} else if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				handleOptionSelect(options[focusedIndex]);
				toggleDropdown(false);
			} else if (event.key === "Escape") {
				toggleDropdown(false);
			}
		});
	});

	// укоротитель текста 3000
	function truncateString(str, num) {
		if (str.length <= num) {
			return str;
		}
		return str.slice(0, num) + "...";
	}

	document.querySelectorAll('.blog__list_item-descr p').forEach(item => {
		item.textContent = truncateString(item.textContent, 293);
	})

	// Под меню под меню того меню 3000
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

});