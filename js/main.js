window.onload = function(){
    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".nav");
    let body = document.querySelector("body");
    let btnUp = document.querySelector(".arrow-btn-up");
    let links = document.querySelectorAll(".header-bottom a");
    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
        body.classList.toggle("hidden");
        window.pageYOffset > 300 && body.classList.contains("hidden") ? 
            btnUp.classList.remove("btn-visible") : btnUp.classList.add("btn-visible");
    })

    document.querySelector("#year").innerHTML = new Date().getFullYear()
    
    btnUp.addEventListener("click", function(){
        window.scrollTo(0, 0);
    })
    window.addEventListener("scroll",function(){
        let scrollTop = window.pageYOffset;
        scrollTop > 300 ? 
            btnUp.classList.add("btn-visible") : btnUp.classList.remove("btn-visible");
    })
}
