const botao = document.getElementById("myBtn");
const botaoback = document.getElementById("myBtnBack");

botao.addEventListener("click", changeImage);
botaoback.addEventListener("click", changeImageBack);

function changeImage(){
    const img01 = document.getElementById("img1");
    const img02 = document.getElementById("img2");
    const img03 = document.getElementById("img3");

    const class1 = img01.classList[0];
    const class2 = img02.classList[0];
    const class3 = img03.classList[0];

    if(class1 == undefined){
        img02.classList.remove("hidden");
        img01.classList.add("hidden");
    }
    else if(class2 == undefined){
        img03.classList.remove("hidden");
        img02.classList.add("hidden");
    }
    else{
        img01.classList.remove("hidden");
        img03.classList.add("hidden");
    }
}

function changeImageBack(){
    const img01 = document.getElementById("img1");
    const img02 = document.getElementById("img2");
    const img03 = document.getElementById("img3");

    const class1 = img01.classList[0];
    const class2 = img02.classList[0];
    const class3 = img03.classList[0];

    if(class1 == undefined){
        img03.classList.remove("hidden");
        img01.classList.add("hidden");
    }
    else if(class2 == undefined){
        img01.classList.remove("hidden");
        img02.classList.add("hidden");
    }
    else{
        img02.classList.remove("hidden");
        img03.classList.add("hidden");
    }
}
