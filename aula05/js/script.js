window.onload = function() {
    alert("Olá mundo do JavaScript para Web");
};

const btnTexto = document.querySelector("#btn-texto");

btnTexto.addEventListener("click", function (){
    const tagH1 = document.createElement("h1");
    const h1Text = document.createTextNode("Esse texto foi criado pelo JS");

    tagH1.appendChild(h1Text);
    document.body.appendChild(tagH1);
});

const titulo = document.querySelector("#titulo");

titulo.addEventListener("mouseover", function() {
    titulo.style.color = "green"
});

titulo.addEventListener("mouseout", function(){
    titulo.style.color = "black";
});

