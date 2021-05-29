const mindset_espaco_comentarios = document.getElementById('mindset-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_mindset (commentIndividual_mindset) {
    //div pai
    let divMae_mindset = document.createElement("div"); 
    divMae_mindset.className = "espaco caixa-comentarios";
    divMae_mindset.setAttribute('id-comentmindset', commentIndividual_mindset.id); 

    //div comentarios
    let divComent_mindset = document.createElement("div"); 
    divComent_mindset.textContent = commentIndividual_mindset.data().comentario_mindset;

    //botao   
    let apagar_mindset = document.createElement("button"); 

    let icone_mindset = document.createElement("i"); 
    icone_mindset.className = "fas fa-trash"; 

    //acrescentando
    apagar_mindset.appendChild(icone_mindset); 
    divMae_mindset.appendChild(divComent_mindset); 

    mindset_espaco_comentarios.appendChild(divMae_mindset); 

    fs.collection("Comentarios_mindset").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_mindset.appendChild(apagar_mindset); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_mindset.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentmindset'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_mindset.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_mindset').doc(id).delete();
                console.log(commentIndividual_mindset.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_mindset = document.getElementById('campo_comentario_mindset'); 


campo_comentario_mindset.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_mindset = campo_comentario_mindset['comentario_mindset'].value;
    let id = counter += 1;
    campo_comentario_mindset.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_mindset').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_mindset           
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
        fs.collection('Comentarios_mindset').onSnapshot((snapshot) => {
             let edicoes_mindset = snapshot.docChanges();
             edicoes_mindset.forEach(edicao_mindset => {
                 if (edicao_mindset.type == "added") {
                    addComentario_mindset(edicao_mindset.doc); 
                    }
                    else if(edicao_mindset.type == "removed") {
                        let aa = mindset_espaco_comentarios.querySelector('[id-comentmindset =' + edicao_mindset.doc.id + ']'); 
                        mindset_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
