const btnAdd = document.querySelector("#addBtn");

btnAdd.addEventListener("click", function (){
    const li = document.createElement("li");//criou elemento novo li
    const inputValue = document.querySelector("#myInput").value;
    const taskText = document.createTextNode(inputValue);
    li.appendChild(taskText);

    //verificação se está embranco o campo
    if(inputValue === ""){
        alert("Você deve digitar alguma tarefa.")
    }else{
        document.getElementById("myUL").appendChild(li);
    }

    //botão fechar
    const span = document.createElement("span");
    const icon = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(icon);
    li.appendChild(span);

    document.querySelector("#myInput").value = "";

    //apagar a tarefa
    const close = document.querySelectorAll(".close");

    for(let i = 0; i < close.length; i++){
        close[i].addEventListener("click", function (){
            const li = this.parentElement;
            li.style.display ="none";
        });
    };   


//check na tarefa
    const list = document.querySelector("ul");

    list.addEventListener("click", (ev) => {
        if(ev.target.nodeName === "LI"){
            ev.target.classList.toggle("checked");
        }
    })
});