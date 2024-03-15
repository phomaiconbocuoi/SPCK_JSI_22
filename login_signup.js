var unameInput = document.getElementById('unameId');
var passwordInput = document.getElementById('pwdId');
var signUpBtn = document.getElementById('SignupBTN');
var cPassword = document.getElementById('cpwdId')
function SignUp(){
    var username = unameInput.value; 
    var password = passwordInput.value;
    var cPass = cPassword.value;

    if( username == "" || password == ""){
        alert("Try again");
    }
    else if(password == cPass){
        var newObj = { 
            name: username, 
            password: password,
        }
        var newJSON = JSON.stringify(newObj);
        localStorage.setItem("tk_"+username, newJSON); 
        alert("dang ky thanh cong");
    window.location.href = "login.html";

    }
    else{
        alert("dang ky that bai");

    }
}

function SignIn() {
    var ndTKLogin = document.getElementById("unameId").value;
    var ndMkLogin = document.getElementById("pwdId").value; 
    var checkJSON = localStorage.getItem("tk_"+ndTKLogin);

    console.log(ndTKLogin)
    if(checkJSON != null){
        var checkObj = JSON.parse(checkJSON);
        if(ndMkLogin == checkObj.password){
            alert("Congratulation!");
        window.location.href = "spck.html";
        }
        else{
            alert("Sign in failure!");
        }
     }else{
        alert("Account not found!!!")
    }
    

}
function SignOut(){
    window.location.href = "login.html";
    
}
