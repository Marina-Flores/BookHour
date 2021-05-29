const contoAia_espaco_comentarios = document.getElementById('contoAia-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_contoAia (commentIndividual_contoAia) {
    //div pai
    let divMae_contoAia = document.createElement("div"); 
    divMae_contoAia.className = "espaco caixa-comentarios";
    divMae_contoAia.setAttribute('id-comentcontoAia', commentIndividual_contoAia.id); 

    //div comentarios
    let divComent_contoAia = document.createElement("div"); 
    divComent_contoAia.textContent = commentIndividual_contoAia.data().comentario_contoAia;

    //botao   
    let apagar_contoAia = document.createElement("button"); 

    let icone_contoAia = document.createElement("i"); 
    icone_contoAia.className = "fas fa-trash"; 

    //acrescentando
    apagar_contoAia.appendChild(icone_contoAia); 
    divMae_contoAia.appendChild(divComent_contoAia); 

    contoAia_espaco_comentarios.appendChild(divMae_contoAia); 

    fs.collection("Comentarios_contoAia").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_contoAia.appendChild(apagar_contoAia); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_contoAia.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentcontoAia'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_contoAia.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_contoAia').doc(id).delete();
                console.log(commentIndividual_contoAia.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_contoAia = document.getElementById('campo_comentario_contoAia'); 


campo_comentario_contoAia.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_contoAia = campo_comentario_contoAia['comentario_contoAia'].value;
    let id = counter += 1;
    campo_comentario_contoAia.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_contoAia').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_contoAia           
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
        fs.collection('Comentarios_contoAia').onSnapshot((snapshot) => {
             let edicoes_contoAia = snapshot.docChanges();
             edicoes_contoAia.forEach(edicao_contoAia => {
                 if (edicao_contoAia.type == "added") {
                    addComentario_contoAia(edicao_contoAia.doc); 
                    }
                    else if(edicao_contoAia.type == "removed") {
                        let aa = contoAia_espaco_comentarios.querySelector('[id-comentcontoAia =' + edicao_contoAia.doc.id + ']'); 
                        contoAia_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
