const hp7_espaco_comentarios = document.getElementById('hp7-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_HP7 (commentIndividual_HP7) {
    //div pai
    let divMae_hp7 = document.createElement("div"); 
    divMae_hp7.className = "espaco caixa-comentarios";
    divMae_hp7.setAttribute('id-comentHP7', commentIndividual_HP7.id); 

    //div comentarios
    let divComent_hp7 = document.createElement("div"); 
    divComent_hp7.textContent = commentIndividual_HP7.data().comentario_HP7;

    //botao   
    let apagar_HP7 = document.createElement("button"); 

    let icone_HP7 = document.createElement("i"); 
    icone_HP7.className = "fas fa-trash"; 

    //acrescentando
    apagar_HP7.appendChild(icone_HP7); 
    divMae_hp7.appendChild(divComent_hp7); 

    hp7_espaco_comentarios.appendChild(divMae_hp7); 

    fs.collection("Comentarios_HP7").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_hp7.appendChild(apagar_HP7); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_HP7.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentHP7'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_HP7.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_HP7').doc(id).delete();
                console.log(commentIndividual_HP7.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_hp7 = document.getElementById('campo_comentario_hp7'); 


campo_comentario_hp7.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_HP7 = campo_comentario_hp7['comentario_hp7'].value;
    let id = counter += 1;
    campo_comentario_hp7.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_HP7').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_HP7           
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
        fs.collection('Comentarios_HP7').onSnapshot((snapshot) => {
             let edicoes_HP7 = snapshot.docChanges();
             edicoes_HP7.forEach(edicao_HP7 => {
                 if (edicao_HP7.type == "added") {
                    addComentario_HP7(edicao_HP7.doc); 
                    }
                    else if(edicao_HP7.type == "removed") {
                        let aa = hp7_espaco_comentarios.querySelector('[id-comentHP7 =' + edicao_HP7.doc.id + ']'); 
                        hp7_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
