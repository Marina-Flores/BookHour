const poderAcao_espaco_comentarios = document.getElementById('poderAcao-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_poderAcao (commentIndividual_poderAcao) {
    //div pai
    let divMae_poderAcao = document.createElement("div"); 
    divMae_poderAcao.className = "espaco caixa-comentarios";
    divMae_poderAcao.setAttribute('id-comentpoderAcao', commentIndividual_poderAcao.id); 

    //div comentarios
    let divComent_poderAcao = document.createElement("div"); 
    divComent_poderAcao.textContent = commentIndividual_poderAcao.data().comentario_poderAcao;

    //botao   
    let apagar_poderAcao = document.createElement("button"); 

    let icone_poderAcao = document.createElement("i"); 
    icone_poderAcao.className = "fas fa-trash"; 

    //acrescentando
    apagar_poderAcao.appendChild(icone_poderAcao); 
    divMae_poderAcao.appendChild(divComent_poderAcao); 

    poderAcao_espaco_comentarios.appendChild(divMae_poderAcao); 

    fs.collection("Comentarios_poderAcao").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_poderAcao.appendChild(apagar_poderAcao); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_poderAcao.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentpoderAcao'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_poderAcao.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_poderAcao').doc(id).delete();
                console.log(commentIndividual_poderAcao.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_poderAcao = document.getElementById('campo_comentario_poderAcao'); 


campo_comentario_poderAcao.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_poderAcao = campo_comentario_poderAcao['comentario_poderAcao'].value;
    let id = counter += 1;
    campo_comentario_poderAcao.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_poderAcao').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_poderAcao           
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
        fs.collection('Comentarios_poderAcao').onSnapshot((snapshot) => {
             let edicoes_poderAcao = snapshot.docChanges();
             edicoes_poderAcao.forEach(edicao_poderAcao => {
                 if (edicao_poderAcao.type == "added") {
                    addComentario_poderAcao(edicao_poderAcao.doc); 
                    }
                    else if(edicao_poderAcao.type == "removed") {
                        let aa = poderAcao_espaco_comentarios.querySelector('[id-comentpoderAcao =' + edicao_poderAcao.doc.id + ']'); 
                        poderAcao_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
