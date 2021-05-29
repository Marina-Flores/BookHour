const tortoArado_espaco_comentarios = document.getElementById('tortoArado-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_tortoArado (commentIndividual_tortoArado) {
    //div pai
    let divMae_tortoArado = document.createElement("div"); 
    divMae_tortoArado.className = "espaco caixa-comentarios";
    divMae_tortoArado.setAttribute('id-comenttortoArado', commentIndividual_tortoArado.id); 

    //div comentarios
    let divComent_tortoArado = document.createElement("div"); 
    divComent_tortoArado.textContent = commentIndividual_tortoArado.data().comentario_tortoArado;

    //botao   
    let apagar_tortoArado = document.createElement("button"); 

    let icone_tortoArado = document.createElement("i"); 
    icone_tortoArado.className = "fas fa-trash"; 

    //acrescentando
    apagar_tortoArado.appendChild(icone_tortoArado); 
    divMae_tortoArado.appendChild(divComent_tortoArado); 

    tortoArado_espaco_comentarios.appendChild(divMae_tortoArado); 

    fs.collection("Comentarios_tortoArado").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_tortoArado.appendChild(apagar_tortoArado); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_tortoArado.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comenttortoArado'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_tortoArado.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_tortoArado').doc(id).delete();
                console.log(commentIndividual_tortoArado.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_tortoArado = document.getElementById('campo_comentario_tortoArado'); 


campo_comentario_tortoArado.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_tortoArado = campo_comentario_tortoArado['comentario_tortoArado'].value;
    let id = counter += 1;
    campo_comentario_tortoArado.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_tortoArado').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_tortoArado           
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
        fs.collection('Comentarios_tortoArado').onSnapshot((snapshot) => {
             let edicoes_tortoArado = snapshot.docChanges();
             edicoes_tortoArado.forEach(edicao_tortoArado => {
                 if (edicao_tortoArado.type == "added") {
                    addComentario_tortoArado(edicao_tortoArado.doc); 
                    }
                    else if(edicao_tortoArado.type == "removed") {
                        let aa = tortoArado_espaco_comentarios.querySelector('[id-comenttortoArado =' + edicao_tortoArado.doc.id + ']'); 
                        tortoArado_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
