const hp4_espaco_comentarios = document.getElementById('hp4-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_HP4 (commentIndividual_HP4) {
    //div pai
    let divMae_hp4 = document.createElement("div"); 
    divMae_hp4.className = "espaco caixa-comentarios";
    divMae_hp4.setAttribute('id-comentHP4', commentIndividual_HP4.id); 

    //div comentarios
    let divComent_hp4 = document.createElement("div"); 
    divComent_hp4.textContent = commentIndividual_HP4.data().comentario_HP4;

    //botao   
    let apagar_HP4 = document.createElement("button"); 

    let icone_HP4 = document.createElement("i"); 
    icone_HP4.className = "fas fa-trash"; 

    //acrescentando
    apagar_HP4.appendChild(icone_HP4); 
    divMae_hp4.appendChild(divComent_hp4); 

    hp4_espaco_comentarios.appendChild(divMae_hp4); 

    fs.collection("Comentarios_HP4").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_hp4.appendChild(apagar_HP4); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_HP4.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentHP4'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_HP4.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_HP4').doc(id).delete();
                console.log(commentIndividual_HP4.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_hp4 = document.getElementById('campo_comentario_hp4'); 


campo_comentario_hp4.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_HP4 = campo_comentario_hp4['comentario_hp4'].value;
    let id = counter += 1;
    campo_comentario_hp4.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_HP4').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_HP4           
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
        fs.collection('Comentarios_HP4').onSnapshot((snapshot) => {
             let edicoes_HP4 = snapshot.docChanges();
             edicoes_HP4.forEach(edicao_HP4 => {
                 if (edicao_HP4.type == "added") {
                    addComentario_HP4(edicao_HP4.doc); 
                    }
                    else if(edicao_HP4.type == "removed") {
                        let aa = hp4_espaco_comentarios.querySelector('[id-comentHP4 =' + edicao_HP4.doc.id + ']'); 
                        hp4_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
