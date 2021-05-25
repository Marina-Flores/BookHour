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

//  auth.onAuthStateChanged(user => {
//     const username = document.getElementById('username');
//     if (user) {
//         fs.collection('Comentarios').get().then((snapshot) => {
//             const user = snapshot.data().user
//             console.log(user);
//         })
//     }
//     else {
//         // console.log('user is not signed in to retrive username');
//     }
// })

 //const user = snapshot.data().user;   
//if(user == firebase.auth().currentUser.uid) {



//  apagar.addEventListener('click', e => {
//      let id = e.target.parentElement.parentElement.getAttribute('id-coment'); 
//      auth.onAuthStateChanged(user => {           
//          if (user){
//             fs.collection('Comentarios').doc('_' + id).get().then( (snapshot) => { 
//                 const user = snapshot.data().user; 
//             })   
//         if(snapshot.data().user == firebase.auth().currentUser.uid) {
//             fs.collection('Comentarios').doc(id).delete();
//         }else{
//             console.log("Você não pode deletar");
//         }

             
//          }
//      })
//  })

//  if (user) { 
//  fs.collection('Comentarios').doc('_' + id).get().then( (snapshot) => {
//     const user = snapshot.data().user;
//     console.log(user);
//  })

// }

// fs.collection('Comentarios').doc('_' + id).get().then( (snapshot) => {
//     const user = snapshot.data().user;
//     console.log(user);
//  })
//  if (snapshot.data().user == user.uid){
//     console.log("Você não pode apagar este comentário");
//  }else{
//      console.log("Você pode apagar!");
//  }


// auth.onAuthStateChanged(user => {
//     const email = document.getElementById('email');
//     if (user) {
//         fs.collection('users').doc(user.uid).get().then((snapshot) => {
//             // console.log(snapshot.data().Name);
//             useruid = snapshot.data().user.uid;
//         })
//     }
//     else {
//         // console.log('user is not signed in to retrive username');
//     }
// })

// if(user === firebase.auth().currentUser.uid){
//     console.log("Você pode apagar o comentário!")
// } else {
//     console.log("Você não pode apagar!");
// }

// fs.collection('Comentarios').doc('_' + id).get().then( (snapshot) => {
//     const user = snapshot.data().user;
//    // console.log(user);  
//    // console.log(firebase.auth().currentUser.uid);              
//  })


// function verificaPermissao (){
//     fs.collection('Comentarios').doc('_' + id).get().then( (snapshot) => {
//             const user = snapshot.data().user;
//             console.log(user);  
//              console.log(firebase.auth().currentUser.uid);              
//   })
//   if(user) {
//     if(user === firebase.auth().currentUser.uid){
//         console.log("Você pode apagar o comentário!")
//      } else {
//          console.log("Você não pode apagar!");
//  }
//   }
 
// }

// console.log(verificaPermissao());
// campo_comentario.addEventListener('submit', e => {
//     e.preventDefault(); 
//     const comentario = campo_comentario['comentario'].value;
//     let id = counter += 1;
//     campo_comentario.reset(); 
//     auth.onAuthStateChanged(user => {
//         if(user) {
//             fs.collection('Comentarios').doc('_' + id).set({
//                 id: '_' + id,                
//                 user: user.uid,
//                 comentario            
//             }).then( ()=> {
//                 console.log("comentario add com sucesso");
//             }).catch(err => {
//                 console.log(err.message);
//             })
//             fs.collection('Comentarios User').doc('_' + id).set({
//                 id: '_' + id,
//                 comentario
//             }).then( ()=> {
//                 console.log('Comentário adicionado com sucesso!');
               
//             }).catch(err => {
//                 console.log(err.message);
//             })
//         }
//         else {
//             //console.log('user is not signed in to add comments');
//         }
//     })
// })


//DEU CERTO 
// apagar.addEventListener('click', e => {
//     let id = e.target.parentElement.parentElement.getAttribute('id-coment'); 
//     auth.onAuthStateChanged(user => {           
//         if (user && commentIndividual.data().user != firebase.auth().currentUser.uid){ 
//             fs.collection('Comentarios').doc(id).delete();
//             console.log(commentIndividual.data().user);
//         }else{
//             console.log("Você não pode apagar este comentário!");
//         }
//     })
// })