const botaoLogin = document.getElementById("loginBtn");
const botaoCadastro = document.getElementById("registerBtn");

console.log(botaoLogin, botaoCadastro)

botaoLogin.addEventListener("click", changeLogin);
botaoCadastro.addEventListener("click", changeRegister);

function changeLogin(){
    const Login = document.getElementById("loginDiv");
    const Register = document.getElementById("registerDiv");

    console.log(Login, Register)

    const classLogin = Login.classList[1];

    console.log(classLogin)

    if(classLogin == "hidden"){
        Register.classList.add("hidden");
        Login.classList.remove("hidden");
    }
    else{
        console.log("ja esta aparente")
    }
}

function changeRegister(){
    const Login = document.getElementById("loginDiv");
    const Register = document.getElementById("registerDiv");

    console.log(Login, Register)

    const classRegister = Register.classList[1];

    if(classRegister == "hidden"){
        Login.classList.add("hidden");
        Register.classList.remove("hidden");
    }
    else{
        console.log("ja esta aparente")
    }
}