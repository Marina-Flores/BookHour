const hp6_espaco_comentarios = document.getElementById('hp6-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_HP6 (commentIndividual_HP6) {
    //div pai
    let divMae_hp6 = document.createElement("div"); 
    divMae_hp6.className = "espaco caixa-comentarios";
    divMae_hp6.setAttribute('id-comentHP6', commentIndividual_HP6.id); 

    //div comentarios
    let divComent_hp6 = document.createElement("div"); 
    divComent_hp6.textContent = commentIndividual_HP6.data().comentario_HP6;

    //botao   
    let apagar_HP6 = document.createElement("button"); 

    let icone_HP6 = document.createElement("i"); 
    icone_HP6.className = "fas fa-trash"; 

    //acrescentando
    apagar_HP6.appendChild(icone_HP6); 
    divMae_hp6.appendChild(divComent_hp6); 

    hp6_espaco_comentarios.appendChild(divMae_hp6); 

    fs.collection("Comentarios_HP6").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_hp6.appendChild(apagar_HP6); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_HP6.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentHP6'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_HP6.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_HP6').doc(id).delete();
                console.log(commentIndividual_HP6.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_hp6 = document.getElementById('campo_comentario_hp6'); 


campo_comentario_hp6.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_HP6 = campo_comentario_hp6['comentario_hp6'].value;
    let id = counter += 1;
    campo_comentario_hp6.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_HP6').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_HP6           
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
        fs.collection('Comentarios_HP6').onSnapshot((snapshot) => {
             let edicoes_HP6 = snapshot.docChanges();
             edicoes_HP6.forEach(edicao_HP6 => {
                 if (edicao_HP6.type == "added") {
                    addComentario_HP6(edicao_HP6.doc); 
                    }
                    else if(edicao_HP6.type == "removed") {
                        let aa = hp6_espaco_comentarios.querySelector('[id-comentHP6 =' + edicao_HP6.doc.id + ']'); 
                        hp6_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
