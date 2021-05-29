const hp3_espaco_comentarios = document.getElementById('hp3-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_HP3 (commentIndividual_HP3) {
    //div pai
    let divMae_hp3 = document.createElement("div"); 
    divMae_hp3.className = "espaco caixa-comentarios";
    divMae_hp3.setAttribute('id-comentHP3', commentIndividual_HP3.id); 

    //div comentarios
    let divComent_hp3 = document.createElement("div"); 
    divComent_hp3.textContent = commentIndividual_HP3.data().comentario_HP3;

    //botao   
    let apagar_HP3 = document.createElement("button"); 

    let icone_HP3 = document.createElement("i"); 
    icone_HP3.className = "fas fa-trash"; 

    //acrescentando
    apagar_HP3.appendChild(icone_HP3); 
    divMae_hp3.appendChild(divComent_hp3); 

    hp3_espaco_comentarios.appendChild(divMae_hp3); 

    fs.collection("Comentarios_HP3").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_hp3.appendChild(apagar_HP3); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_HP3.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentHP3'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_HP3.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_HP3').doc(id).delete();
                console.log(commentIndividual_HP3.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_hp3 = document.getElementById('campo_comentario_hp3'); 


campo_comentario_hp3.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_HP3 = campo_comentario_hp3['comentario_hp3'].value;
    let id = counter += 1;
    campo_comentario_hp3.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_HP3').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_HP3           
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
        fs.collection('Comentarios_HP3').onSnapshot((snapshot) => {
             let edicoes_HP3 = snapshot.docChanges();
             edicoes_HP3.forEach(edicao_HP3 => {
                 if (edicao_HP3.type == "added") {
                    addComentario_HP3(edicao_HP3.doc); 
                    }
                    else if(edicao_HP3.type == "removed") {
                        let aa = hp3_espaco_comentarios.querySelector('[id-comentHP3 =' + edicao_HP3.doc.id + ']'); 
                        hp3_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
