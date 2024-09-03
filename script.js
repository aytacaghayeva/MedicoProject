let button = document.querySelector(".secret");
let a = document.querySelector(".get");
let email = document.querySelector(".email");
let password = document.querySelector(".pass");

button.addEventListener("click", (event)=>{
    if(email.value.length === 0 || password.value.length === 0){
    a.href = "";
    } else{
        a.href = "./2index.html";
    }
})