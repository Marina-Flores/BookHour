
// Mostrando input da lista "Quero ler" //
function mostrarInputDesejados(){
    var desejados = document.querySelector(".formAdd");
    if(!desejados.classList.contains('displayDesejados')){
        desejados.classList.add("displayDesejados");
    }else {
        desejados.classList.remove("displayDesejados");
    }
}

var button_desejados = document.querySelector(".icone-adicionar");
button_desejados.addEventListener("click", mostrarInputDesejados);

// Mostrando input da lista "Estou lendo" //
function mostrarInputLendo(){
    var livros_lendo = document.querySelector(".campo_pesquisar");
    if(!livros_lendo.classList.contains('displayLendo')){
        livros_lendo.classList.add("displayLendo");
    }else{
        livros_lendo.classList.remove("displayLendo");
    }
}

var button_lendo = document.querySelector(".icone-adicionar-lendo");
button_lendo.addEventListener("click", mostrarInputLendo);

// Mostrando input da lista "Já li" //
function mostrarInputLidos(){
    var livros_lidos = document.querySelector(".addLidos");
    if(!livros_lidos.classList.contains('displayLido')) {
        livros_lidos.classList.add("displayLido");
    }else{
        livros_lidos.classList.remove("displayLido");
    }
}

var button_lidos = document.querySelector(".icone-adicionar-lido");
button_lidos.addEventListener("click", mostrarInputLidos);