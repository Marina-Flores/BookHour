const iluminado_espaco_comentarios = document.getElementById('iluminado-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_iluminado (commentIndividual_iluminado) {
    //div pai
    let divMae_iluminado = document.createElement("div"); 
    divMae_iluminado.className = "espaco caixa-comentarios";
    divMae_iluminado.setAttribute('id-comentiluminado', commentIndividual_iluminado.id); 

    //div comentarios
    let divComent_iluminado = document.createElement("div"); 
    divComent_iluminado.textContent = commentIndividual_iluminado.data().comentario_iluminado;

    //botao   
    let apagar_iluminado = document.createElement("button"); 

    let icone_iluminado = document.createElement("i"); 
    icone_iluminado.className = "fas fa-trash"; 

    //acrescentando
    apagar_iluminado.appendChild(icone_iluminado); 
    divMae_iluminado.appendChild(divComent_iluminado); 

    iluminado_espaco_comentarios.appendChild(divMae_iluminado); 

    fs.collection("Comentarios_iluminado").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_iluminado.appendChild(apagar_iluminado); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_iluminado.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentiluminado'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_iluminado.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_iluminado').doc(id).delete();
                console.log(commentIndividual_iluminado.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_iluminado = document.getElementById('campo_comentario_iluminado'); 


campo_comentario_iluminado.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_iluminado = campo_comentario_iluminado['comentario_iluminado'].value;
    let id = counter += 1;
    campo_comentario_iluminado.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_iluminado').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_iluminado           
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
        fs.collection('Comentarios_iluminado').onSnapshot((snapshot) => {
             let edicoes_iluminado = snapshot.docChanges();
             edicoes_iluminado.forEach(edicao_iluminado => {
                 if (edicao_iluminado.type == "added") {
                    addComentario_iluminado(edicao_iluminado.doc); 
                    }
                    else if(edicao_iluminado.type == "removed") {
                        let aa = iluminado_espaco_comentarios.querySelector('[id-comentiluminado =' + edicao_iluminado.doc.id + ']'); 
                        iluminado_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
