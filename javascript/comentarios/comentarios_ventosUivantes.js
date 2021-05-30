const ventosUivantes_espaco_comentarios = document.getElementById('ventosUivantes-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_ventosUivantes (commentIndividual_ventosUivantes) {
    //div pai
    let divMae_ventosUivantes = document.createElement("div"); 
    divMae_ventosUivantes.className = "espaco caixa-comentarios";
    divMae_ventosUivantes.setAttribute('id-comentventosUivantes', commentIndividual_ventosUivantes.id); 

    //div comentarios
    let divComent_ventosUivantes = document.createElement("div"); 
    divComent_ventosUivantes.textContent = commentIndividual_ventosUivantes.data().comentario_ventosUivantes;

    //botao   
    let apagar_ventosUivantes = document.createElement("button"); 

    let icone_ventosUivantes = document.createElement("i"); 
    icone_ventosUivantes.className = "fas fa-trash"; 

    //acrescentando
    apagar_ventosUivantes.appendChild(icone_ventosUivantes); 
    divMae_ventosUivantes.appendChild(divComent_ventosUivantes); 

    ventosUivantes_espaco_comentarios.appendChild(divMae_ventosUivantes); 

    fs.collection("Comentarios_ventosUivantes").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_ventosUivantes.appendChild(apagar_ventosUivantes); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_ventosUivantes.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentventosUivantes'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_ventosUivantes.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_ventosUivantes').doc(id).delete();
                console.log(commentIndividual_ventosUivantes.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_ventosUivantes = document.getElementById('campo_comentario_ventosUivantes'); 


campo_comentario_ventosUivantes.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_ventosUivantes = campo_comentario_ventosUivantes['comentario_ventosUivantes'].value;
    let id = counter += 1;
    campo_comentario_ventosUivantes.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_ventosUivantes').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_ventosUivantes           
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
        fs.collection('Comentarios_ventosUivantes').onSnapshot((snapshot) => {
             let edicoes_ventosUivantes = snapshot.docChanges();
             edicoes_ventosUivantes.forEach(edicao_ventosUivantes => {
                 if (edicao_ventosUivantes.type == "added") {
                    addComentario_ventosUivantes(edicao_ventosUivantes.doc); 
                    }
                    else if(edicao_ventosUivantes.type == "removed") {
                        let aa = ventosUivantes_espaco_comentarios.querySelector('[id-comentventosUivantes =' + edicao_ventosUivantes.doc.id + ']'); 
                        ventosUivantes_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
