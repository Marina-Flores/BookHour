const hp2_espaco_comentarios = document.getElementById('hp2-espaco_comentarios');

// criando lista de comentarios // 
function addComentario_HP2 (commentIndividual_HP2) {
    //div pai
    let divMae_hp2 = document.createElement("div"); 
    divMae_hp2.className = "espaco caixa-comentarios";
    divMae_hp2.setAttribute('id-comentHP2', commentIndividual_HP2.id); 

    //div comentarios
    let divComent_hp2 = document.createElement("div"); 
    divComent_hp2.textContent = commentIndividual_HP2.data().comentario_HP2;

    //botao   
    let apagar_HP2 = document.createElement("button"); 

    let icone_HP2 = document.createElement("i"); 
    icone_HP2.className = "fas fa-trash"; 

    //acrescentando

    apagar_HP2.appendChild(icone_HP2); 

    divMae_hp2.appendChild(divComent_hp2); 
    divMae_hp2.appendChild(apagar_HP2); 

    hp2_espaco_comentarios.appendChild(divMae_hp2); 


    //evento click no lixo
    apagar_HP2.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('id-comentHP2'); 
        auth.onAuthStateChanged(user => {           
            if (user && commentIndividual_HP2.data().user == firebase.auth().currentUser.uid){ 
                fs.collection('Comentarios HP2').doc(id).delete();
                console.log(commentIndividual_HP2.data().user);
            }else{
                console.log("Você não pode apagar este comentário!");
            }
        })
    })     
}

//adicionando comentarios no database firestore
const campo_comentario_hp2 = document.getElementById('campo_comentario_hp2'); 


campo_comentario_hp2.addEventListener('submit', e => {
    e.preventDefault(); 
    const comentario_HP2 = campo_comentario_hp2['comentario_hp2'].value;
    let id = counter += 1;
    campo_comentario_hp2.reset(); 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Comentarios HP2').doc('_' + id).set({
                id: '_' + id,                
                user: user.uid,
                comentario_HP2           
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
        fs.collection('Comentarios HP2').onSnapshot((snapshot) => {
             let edicoes_HP2 = snapshot.docChanges();
             edicoes_HP2.forEach(edicao_HP2 => {
                 if (edicao_HP2.type == "added") {
                    addComentario_HP2(edicao_HP2.doc); 
                    }
                    else if(edicao_HP2.type == "removed") {
                        let aa = hp2_espaco_comentarios.querySelector('[id-comentHP2 =' + edicao_HP2.doc.id + ']'); 
                        hp2_espaco_comentarios.removeChild(aa); 
                    }

             })
         })
     }
 })
