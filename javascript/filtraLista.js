var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
    var cards = document.querySelectorAll(".cards__single");
    
    if(this.value.length > 0){

        for (var i = 0; i < cards.length; i++){
            var card = cards[i]; 
            var titulo = card.querySelector(".cards__artist");
            var conteudoTitulo = titulo.textContent;
            var expressao = new RegExp(this.value, "i");
            if (!expressao.test(conteudoTitulo)){
                card.classList.add("invisivel"); 
            }else{
                card.classList.remove("invisivel");
            }
        }
    }else{
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i]; 
            card.classList.remove("invisivel");
            
        }
    }

});