const garotaLago_espaco_comentarios = document.getElementById('garotaLago-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_garotaLago (commentIndividual_garotaLago) {
    //div pai
    let divMae_garotaLago = document.createElement("div"); 
    divMae_garotaLago.className = "espaco caixa-comentarios";
    divMae_garotaLago.setAttribute('id-comentgarotaLago', commentIndividual_garotaLago.id); 

    //div comentarios
    let divComent_garotaLago = document.createElement("div"); 
    divComent_garotaLago.textContent = commentIndividual_garotaLago.data().comentario_garotaLago;

    //botao   
    let apagar_garotaLago = document.createElement("button"); 

    let icone_garotaLago = document.createElement("i"); 
    icone_garotaLago.className = "fas fa-trash"; 

    //acrescentando
    apagar_garotaLago.appendChild(icone_garotaLago); 
    divMae_garotaLago.appendChild(divComent_garotaLago); 

    garotaLago_espaco_comentarios.appendChild(divMae_garotaLago); 

    fs.collection("Comentarios_garotaLago").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_garotaLago.appendChild(apagar_garotaLago); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_garotaLago.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentgarotaLago'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_garotaLago.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_garotaLago').doc(id).delete();
                console.log(commentIndividual_garotaLago.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_garotaLago = document.getElementById('campo_comentario_garotaLago'); 


campo_comentario_garotaLago.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_garotaLago = campo_comentario_garotaLago['comentario_garotaLago'].value;
    let id = counter += 1;
    campo_comentario_garotaLago.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_garotaLago').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_garotaLago           
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
        fs.collection('Comentarios_garotaLago').onSnapshot((snapshot) => {
             let edicoes_garotaLago = snapshot.docChanges();
             edicoes_garotaLago.forEach(edicao_garotaLago => {
                 if (edicao_garotaLago.type == "added") {
                    addComentario_garotaLago(edicao_garotaLago.doc); 
                    }
                    else if(edicao_garotaLago.type == "removed") {
                        let aa = garotaLago_espaco_comentarios.querySelector('[id-comentgarotaLago =' + edicao_garotaLago.doc.id + ']'); 
                        garotaLago_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
