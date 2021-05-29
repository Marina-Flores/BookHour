const homemBabilonia_espaco_comentarios = document.getElementById('homemBabilonia-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_homemBabilonia (commentIndividual_homemBabilonia) {
    //div pai
    let divMae_homemBabilonia = document.createElement("div"); 
    divMae_homemBabilonia.className = "espaco caixa-comentarios";
    divMae_homemBabilonia.setAttribute('id-comenthomemBabilonia', commentIndividual_homemBabilonia.id); 

    //div comentarios
    let divComent_homemBabilonia = document.createElement("div"); 
    divComent_homemBabilonia.textContent = commentIndividual_homemBabilonia.data().comentario_homemBabilonia;

    //botao   
    let apagar_homemBabilonia = document.createElement("button"); 

    let icone_homemBabilonia = document.createElement("i"); 
    icone_homemBabilonia.className = "fas fa-trash"; 

    //acrescentando
    apagar_homemBabilonia.appendChild(icone_homemBabilonia); 
    divMae_homemBabilonia.appendChild(divComent_homemBabilonia); 

    homemBabilonia_espaco_comentarios.appendChild(divMae_homemBabilonia); 

    fs.collection("Comentarios_homemBabilonia").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_homemBabilonia.appendChild(apagar_homemBabilonia); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_homemBabilonia.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comenthomemBabilonia'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_homemBabilonia.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_homemBabilonia').doc(id).delete();
                console.log(commentIndividual_homemBabilonia.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_homemBabilonia = document.getElementById('campo_comentario_homemBabilonia'); 


campo_comentario_homemBabilonia.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_homemBabilonia = campo_comentario_homemBabilonia['comentario_homemBabilonia'].value;
    let id = counter += 1;
    campo_comentario_homemBabilonia.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_homemBabilonia').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_homemBabilonia           
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
        fs.collection('Comentarios_homemBabilonia').onSnapshot((snapshot) => {
             let edicoes_homemBabilonia = snapshot.docChanges();
             edicoes_homemBabilonia.forEach(edicao_homemBabilonia => {
                 if (edicao_homemBabilonia.type == "added") {
                    addComentario_homemBabilonia(edicao_homemBabilonia.doc); 
                    }
                    else if(edicao_homemBabilonia.type == "removed") {
                        let aa = homemBabilonia_espaco_comentarios.querySelector('[id-comenthomemBabilonia =' + edicao_homemBabilonia.doc.id + ']'); 
                        homemBabilonia_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
