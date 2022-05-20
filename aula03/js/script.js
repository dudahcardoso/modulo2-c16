const items = document.querySelectorAll("[data-anime]"); //pegou os items cards) e transformou em array

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85; //topo da minha página, para quando rolar o scroll executar a animação.
    
    //forEach retorna cada elemento da iteração
    items.forEach((element) => {
        //elemento que é cada card
        if(windowTop > element.offsetTop){
            element.classList.add("animate"); //adicionando a animação em cada card
        } else{
            element.classList.remove("animate")//parou a animação
        }
    });
};

window.addEventListener("scroll", () =>{
    animeScroll();
});

animeScroll();