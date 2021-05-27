const lista_espaco_comentarios = document.getElementById('lista-espaco_comentarios'); 

// criando lista de comentarios // 
function addComentario (commentIndividual) {
    //div pai
    let divMae = document.createElement("div"); 
    divMae.className = "espaco caixa-comentarios";
    divMae.setAttribute('id-coment', commentIndividual.id); 

    //div comentarios
    let divComent = document.createElement("div"); 
    divComent.textContent = commentIndividual.data().comentario;


    
    //botao   
        let apagar = document.createElement("button"); 

        let icone = document.createElement("i"); 
        icone.className = "fas fa-trash"; 
      
    //acrescentando
    apagar.appendChild(icone); 

    divMae.appendChild(divComent); 
    divMae.appendChild(apagar); 

    lista_espaco_comentarios.appendChild(divMae); 


    //evento click no lixo
    apagar.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-coment'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios').doc(id).delete();
                console.log(commentIndividual.data().user);                
            }else{
                console.log("Você não pode apagar este comentário!");                
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario = document.getElementById('campo_comentario'); 


campo_comentario.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario = campo_comentario['comentario'].value;
    let id = counter += 1;
    campo_comentario.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario            
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
        fs.collection('Comentarios').onSnapshot((snapshot) => {
             let edicoes = snapshot.docChanges();
             edicoes.forEach(edicao => {
                 if (edicao.type == "added") {
                    addComentario(edicao.doc); 
                    }
                    else if(edicao.type == "removed") {
                        let a = lista_espaco_comentarios.querySelector('[id-coment =' + edicao.doc.id + ']'); 
                        lista_espaco_comentarios.removeChild(a); 
                    }

             })
         })
     }
 })
