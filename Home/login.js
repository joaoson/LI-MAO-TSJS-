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
        botaoCadastro.classList.remove("atual");
        botaoLogin.classList.add("atual");
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
        botaoCadastro.classList.add("atual");
        botaoLogin.classList.remove("atual");
    }
    else{
        console.log("ja esta aparente")
    }
}

document.getElementById('Formulario').addEventListener('submit', function( evento ){

    evento.preventDefault();

    if(this.classList.contains("errado")){
        return false;
    }

    let dados = new FormData(this);

    let notas = []; 

    for(let key of dados.keys()){
        notas.push(dados.get(key)); 
    }

    console.log(notas);
    alert("Cadastro realizado")
    window.location.href = "./exercise.html";
});

document.getElementById('Formulario1').addEventListener('submit', function( evento ){

    evento.preventDefault();

    if(this.classList.contains("errado")){
        return false;
    }

    let dados = new FormData(this);

    let notas = []; 

    for(let key of dados.keys()){
        notas.push(dados.get(key)); 
    }

    console.log(notas);
    alert("Cadastro realizado")
    window.location.href = "./exercise.html";
});


function camponumerico(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value.match(/\d/)){
                this.classList.remove('error');
                this.parentNode.classList.remove('errado')
        }
        else{
            this.classList.add('error');
            this.parentNode.classList.add('errado')
            return false;
        }
    });
}

function campoletra(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value.match(/\D/)){
                this.classList.remove('error');
                this.parentNode.classList.remove('errado')
        }
        else{
            this.classList.add('error');
            this.parentNode.classList.add('errado')
            return false;
        }
    });
}

function campouf(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value.match(/\D/) && this.value.length == 2){
                this.classList.remove('error');
                this.parentNode.classList.remove('errado')
        }
        else{
            document.querySelector('.errormsg').innerHTML = "Preencha o campo corretamente";
            this.classList.add('error');
            this.parentNode.classList.add('errado')
            return false;
        }
    });
}

function campocep(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        let cepnovo = this.value.replace(/-/,"");

        if(cepnovo.match(/[0-9]/)){
                this.classList.remove('error');
                console.log(cepnovo)
                this.parentNode.classList.remove('errado')
        }
        else{
            this.classList.add('error');
            this.parentNode.classList.add('errado')
            console.log(cepnovo)
            return false;
        }
    });
}

function campoemail(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        const email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

        if(this.value.match(email)){
                this.classList.remove('error');
                this.parentNode.classList.remove('errado')
        }
        else{         
            this.classList.add('error');
            this.parentNode.classList.add('errado')
            return false;
        }
    });
}

function camposenha(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        const senha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if(this.value.match(senha)){
                this.classList.remove('error');
                this.parentNode.classList.remove('errado')
             
        }
        else{         
            this.classList.add('error');
            this.parentNode.classList.add('errado')
            alert("A senha deve contem no minimo 8 digitos e 1 letra minuscula, 1 letra maiuscula e 1 numero")
            return false;
        }
    });
}

let num = document.querySelectorAll('.num');
let letra = document.querySelectorAll('.letra');
let uf = document.querySelectorAll('.uf');
let cep = document.querySelectorAll('.cep');
let email = document.querySelectorAll('.email');
let senha = document.querySelectorAll('.senha');

for(let emfoco of num){
    camponumerico(emfoco);
}

for(let emfoco of letra){
    campoletra(emfoco);
}

for(let emfoco of uf){
    campouf(emfoco);
}

for(let emfoco of cep){
    campocep(emfoco);
}

for(let emfoco of email){
    campoemail(emfoco);
}

for(let emfoco of senha){
    camposenha(emfoco);
}