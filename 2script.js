let button = document.querySelector(".subs");
let form = document.querySelector("form");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     alert("SUBSCRIBED");
    
// });

button.addEventListener("click", (event)=>{
    event.preventDefault();
    button.innerText = "SUBSCRIBED!";
});

let btn = document.querySelector(".fixedBtn");

btn.addEventListener("click",(event)=>{
    event.target.style.cursor = "pointer";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

