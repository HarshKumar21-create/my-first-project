console.lof("Login JS UPDATED LOADED");
let password= document.querySelector("#password");
let showBtn= document.querySelector("#shw-button");
let loginBtn = document.querySelector("#login-btn");
showBtn.addEventListener("click",
    function(){
    if(password.type === "password"){
    password.type = "text";
    showBtn.innerText = "Hide";
}
else{
   password.type = "password";
   showBtn.innerText = "Show";
}
});

loginBtn.addEventListener("click",
    function(){
        if(password.value === ""){
            alert("Please enter password");
        }
        else if(password.value.length < 8){
        alert("Password must be at least 8 characters");
     }
        else{
            alert("Login Successful");
        }
     });


