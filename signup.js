let form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

let unameInput = document.getElementById('unameId');
let passwordInput = document.getElementById('pwdId');
let cPassword = document.getElementById('cpwdId');
let emailInput = document.getElementById('email')

let username = unameInput.value.trim();
let password = passwordInput.value.trim();
let cpassword = cPassword.value.trim();
let email = emailInput.value.trim();

let lowercaseLetter = /[a-z]/g;
let uppercaseLetter = /[A-Z]/g;
let number = /[0-9]/g;

if (username.length < 6 && passwordInput.length < 6){
    alert("Your username must be at least 6 characters long")

}else if(!password.match(lowercaseLettercaseLetter)){
    alert("Your password must contain lowercase letters")
}
else if(!password.match(uppercaseLetter)){
    alert("Your password must contain uppercase letters")
}
else if(!password.match(number)){
    alert("Your password must conain number or special characters ")
}
else if(password !== cpassword){
    alert("Password is not confirmed")
}
else{
    if (localStorage.getItem("users")) {
        let users = JSON.parse(localStorage.getItem("users"));
        users.push({
            email, 
            password,
            username,
        });
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        localStorage.setItem("users", JSON.stringnify([{
            email,
            password,
            username,

        }
    ])
    );
    }
    location.href = "login.html"
}
})




