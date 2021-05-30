const it_espaco_comentarios = document.getElementById('it-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_it (commentIndividual_it) {
    //div pai
    let divMae_it = document.createElement("div"); 
    divMae_it.className = "espaco caixa-comentarios";
    divMae_it.setAttribute('id-comentit', commentIndividual_it.id); 

    //div comentarios
    let divComent_it = document.createElement("div"); 
    divComent_it.textContent = commentIndividual_it.data().comentario_it;

    //botao   
    let apagar_it = document.createElement("button"); 

    let icone_it = document.createElement("i"); 
    icone_it.className = "fas fa-trash"; 

    //acrescentando
    apagar_it.appendChild(icone_it); 
    divMae_it.appendChild(divComent_it); 

    it_espaco_comentarios.appendChild(divMae_it); 

    fs.collection("Comentarios_it").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_it.appendChild(apagar_it); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_it.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentit'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_it.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_it').doc(id).delete();
                console.log(commentIndividual_it.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_it = document.getElementById('campo_comentario_it'); 


campo_comentario_it.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_it = campo_comentario_it['comentario_it'].value;
    let id = counter += 1;
    campo_comentario_it.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_it').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_it           
            }).then( () => {
                alert("Comentário adicionado")
            })                  
        }else {
            console.log("Errou tudo kk");
        }    
        
        
    })
})

 //realtime listeners 
 auth.onAuthStateChanged(user => {
     if (user){
        fs.collection('Comentarios_it').onSnapshot((snapshot) => {
             let edicoes_it = snapshot.docChanges();
             edicoes_it.forEach(edicao_it => {
                 if (edicao_it.type == "added") {
                    addComentario_it(edicao_it.doc); 
                    }
                    else if(edicao_it.type == "removed") {
                        let aa = it_espaco_comentarios.querySelector('[id-comentit =' + edicao_it.doc.id + ']'); 
                        it_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
