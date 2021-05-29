const coragemImperfeito_espaco_comentarios = document.getElementById('coragemImperfeito-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_coragemImperfeito (commentIndividual_coragemImperfeito) {
    //div pai
    let divMae_coragemImperfeito = document.createElement("div"); 
    divMae_coragemImperfeito.className = "espaco caixa-comentarios";
    divMae_coragemImperfeito.setAttribute('id-comentcoragemImperfeito', commentIndividual_coragemImperfeito.id); 

    //div comentarios
    let divComent_coragemImperfeito = document.createElement("div"); 
    divComent_coragemImperfeito.textContent = commentIndividual_coragemImperfeito.data().comentario_coragemImperfeito;

    //botao   
    let apagar_coragemImperfeito = document.createElement("button"); 

    let icone_coragemImperfeito = document.createElement("i"); 
    icone_coragemImperfeito.className = "fas fa-trash"; 

    //acrescentando
    apagar_coragemImperfeito.appendChild(icone_coragemImperfeito); 
    divMae_coragemImperfeito.appendChild(divComent_coragemImperfeito); 

    coragemImperfeito_espaco_comentarios.appendChild(divMae_coragemImperfeito); 

    fs.collection("Comentarios_coragemImperfeito").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_coragemImperfeito.appendChild(apagar_coragemImperfeito); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_coragemImperfeito.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentcoragemImperfeito'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_coragemImperfeito.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_coragemImperfeito').doc(id).delete();
                console.log(commentIndividual_coragemImperfeito.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_coragemImperfeito = document.getElementById('campo_comentario_coragemImperfeito'); 


campo_comentario_coragemImperfeito.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_coragemImperfeito = campo_comentario_coragemImperfeito['comentario_coragemImperfeito'].value;
    let id = counter += 1;
    campo_comentario_coragemImperfeito.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_coragemImperfeito').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_coragemImperfeito           
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
        fs.collection('Comentarios_coragemImperfeito').onSnapshot((snapshot) => {
             let edicoes_coragemImperfeito = snapshot.docChanges();
             edicoes_coragemImperfeito.forEach(edicao_coragemImperfeito => {
                 if (edicao_coragemImperfeito.type == "added") {
                    addComentario_coragemImperfeito(edicao_coragemImperfeito.doc); 
                    }
                    else if(edicao_coragemImperfeito.type == "removed") {
                        let aa = coragemImperfeito_espaco_comentarios.querySelector('[id-comentcoragemImperfeito =' + edicao_coragemImperfeito.doc.id + ']'); 
                        coragemImperfeito_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
