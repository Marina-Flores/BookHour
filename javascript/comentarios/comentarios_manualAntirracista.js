const manualAntirracista_espaco_comentarios = document.getElementById('manualAntirracista-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_manualAntirracista (commentIndividual_manualAntirracista) {
    //div pai
    let divMae_manualAntirracista = document.createElement("div"); 
    divMae_manualAntirracista.className = "espaco caixa-comentarios";
    divMae_manualAntirracista.setAttribute('id-comentmanualAntirracista', commentIndividual_manualAntirracista.id); 

    //div comentarios
    let divComent_manualAntirracista = document.createElement("div"); 
    divComent_manualAntirracista.textContent = commentIndividual_manualAntirracista.data().comentario_manualAntirracista;

    //botao   
    let apagar_manualAntirracista = document.createElement("button"); 

    let icone_manualAntirracista = document.createElement("i"); 
    icone_manualAntirracista.className = "fas fa-trash"; 

    //acrescentando
    apagar_manualAntirracista.appendChild(icone_manualAntirracista); 
    divMae_manualAntirracista.appendChild(divComent_manualAntirracista); 

    manualAntirracista_espaco_comentarios.appendChild(divMae_manualAntirracista); 

    fs.collection("Comentarios_manualAntirracista").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_manualAntirracista.appendChild(apagar_manualAntirracista); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_manualAntirracista.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentmanualAntirracista'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_manualAntirracista.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_manualAntirracista').doc(id).delete();
                console.log(commentIndividual_manualAntirracista.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_manualAntirracista = document.getElementById('campo_comentario_manualAntirracista'); 


campo_comentario_manualAntirracista.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_manualAntirracista = campo_comentario_manualAntirracista['comentario_manualAntirracista'].value;
    let id = counter += 1;
    campo_comentario_manualAntirracista.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_manualAntirracista').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_manualAntirracista           
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
        fs.collection('Comentarios_manualAntirracista').onSnapshot((snapshot) => {
             let edicoes_manualAntirracista = snapshot.docChanges();
             edicoes_manualAntirracista.forEach(edicao_manualAntirracista => {
                 if (edicao_manualAntirracista.type == "added") {
                    addComentario_manualAntirracista(edicao_manualAntirracista.doc); 
                    }
                    else if(edicao_manualAntirracista.type == "removed") {
                        let aa = manualAntirracista_espaco_comentarios.querySelector('[id-comentmanualAntirracista =' + edicao_manualAntirracista.doc.id + ']'); 
                        manualAntirracista_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
