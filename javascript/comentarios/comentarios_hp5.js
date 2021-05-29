const hp5_espaco_comentarios = document.getElementById('hp5-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_HP5 (commentIndividual_HP5) {
    //div pai
    let divMae_hp5 = document.createElement("div"); 
    divMae_hp5.className = "espaco caixa-comentarios";
    divMae_hp5.setAttribute('id-comentHP5', commentIndividual_HP5.id); 

    //div comentarios
    let divComent_hp5 = document.createElement("div"); 
    divComent_hp5.textContent = commentIndividual_HP5.data().comentario_HP5;

    //botao   
    let apagar_HP5 = document.createElement("button"); 

    let icone_HP5 = document.createElement("i"); 
    icone_HP5.className = "fas fa-trash"; 

    //acrescentando
    apagar_HP5.appendChild(icone_HP5); 
    divMae_hp5.appendChild(divComent_hp5); 

    hp5_espaco_comentarios.appendChild(divMae_hp5); 

    fs.collection("Comentarios_HP5").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_hp5.appendChild(apagar_HP5); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_HP5.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentHP5'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_HP5.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_HP5').doc(id).delete();
                console.log(commentIndividual_HP5.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_hp5 = document.getElementById('campo_comentario_hp5'); 


campo_comentario_hp5.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_HP5 = campo_comentario_hp5['comentario_hp5'].value;
    let id = counter += 1;
    campo_comentario_hp5.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_HP5').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_HP5           
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
        fs.collection('Comentarios_HP5').onSnapshot((snapshot) => {
             let edicoes_HP5 = snapshot.docChanges();
             edicoes_HP5.forEach(edicao_HP5 => {
                 if (edicao_HP5.type == "added") {
                    addComentario_HP5(edicao_HP5.doc); 
                    }
                    else if(edicao_HP5.type == "removed") {
                        let aa = hp5_espaco_comentarios.querySelector('[id-comentHP5 =' + edicao_HP5.doc.id + ']'); 
                        hp5_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
