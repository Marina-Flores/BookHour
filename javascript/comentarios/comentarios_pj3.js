const pj3_espaco_comentarios = document.getElementById('pj3-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_pj3 (commentIndividual_pj3) {
    //div pai
    let divMae_pj3 = document.createElement("div"); 
    divMae_pj3.className = "espaco caixa-comentarios";
    divMae_pj3.setAttribute('id-comentpj3', commentIndividual_pj3.id); 

    //div comentarios
    let divComent_pj3 = document.createElement("div"); 
    divComent_pj3.textContent = commentIndividual_pj3.data().comentario_pj3;

    //botao   
    let apagar_pj3 = document.createElement("button"); 

    let icone_pj3 = document.createElement("i"); 
    icone_pj3.className = "fas fa-trash"; 

    //acrescentando
    apagar_pj3.appendChild(icone_pj3); 
    divMae_pj3.appendChild(divComent_pj3); 

    pj3_espaco_comentarios.appendChild(divMae_pj3); 

    fs.collection("Comentarios_pj3").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_pj3.appendChild(apagar_pj3); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_pj3.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentpj3'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_pj3.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_pj3').doc(id).delete();
                console.log(commentIndividual_pj3.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_pj3 = document.getElementById('campo_comentario_pj3'); 


campo_comentario_pj3.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_pj3 = campo_comentario_pj3['comentario_pj3'].value;
    let id = counter += 3;
    campo_comentario_pj3.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_pj3').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_pj3           
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
        fs.collection('Comentarios_pj3').onSnapshot((snapshot) => {
             let edicoes_pj3 = snapshot.docChanges();
             edicoes_pj3.forEach(edicao_pj3 => {
                 if (edicao_pj3.type == "added") {
                    addComentario_pj3(edicao_pj3.doc); 
                    }
                    else if(edicao_pj3.type == "removed") {
                        let aa = pj3_espaco_comentarios.querySelector('[id-comentpj3 =' + edicao_pj3.doc.id + ']'); 
                        pj3_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
