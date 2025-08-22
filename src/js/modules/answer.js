export default function answer() {
    document.querySelectorAll(".answer ul li").forEach(item => {
        item.style.height = item.querySelector("a").offsetHeight + "px";
        item.querySelector("a").addEventListener("click", (e) => {
            e.preventDefault();
            item.classList.toggle("active");
            if(item.classList.contains("active")) {
                item.style.height = item.querySelector(".answer__wrap").offsetHeight + item.querySelector("a").offsetHeight - 1 + "px";
            } else {
                item.style.height = item.querySelector("a").offsetHeight + "px";    
            }
        })
    })
}