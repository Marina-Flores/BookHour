const lista_espaco_lidos = document.getElementById('lista-espaco_lidos');


// Adicionando na lista de livros lidos // 

function renderizar_dados (doc_Individual) {
    //div pai
    let paiDiv = document.createElement("div");
    paiDiv.className = "espaco_lidos caixa_lidos";
    paiDiv.setAttribute('dados-id', doc_Individual.id); 

    //div lista
    let listaDiv = document.createElement("div");
    listaDiv.textContent = doc_Individual.data().lido || doc_Individual.data().lido_button || doc_Individual.data().HP2_lido || doc_Individual.data().HP3_lido || doc_Individual.data().HP4_lido || doc_Individual.data().HP5_lido || doc_Individual.data().HP6_lido || doc_Individual.data().HP7_lido || doc_Individual.data().tortoArado_lido
    || doc_Individual.data().homemBabilonia_lido
    || doc_Individual.data().garotaLago_lido
    || doc_Individual.data().mulheresLobo_lido
    || doc_Individual.data().PJ1_lido
    || doc_Individual.data().PJ2_lido
    || doc_Individual.data().PJ3_lido
    || doc_Individual.data().PJ4_lido
    || doc_Individual.data().PJ5_lido
    || doc_Individual.data().revolucaoBichos_lido
    || doc_Individual.data().livro1984_lido
    || doc_Individual.data().handmaids_lido
    || doc_Individual.data().milagreManha_lido 
    || doc_Individual.data().poderAcao_lido
    || doc_Individual.data().mindset_lido
    || doc_Individual.data().poderHabito_lido
    || doc_Individual.data().mentirosos_lido
    || doc_Individual.data().sutilArte_lido
    || doc_Individual.data().manualAntirracista_lido
    || doc_Individual.data().coragemImperfeito_lido; 
    //botao
    let lixeira = document.createElement("button"); 

    let iii = document.createElement("i"); 
    iii.className = "fas fa-trash"; 

    //acrescentando
    lixeira.appendChild(iii); 

    paiDiv.appendChild(listaDiv);
 
    paiDiv.appendChild(lixeira);

     lista_espaco_lidos.appendChild(paiDiv); 

    //evento click na lixeira
    lixeira.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('dados-id'); 
        auth.onAuthStateChanged(user => {
            if(user){ 
                fs.collection('Livros lidos' + ' ' + user.uid).doc(id).delete(); 
            }
        })
    })
}
    
    //adicionando lista no database firestore
    const campo_lidos = document.getElementById('campo_lidos');

    campo_lidos.addEventListener('submit', e => {
        e.preventDefault(); 
        const lido = campo_lidos['lido'].value;
        let id = counter += 1; 
        campo_lidos.reset(); 
        auth.onAuthStateChanged(user => {
            if(user) {
                fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                    id: '_' + id, 
                    lido
                }).then ( () => {
                    console.log('livro adicionado');
                }).catch(err => {
                    console.log(err.message);
                })
            }
            else {
                //console.log('user is not signed in to add toods');
            }
        })
    })

        //realtime listners
        auth.onAuthStateChanged(user => {
            if(user){
                fs.collection('Livros lidos' + ' ' + user.uid).onSnapshot((snapshot) => {
                    let alteracoes = snapshot.docChanges(); 
                    alteracoes.forEach(alteracao => {
                        if (alteracao.type == "added") {
                            renderizar_dados(alteracao.doc);
                        }
                        else if(alteracao.type == 'removed') {
                            let liii = lista_espaco_lidos.querySelector('[dados-id =' + alteracao.doc.id + ']');
                            lista_espaco_lidos.removeChild(liii);
                        }
                    })
                })
            }
        })