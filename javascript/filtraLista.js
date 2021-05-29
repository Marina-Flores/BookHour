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

const ficcao = document.getElementsByClassName("ficcao"); 
const romance = document.getElementsByClassName("romance"); 
const autoajuda = document.getElementsByClassName("autoajuda"); 
const suspense = document.getElementsByClassName("suspense"); 
const satira = document.getElementsByClassName("satira"); 
const manual = document.getElementsByClassName("manual"); 


$(document).ready(function(){
    $('#select').on('change', function(){
        var selectValor = $(this).val();
        if(selectValor != 'Literatura_fantastica'){
            $('#pai').children('.Literatura_fantastica').hide();
        } else {
            $('#pai').children('.Literatura_fantastica').show();
        }
        if(selectValor != 'ficcao'){
            $('#pai').children('.ficcao').hide();
        } else {
            $('#pai').children('.ficcao').show();
        }
        if(selectValor != 'autoajuda'){
            $('#pai').children('.autoajuda').hide();
        } else {
            $('#pai').children('.autoajuda').show();
        }
        if(selectValor != 'romance'){
            $('#pai').children('.romance').hide();
        } else {
            $('#pai').children('.romance').show();
        }
        if(selectValor != 'manual'){
            $('#pai').children('.manual').hide();
        } else {
            $('#pai').children('.manual').show();
        }
        if(selectValor != 'suspense'){
            $('#pai').children('.suspense').hide();
        } else {
            $('#pai').children('.suspense').show();
        }
        if(selectValor != 'satira'){
            $('#pai').children('.satira').hide();
        } else {
            $('#pai').children('.satira').show();
        }
        if(selectValor == 'todos'){
            $('#pai').children('.satira').show();
            $('#pai').children('.suspense').show();
            $('#pai').children('.manual').show();
            $('#pai').children('.romance').show();
            $('#pai').children('.autoajuda').show();
            $('#pai').children('.ficcao').show();
            $('#pai').children('.Literatura_fantastica').show();

        }
    });

})