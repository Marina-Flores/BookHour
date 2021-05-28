const lista_espaco = document.getElementById('lista-espaco');

// checando se o usuário está logado
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user is signed in at users.html');
    }
    else {
        alert('Você foi desconectado, faça o login para se reconectar');
        location = "../views/login.html";
    }
})

// Criando lista de livros lendo //
function renderizarDados (docIndividual){
    // div pai
    let divPai = document.createElement("div");
    divPai.className = "espaco caixa-lista";
    divPai.setAttribute('id-dados', docIndividual.id); 

    //div lista
    let divLista = document.createElement("div");
    divLista.textContent = docIndividual.data().lendo 
    || docIndividual.data().lendo_button 
    || docIndividual.data().HP2_lendo 
    || docIndividual.data().HP3_lendo 
    || docIndividual.data().HP4_lendo 
    || docIndividual.data().HP5_lendo 
    || docIndividual.data().HP6_lendo 
    || docIndividual.data().HP7_lendo
    || docIndividual.data().tortoArado_lendo
    || docIndividual.data().homemBabilonia_lendo
    || docIndividual.data().garotaLago_lendo
    || docIndividual.data().mulheresLobo_lendo
    || docIndividual.data().PJ1_lendo
    || docIndividual.data().PJ2_lendo
    || docIndividual.data().PJ3_lendo
    || docIndividual.data().PJ4_lendo
    || docIndividual.data().PJ5_lendo
    || docIndividual.data().revolucaoBichos_lendo
    || docIndividual.data().livro1984_lendo
    || docIndividual.data().handmaids_lendo
    || docIndividual.data().milagreManha_lendo  
    || docIndividual.data().poderAcao_lendo
    || docIndividual.data().mindset_lendo
    || docIndividual.data().poderHabito_lendo
    || docIndividual.data().mentirosos_lendo
    || docIndividual.data().sutilArte_lendo
    || docIndividual.data().manualAntirracista_lendo
    || docIndividual.data().coragemImperfeito_lendo;

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

