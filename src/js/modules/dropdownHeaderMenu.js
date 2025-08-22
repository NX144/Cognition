function dropdownHeaderMenu() {
    if(window.innerWidth > 991 && document.querySelectorAll('.header__item.sub > a')) {
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
    } else if(document.querySelector('.header__burger')) {
		document.querySelector('.header__burger').addEventListener('click', () => {
			document.querySelector('.header__nav').classList.toggle('active');
		})
		document.querySelectorAll(".header__item").forEach(item => {
			item.style.height = item.childNodes[1].offsetHeight + "px";
			item.childNodes[1].addEventListener('click', (e) => {
				if(item.childNodes[3]) {
					e.preventDefault();
					item.childNodes[1].classList.toggle("active");
					if(item.childNodes[1].classList.contains("active")) {
						item.style.height = item.childNodes[1].offsetHeight + item.childNodes[3].offsetHeight + "px";
					} else {
						item.style.height = item.childNodes[1].offsetHeight + "px";
					}
				}
			})
			item.querySelectorAll("li").forEach(li => {
				if(li.childNodes[1]) {
					if(li.childNodes[1].offsetHeight > 0) {
						li.style.height = li.childNodes[1].offsetHeight + 3 + "px";
					}
					if(li.childNodes[3] && li.parentNode.parentNode.nodeName !== "LI") {
						li.childNodes[1].innerHTML += `
							<span>
								<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							  		<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2802 0.993114C15.5406 1.25346 15.5406 1.67557 15.2802 1.93592L8.20914 9.00699C7.94879 9.26734 7.52668 9.26734 7.26633 9.00699L0.195263 1.93592C-0.0650871 1.67557 -0.0650878 1.25346 0.195262 0.993114C0.455612 0.732764 0.877722 0.732764 1.13807 0.993114L7.73773 7.59278L14.3374 0.993114C14.5977 0.732764 15.0199 0.732764 15.2802 0.993114Z" fill="black" />
								</svg>
							</span>
						`;
					}
					li.setAttribute('data-kalan', li.childNodes[1].offsetHeight);
					li.childNodes[1].addEventListener('click', (e) => {
						if(li.childNodes[3] && li.parentNode.parentNode.nodeName !== "LI") {
							e.preventDefault();
							li.childNodes[1].classList.toggle("active");
							if(li.childNodes[1].classList.contains("active")) {
								li.style.height = li.childNodes[1].offsetHeight + li.childNodes[3].offsetHeight + "px";
								li.setAttribute('data-kalan', li.childNodes[1].offsetHeight + li.childNodes[3].offsetHeight);
								if(li.parentNode.parentNode.nodeName === "LI") {
									li.parentNode.parentNode.style.height = li.parentNode.parentNode.offsetHeight + li.childNodes[3].offsetHeight + "px";
									li.parentNode.parentNode.setAttribute('gaz', "true");
								}
								if(li.getAttribute('gaz') === 'true') {
									item.style.height = item.offsetHeight + li.childNodes[1].offsetHeight + li.childNodes[3].offsetHeight + "px";
								} else {
									item.style.height = item.offsetHeight + li.childNodes[3].offsetHeight + "px";
								}
								li.style.pointerEvents = 'none';
								setTimeout(() => {
									li.style.pointerEvents = 'all';
								}, 300)
							} else {
								item.style.height = item.offsetHeight - li.getAttribute('data-kalan') + li.childNodes[1].offsetHeight + "px";
								if(li.parentNode.parentNode.nodeName === "LI") {
									li.parentNode.parentNode.style.height = li.parentNode.parentNode.getAttribute('data-kalan') + "px";
									li.parentNode.parentNode.setAttribute('gaz', "true");
								} else {
									li.querySelectorAll('li').forEach(zaza => {
										if(zaza.childNodes[1]) {
											if(zaza.childNodes[1].classList.contains("active")) {
												zaza.childNodes[1].classList.remove("active");
												item.style.height = item.offsetHeight - zaza.childNodes[3].offsetHeight - li.getAttribute('data-kalan') + "px";
											}
											zaza.style.height = zaza.childNodes[1].offsetHeight + 3 + "px";
										}
									})
								}
								li.setAttribute('data-kalan', li.childNodes[1].offsetHeight);
								li.style.height = li.childNodes[1].offsetHeight +  3 + "px";
							}
						}
					})
				}
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
			    document.querySelectorAll(".header__item").forEach(item => {
				    item.querySelectorAll("li").forEach(li => {
					    if(li.childNodes[1] && li.childNodes[1].offsetHeight > 0) {
						    li.style.height = li.childNodes[1].offsetHeight + 3 + "px";
					    }
				    })
				    if(item.childNodes[3]) {
					    if(item.childNodes[1].classList.contains("active")) {
						    item.style.height = item.childNodes[1].offsetHeight + item.childNodes[3].offsetHeight + "px";
					    } else {
						    item.style.height = item.childNodes[1].offsetHeight + "px";
					    }
				    }
			    })
		    })


	    })
    }
}

export default dropdownHeaderMenu;