document.addEventListener("DOMContentLoaded", ()=>{
    const scrollBtn = document.querySelector("#scrollBtn");

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 500) scrollBtn.style.display = "block";
        else scrollBtn.style.display = "none";
    });

    scrollBtn.addEventListener("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
