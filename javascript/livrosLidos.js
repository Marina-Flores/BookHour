const lista_espaco_lidos = document.getElementById('lista-espaco_lidos');

// Adicionando na lista de livros lidos // 

function renderizar_dados (doc_Individual) {
    //div pai
    let paiDiv = document.createElement("div");
    paiDiv.className = "espaco_lidos caixa_lidos";
    paiDiv.setAttribute('dados-id', doc_Individual.id); 

    //div lista
    let listaDiv = document.createElement("div");
    listaDiv.textContent = doc_Individual.data().lido; 

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