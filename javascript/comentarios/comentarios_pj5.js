const pj5_espaco_comentarios = document.getElementById('pj5-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_pj5 (commentIndividual_pj5) {
    //div pai
    let divMae_pj5 = document.createElement("div"); 
    divMae_pj5.className = "espaco caixa-comentarios";
    divMae_pj5.setAttribute('id-comentpj5', commentIndividual_pj5.id); 

    //div comentarios
    let divComent_pj5 = document.createElement("div"); 
    divComent_pj5.textContent = commentIndividual_pj5.data().comentario_pj5;

    //botao   
    let apagar_pj5 = document.createElement("button"); 

    let icone_pj5 = document.createElement("i"); 
    icone_pj5.className = "fas fa-trash"; 

    //acrescentando
    apagar_pj5.appendChild(icone_pj5); 
    divMae_pj5.appendChild(divComent_pj5); 

    pj5_espaco_comentarios.appendChild(divMae_pj5); 

    fs.collection("Comentarios_pj5").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_pj5.appendChild(apagar_pj5); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_pj5.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentpj5'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_pj5.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_pj5').doc(id).delete();
                console.log(commentIndividual_pj5.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_pj5 = document.getElementById('campo_comentario_pj5'); 


campo_comentario_pj5.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_pj5 = campo_comentario_pj5['comentario_pj5'].value;
    let id = counter += 5;
    campo_comentario_pj5.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_pj5').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_pj5           
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
        fs.collection('Comentarios_pj5').onSnapshot((snapshot) => {
             let edicoes_pj5 = snapshot.docChanges();
             edicoes_pj5.forEach(edicao_pj5 => {
                 if (edicao_pj5.type == "added") {
                    addComentario_pj5(edicao_pj5.doc); 
                    }
                    else if(edicao_pj5.type == "removed") {
                        let aa = pj5_espaco_comentarios.querySelector('[id-comentpj5 =' + edicao_pj5.doc.id + ']'); 
                        pj5_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
