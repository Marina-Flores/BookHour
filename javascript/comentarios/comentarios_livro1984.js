const livro1984_espaco_comentarios = document.getElementById('livro1984-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_livro1984 (commentIndividual_livro1984) {
    //div pai
    let divMae_livro1984 = document.createElement("div"); 
    divMae_livro1984.className = "espaco caixa-comentarios";
    divMae_livro1984.setAttribute('id-comentlivro1984', commentIndividual_livro1984.id); 

    //div comentarios
    let divComent_livro1984 = document.createElement("div"); 
    divComent_livro1984.textContent = commentIndividual_livro1984.data().comentario_livro1984;

    //botao   
    let apagar_livro1984 = document.createElement("button"); 

    let icone_livro1984 = document.createElement("i"); 
    icone_livro1984.className = "fas fa-trash"; 

    //acrescentando
    apagar_livro1984.appendChild(icone_livro1984); 
    divMae_livro1984.appendChild(divComent_livro1984); 

    livro1984_espaco_comentarios.appendChild(divMae_livro1984); 

    fs.collection("Comentarios_livro1984").where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {            
            console.log(doc.id, " => ", doc.data());
            divMae_livro1984.appendChild(apagar_livro1984); 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    //evento click no lixo
    apagar_livro1984.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentlivro1984'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_livro1984.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios_livro1984').doc(id).delete();
                console.log(commentIndividual_livro1984.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_livro1984 = document.getElementById('campo_comentario_livro1984'); 


campo_comentario_livro1984.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_livro1984 = campo_comentario_livro1984['comentario_livro1984'].value;
    let id = counter += 1;
    campo_comentario_livro1984.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios_livro1984').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_livro1984           
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
        fs.collection('Comentarios_livro1984').onSnapshot((snapshot) => {
             let edicoes_livro1984 = snapshot.docChanges();
             edicoes_livro1984.forEach(edicao_livro1984 => {
                 if (edicao_livro1984.type == "added") {
                    addComentario_livro1984(edicao_livro1984.doc); 
                    }
                    else if(edicao_livro1984.type == "removed") {
                        let aa = livro1984_espaco_comentarios.querySelector('[id-comentlivro1984 =' + edicao_livro1984.doc.id + ']'); 
                        livro1984_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
