const sutilArte_espaco_comentarios = document.getElementById('sutilArte-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_sutilArte (commentIndividual_sutilArte) {
    //div pai
    let divMae_sutilArte = document.createElement("div"); 
    divMae_sutilArte.className = "espaco caixa-comentarios";
    divMae_sutilArte.setAttribute('id-comentsutilArte', commentIndividual_sutilArte.id); 

    //div comentarios
    let divComent_sutilArte = document.createElement("div"); 
    divComent_sutilArte.textContent = commentIndividual_sutilArte.data().comentario_sutilArte;

    //botao   
    let apagar_sutilArte = document.createElement("button"); 

    let icone_sutilArte = document.createElement("i"); 
    icone_sutilArte.className = "fas fa-trash"; 

    //acrescentando
    apagar_sutilArte.appendChild(icone_sutilArte); 
    divMae_sutilArte.appendChild(divComent_sutilArte); 

    sutilArte_espaco_comentarios.appendChild(divMae_sutilArte); 

    fs.collection("Comentarios_sutilArte").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_sutilArte.appendChild(apagar_sutilArte); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_sutilArte.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentsutilArte'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_sutilArte.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_sutilArte').doc(id).delete();
                console.log(commentIndividual_sutilArte.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_sutilArte = document.getElementById('campo_comentario_sutilArte'); 


campo_comentario_sutilArte.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_sutilArte = campo_comentario_sutilArte['comentario_sutilArte'].value;
    let id = counter += 1;
    campo_comentario_sutilArte.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_sutilArte').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_sutilArte           
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
        fs.collection('Comentarios_sutilArte').onSnapshot((snapshot) => {
             let edicoes_sutilArte = snapshot.docChanges();
             edicoes_sutilArte.forEach(edicao_sutilArte => {
                 if (edicao_sutilArte.type == "added") {
                    addComentario_sutilArte(edicao_sutilArte.doc); 
                    }
                    else if(edicao_sutilArte.type == "removed") {
                        let aa = sutilArte_espaco_comentarios.querySelector('[id-comentsutilArte =' + edicao_sutilArte.doc.id + ']'); 
                        sutilArte_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
