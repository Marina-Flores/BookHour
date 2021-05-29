const poderHabito_espaco_comentarios = document.getElementById('poderHabito-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_poderHabito (commentIndividual_poderHabito) {
    //div pai
    let divMae_poderHabito = document.createElement("div"); 
    divMae_poderHabito.className = "espaco caixa-comentarios";
    divMae_poderHabito.setAttribute('id-comentpoderHabito', commentIndividual_poderHabito.id); 

    //div comentarios
    let divComent_poderHabito = document.createElement("div"); 
    divComent_poderHabito.textContent = commentIndividual_poderHabito.data().comentario_poderHabito;

    //botao   
    let apagar_poderHabito = document.createElement("button"); 

    let icone_poderHabito = document.createElement("i"); 
    icone_poderHabito.className = "fas fa-trash"; 

    //acrescentando
    apagar_poderHabito.appendChild(icone_poderHabito); 
    divMae_poderHabito.appendChild(divComent_poderHabito); 

    poderHabito_espaco_comentarios.appendChild(divMae_poderHabito); 

    fs.collection("Comentarios_poderHabito").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_poderHabito.appendChild(apagar_poderHabito); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_poderHabito.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentpoderHabito'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_poderHabito.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_poderHabito').doc(id).delete();
                console.log(commentIndividual_poderHabito.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_poderHabito = document.getElementById('campo_comentario_poderHabito'); 


campo_comentario_poderHabito.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_poderHabito = campo_comentario_poderHabito['comentario_poderHabito'].value;
    let id = counter += 1;
    campo_comentario_poderHabito.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_poderHabito').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_poderHabito           
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
        fs.collection('Comentarios_poderHabito').onSnapshot((snapshot) => {
             let edicoes_poderHabito = snapshot.docChanges();
             edicoes_poderHabito.forEach(edicao_poderHabito => {
                 if (edicao_poderHabito.type == "added") {
                    addComentario_poderHabito(edicao_poderHabito.doc); 
                    }
                    else if(edicao_poderHabito.type == "removed") {
                        let aa = poderHabito_espaco_comentarios.querySelector('[id-comentpoderHabito =' + edicao_poderHabito.doc.id + ']'); 
                        poderHabito_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
