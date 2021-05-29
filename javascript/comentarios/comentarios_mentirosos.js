const mentirosos_espaco_comentarios = document.getElementById('mentirosos-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_mentirosos (commentIndividual_mentirosos) {
    //div pai
    let divMae_mentirosos = document.createElement("div"); 
    divMae_mentirosos.className = "espaco caixa-comentarios";
    divMae_mentirosos.setAttribute('id-comentmentirosos', commentIndividual_mentirosos.id); 

    //div comentarios
    let divComent_mentirosos = document.createElement("div"); 
    divComent_mentirosos.textContent = commentIndividual_mentirosos.data().comentario_mentirosos;

    //botao   
    let apagar_mentirosos = document.createElement("button"); 

    let icone_mentirosos = document.createElement("i"); 
    icone_mentirosos.className = "fas fa-trash"; 

    //acrescentando
    apagar_mentirosos.appendChild(icone_mentirosos); 
    divMae_mentirosos.appendChild(divComent_mentirosos); 

    mentirosos_espaco_comentarios.appendChild(divMae_mentirosos); 

    fs.collection("Comentarios_mentirosos").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_mentirosos.appendChild(apagar_mentirosos); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_mentirosos.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentmentirosos'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_mentirosos.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_mentirosos').doc(id).delete();
                console.log(commentIndividual_mentirosos.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_mentirosos = document.getElementById('campo_comentario_mentirosos'); 


campo_comentario_mentirosos.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_mentirosos = campo_comentario_mentirosos['comentario_mentirosos'].value;
    let id = counter += 1;
    campo_comentario_mentirosos.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_mentirosos').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_mentirosos           
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
        fs.collection('Comentarios_mentirosos').onSnapshot((snapshot) => {
             let edicoes_mentirosos = snapshot.docChanges();
             edicoes_mentirosos.forEach(edicao_mentirosos => {
                 if (edicao_mentirosos.type == "added") {
                    addComentario_mentirosos(edicao_mentirosos.doc); 
                    }
                    else if(edicao_mentirosos.type == "removed") {
                        let aa = mentirosos_espaco_comentarios.querySelector('[id-comentmentirosos =' + edicao_mentirosos.doc.id + ']'); 
                        mentirosos_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
