const pj2_espaco_comentarios = document.getElementById('pj2-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_pj2 (commentIndividual_pj2) {
    //div pai
    let divMae_pj2 = document.createElement("div"); 
    divMae_pj2.className = "espaco caixa-comentarios";
    divMae_pj2.setAttribute('id-comentpj2', commentIndividual_pj2.id); 

    //div comentarios
    let divComent_pj2 = document.createElement("div"); 
    divComent_pj2.textContent = commentIndividual_pj2.data().comentario_pj2;

    //botao   
    let apagar_pj2 = document.createElement("button"); 

    let icone_pj2 = document.createElement("i"); 
    icone_pj2.className = "fas fa-trash"; 

    //acrescentando
    apagar_pj2.appendChild(icone_pj2); 
    divMae_pj2.appendChild(divComent_pj2); 

    pj2_espaco_comentarios.appendChild(divMae_pj2); 

    fs.collection("Comentarios_pj2").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_pj2.appendChild(apagar_pj2); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_pj2.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentpj2'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_pj2.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_pj2').doc(id).delete();
                console.log(commentIndividual_pj2.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_pj2 = document.getElementById('campo_comentario_pj2'); 


campo_comentario_pj2.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_pj2 = campo_comentario_pj2['comentario_pj2'].value;
    let id = counter += 2;
    campo_comentario_pj2.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_pj2').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_pj2           
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
        fs.collection('Comentarios_pj2').onSnapshot((snapshot) => {
             let edicoes_pj2 = snapshot.docChanges();
             edicoes_pj2.forEach(edicao_pj2 => {
                 if (edicao_pj2.type == "added") {
                    addComentario_pj2(edicao_pj2.doc); 
                    }
                    else if(edicao_pj2.type == "removed") {
                        let aa = pj2_espaco_comentarios.querySelector('[id-comentpj2 =' + edicao_pj2.doc.id + ']'); 
                        pj2_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
