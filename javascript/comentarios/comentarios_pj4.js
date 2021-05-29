const pj4_espaco_comentarios = document.getElementById('pj4-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_pj4 (commentIndividual_pj4) {
    //div pai
    let divMae_pj4 = document.createElement("div"); 
    divMae_pj4.className = "espaco caixa-comentarios";
    divMae_pj4.setAttribute('id-comentpj4', commentIndividual_pj4.id); 

    //div comentarios
    let divComent_pj4 = document.createElement("div"); 
    divComent_pj4.textContent = commentIndividual_pj4.data().comentario_pj4;

    //botao   
    let apagar_pj4 = document.createElement("button"); 

    let icone_pj4 = document.createElement("i"); 
    icone_pj4.className = "fas fa-trash"; 

    //acrescentando
    apagar_pj4.appendChild(icone_pj4); 
    divMae_pj4.appendChild(divComent_pj4); 

    pj4_espaco_comentarios.appendChild(divMae_pj4); 

    fs.collection("Comentarios_pj4").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_pj4.appendChild(apagar_pj4); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_pj4.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentpj4'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_pj4.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_pj4').doc(id).delete();
                console.log(commentIndividual_pj4.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_pj4 = document.getElementById('campo_comentario_pj4'); 


campo_comentario_pj4.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_pj4 = campo_comentario_pj4['comentario_pj4'].value;
    let id = counter += 4;
    campo_comentario_pj4.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_pj4').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_pj4           
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
        fs.collection('Comentarios_pj4').onSnapshot((snapshot) => {
             let edicoes_pj4 = snapshot.docChanges();
             edicoes_pj4.forEach(edicao_pj4 => {
                 if (edicao_pj4.type == "added") {
                    addComentario_pj4(edicao_pj4.doc); 
                    }
                    else if(edicao_pj4.type == "removed") {
                        let aa = pj4_espaco_comentarios.querySelector('[id-comentpj4 =' + edicao_pj4.doc.id + ']'); 
                        pj4_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
