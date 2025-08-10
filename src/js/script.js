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

		document.addEventListener("click", (event) => {
			const isOutsideClick = !customSelect.contains(event.target);

			if (isOutsideClick) {
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
});