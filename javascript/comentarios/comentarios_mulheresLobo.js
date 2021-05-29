const mulheresLobo_espaco_comentarios = document.getElementById('mulheresLobo-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_mulheresLobo (commentIndividual_mulheresLobo) {
    //div pai
    let divMae_mulheresLobo = document.createElement("div"); 
    divMae_mulheresLobo.className = "espaco caixa-comentarios";
    divMae_mulheresLobo.setAttribute('id-comentmulheresLobo', commentIndividual_mulheresLobo.id); 

    //div comentarios
    let divComent_mulheresLobo = document.createElement("div"); 
    divComent_mulheresLobo.textContent = commentIndividual_mulheresLobo.data().comentario_mulheresLobo;

    //botao   
    let apagar_mulheresLobo = document.createElement("button"); 

    let icone_mulheresLobo = document.createElement("i"); 
    icone_mulheresLobo.className = "fas fa-trash"; 

    //acrescentando
    apagar_mulheresLobo.appendChild(icone_mulheresLobo); 
    divMae_mulheresLobo.appendChild(divComent_mulheresLobo); 

    mulheresLobo_espaco_comentarios.appendChild(divMae_mulheresLobo); 

    fs.collection("Comentarios_mulheresLobo").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_mulheresLobo.appendChild(apagar_mulheresLobo); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_mulheresLobo.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentmulheresLobo'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_mulheresLobo.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_mulheresLobo').doc(id).delete();
                console.log(commentIndividual_mulheresLobo.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_mulheresLobo = document.getElementById('campo_comentario_mulheresLobo'); 


campo_comentario_mulheresLobo.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_mulheresLobo = campo_comentario_mulheresLobo['comentario_mulheresLobo'].value;
    let id = counter += 1;
    campo_comentario_mulheresLobo.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_mulheresLobo').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_mulheresLobo           
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
        fs.collection('Comentarios_mulheresLobo').onSnapshot((snapshot) => {
             let edicoes_mulheresLobo = snapshot.docChanges();
             edicoes_mulheresLobo.forEach(edicao_mulheresLobo => {
                 if (edicao_mulheresLobo.type == "added") {
                    addComentario_mulheresLobo(edicao_mulheresLobo.doc); 
                    }
                    else if(edicao_mulheresLobo.type == "removed") {
                        let aa = mulheresLobo_espaco_comentarios.querySelector('[id-comentmulheresLobo =' + edicao_mulheresLobo.doc.id + ']'); 
                        mulheresLobo_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
