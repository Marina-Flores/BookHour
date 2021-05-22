const lista_espaco = document.getElementById('lista-espaco');

// Adicionando na lista de livros lendo //
function renderizarDados (docIndividual){
    // div pai
    let divPai = document.createElement("div");
    divPai.className = "espaco caixa-lista";
    divPai.setAttribute('id-dados', docIndividual.id); 

    //div lista
    let divLista = document.createElement("div");
    divLista.textContent = docIndividual.data().lendo;

    //botao
    let lixo = document.createElement("button");    

    let ii = document.createElement("i");
    ii.className = "fas fa-trash"; 

    //acrescentando
    lixo.appendChild(ii);

    divPai.appendChild(divLista);
    divPai.appendChild(lixo);

    lista_espaco.appendChild(divPai); 

    //evento click no lixo
    lixo.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-dados');
        auth.onAuthStateChanged(user => {
            if(user){
                fs.collection('Livros lendo'  + ' ' + user.uid).doc(id).delete();
            }
        })
    })

}

//adicionando lista no database firestore
const campo = document.getElementById('campo');

campo.addEventListener('submit', e => {
    e.preventDefault();
    const lendo = campo['lendo'].value;
    let id = counter += 1;
    campo.reset();
    auth.onAuthStateChanged(user => {
        if (user) {
           fs.collection('Livros lendo' + ' ' + user.uid).doc('_' + id).set({
                id: '_' + id,
                lendo
            }).then( () => {
                console.log('lista adicionada');
            }).catch(err => {
                console.log(err.message);
            })
        }
        else {
            //console.log('user is not signed in to add todos');
        }
    })
})

//realtime listners
auth.onAuthStateChanged(user => {
    if(user){
        fs.collection('Livros lendo'  + ' ' + user.uid).onSnapshot((snapshot) => {
            let mudancas = snapshot.docChanges();
            mudancas.forEach(mudanca => {
                if (mudanca.type == "added") {
                    renderizarDados(mudanca.doc);
                }
                else if (mudanca.type == 'removed') {
                    let lii = lista_espaco.querySelector('[id-dados =' + mudanca.doc.id + ']');
                    lista_espaco.removeChild(lii); 
                }
            })
        })
    }
})