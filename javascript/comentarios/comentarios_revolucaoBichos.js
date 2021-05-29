const revolucaoBichos_espaco_comentarios = document.getElementById('revolucaoBichos-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_revolucaoBichos (commentIndividual_revolucaoBichos) {
    //div pai
    let divMae_revolucaoBichos = document.createElement("div"); 
    divMae_revolucaoBichos.className = "espaco caixa-comentarios";
    divMae_revolucaoBichos.setAttribute('id-comentrevolucaoBichos', commentIndividual_revolucaoBichos.id); 

    //div comentarios
    let divComent_revolucaoBichos = document.createElement("div"); 
    divComent_revolucaoBichos.textContent = commentIndividual_revolucaoBichos.data().comentario_revolucaoBichos;

    //botao   
    let apagar_revolucaoBichos = document.createElement("button"); 

    let icone_revolucaoBichos = document.createElement("i"); 
    icone_revolucaoBichos.className = "fas fa-trash"; 

    //acrescentando
    apagar_revolucaoBichos.appendChild(icone_revolucaoBichos); 
    divMae_revolucaoBichos.appendChild(divComent_revolucaoBichos); 

    revolucaoBichos_espaco_comentarios.appendChild(divMae_revolucaoBichos); 

    fs.collection("Comentarios_revolucaoBichos").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_revolucaoBichos.appendChild(apagar_revolucaoBichos); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_revolucaoBichos.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentrevolucaoBichos'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_revolucaoBichos.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_revolucaoBichos').doc(id).delete();
                console.log(commentIndividual_revolucaoBichos.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_revolucaoBichos = document.getElementById('campo_comentario_revolucaoBichos'); 


campo_comentario_revolucaoBichos.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_revolucaoBichos = campo_comentario_revolucaoBichos['comentario_revolucaoBichos'].value;
    let id = counter += 1;
    campo_comentario_revolucaoBichos.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_revolucaoBichos').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_revolucaoBichos           
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
        fs.collection('Comentarios_revolucaoBichos').onSnapshot((snapshot) => {
             let edicoes_revolucaoBichos = snapshot.docChanges();
             edicoes_revolucaoBichos.forEach(edicao_revolucaoBichos => {
                 if (edicao_revolucaoBichos.type == "added") {
                    addComentario_revolucaoBichos(edicao_revolucaoBichos.doc); 
                    }
                    else if(edicao_revolucaoBichos.type == "removed") {
                        let aa = revolucaoBichos_espaco_comentarios.querySelector('[id-comentrevolucaoBichos =' + edicao_revolucaoBichos.doc.id + ']'); 
                        revolucaoBichos_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
