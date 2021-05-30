const orgulhoPreconceito_espaco_comentarios = document.getElementById('orgulhoPreconceito-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_orgulhoPreconceito (commentIndividual_orgulhoPreconceito) {
    //div pai
    let divMae_orgulhoPreconceito = document.createElement("div"); 
    divMae_orgulhoPreconceito.className = "espaco caixa-comentarios";
    divMae_orgulhoPreconceito.setAttribute('id-comentorgulhoPreconceito', commentIndividual_orgulhoPreconceito.id); 

    //div comentarios
    let divComent_orgulhoPreconceito = document.createElement("div"); 
    divComent_orgulhoPreconceito.textContent = commentIndividual_orgulhoPreconceito.data().comentario_orgulhoPreconceito;

    //botao   
    let apagar_orgulhoPreconceito = document.createElement("button"); 

    let icone_orgulhoPreconceito = document.createElement("i"); 
    icone_orgulhoPreconceito.className = "fas fa-trash"; 

    //acrescentando
    apagar_orgulhoPreconceito.appendChild(icone_orgulhoPreconceito); 
    divMae_orgulhoPreconceito.appendChild(divComent_orgulhoPreconceito); 

    orgulhoPreconceito_espaco_comentarios.appendChild(divMae_orgulhoPreconceito); 

    fs.collection("Comentarios_orgulhoPreconceito").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_orgulhoPreconceito.appendChild(apagar_orgulhoPreconceito); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_orgulhoPreconceito.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentorgulhoPreconceito'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_orgulhoPreconceito.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_orgulhoPreconceito').doc(id).delete();
                console.log(commentIndividual_orgulhoPreconceito.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_orgulhoPreconceito = document.getElementById('campo_comentario_orgulhoPreconceito'); 


campo_comentario_orgulhoPreconceito.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_orgulhoPreconceito = campo_comentario_orgulhoPreconceito['comentario_orgulhoPreconceito'].value;
    let id = counter += 1;
    campo_comentario_orgulhoPreconceito.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_orgulhoPreconceito').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_orgulhoPreconceito           
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
        fs.collection('Comentarios_orgulhoPreconceito').onSnapshot((snapshot) => {
             let edicoes_orgulhoPreconceito = snapshot.docChanges();
             edicoes_orgulhoPreconceito.forEach(edicao_orgulhoPreconceito => {
                 if (edicao_orgulhoPreconceito.type == "added") {
                    addComentario_orgulhoPreconceito(edicao_orgulhoPreconceito.doc); 
                    }
                    else if(edicao_orgulhoPreconceito.type == "removed") {
                        let aa = orgulhoPreconceito_espaco_comentarios.querySelector('[id-comentorgulhoPreconceito =' + edicao_orgulhoPreconceito.doc.id + ']'); 
                        orgulhoPreconceito_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
