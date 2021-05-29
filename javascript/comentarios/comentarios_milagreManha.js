const milagreManha_espaco_comentarios = document.getElementById('milagreManha-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_milagreManha (commentIndividual_milagreManha) {
    //div pai
    let divMae_milagreManha = document.createElement("div"); 
    divMae_milagreManha.className = "espaco caixa-comentarios";
    divMae_milagreManha.setAttribute('id-comentmilagreManha', commentIndividual_milagreManha.id); 

    //div comentarios
    let divComent_milagreManha = document.createElement("div"); 
    divComent_milagreManha.textContent = commentIndividual_milagreManha.data().comentario_milagreManha;

    //botao   
    let apagar_milagreManha = document.createElement("button"); 

    let icone_milagreManha = document.createElement("i"); 
    icone_milagreManha.className = "fas fa-trash"; 

    //acrescentando
    apagar_milagreManha.appendChild(icone_milagreManha); 
    divMae_milagreManha.appendChild(divComent_milagreManha); 

    milagreManha_espaco_comentarios.appendChild(divMae_milagreManha); 

    fs.collection("Comentarios_milagreManha").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_milagreManha.appendChild(apagar_milagreManha); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_milagreManha.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentmilagreManha'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_milagreManha.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_milagreManha').doc(id).delete();
                console.log(commentIndividual_milagreManha.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_milagreManha = document.getElementById('campo_comentario_milagreManha'); 


campo_comentario_milagreManha.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_milagreManha = campo_comentario_milagreManha['comentario_milagreManha'].value;
    let id = counter += 1;
    campo_comentario_milagreManha.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_milagreManha').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_milagreManha           
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
        fs.collection('Comentarios_milagreManha').onSnapshot((snapshot) => {
             let edicoes_milagreManha = snapshot.docChanges();
             edicoes_milagreManha.forEach(edicao_milagreManha => {
                 if (edicao_milagreManha.type == "added") {
                    addComentario_milagreManha(edicao_milagreManha.doc); 
                    }
                    else if(edicao_milagreManha.type == "removed") {
                        let aa = milagreManha_espaco_comentarios.querySelector('[id-comentmilagreManha =' + edicao_milagreManha.doc.id + ']'); 
                        milagreManha_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
