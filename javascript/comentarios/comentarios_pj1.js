const pj1_espaco_comentarios = document.getElementById('pj1-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_pj1 (commentIndividual_pj1) {
    //div pai
    let divMae_pj1 = document.createElement("div"); 
    divMae_pj1.className = "espaco caixa-comentarios";
    divMae_pj1.setAttribute('id-comentpj1', commentIndividual_pj1.id); 

    //div comentarios
    let divComent_pj1 = document.createElement("div"); 
    divComent_pj1.textContent = commentIndividual_pj1.data().comentario_pj1;

    //botao   
    let apagar_pj1 = document.createElement("button"); 

    let icone_pj1 = document.createElement("i"); 
    icone_pj1.className = "fas fa-trash"; 

    //acrescentando
    apagar_pj1.appendChild(icone_pj1); 
    divMae_pj1.appendChild(divComent_pj1); 

    pj1_espaco_comentarios.appendChild(divMae_pj1); 

    fs.collection("Comentarios_pj1").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_pj1.appendChild(apagar_pj1); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_pj1.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentpj1'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_pj1.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_pj1').doc(id).delete();
                console.log(commentIndividual_pj1.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_pj1 = document.getElementById('campo_comentario_pj1'); 


campo_comentario_pj1.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_pj1 = campo_comentario_pj1['comentario_pj1'].value;
    let id = counter += 1;
    campo_comentario_pj1.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_pj1').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_pj1           
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
        fs.collection('Comentarios_pj1').onSnapshot((snapshot) => {
             let edicoes_pj1 = snapshot.docChanges();
             edicoes_pj1.forEach(edicao_pj1 => {
                 if (edicao_pj1.type == "added") {
                    addComentario_pj1(edicao_pj1.doc); 
                    }
                    else if(edicao_pj1.type == "removed") {
                        let aa = pj1_espaco_comentarios.querySelector('[id-comentpj1 =' + edicao_pj1.doc.id + ']'); 
                        pj1_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
