    //adicionando lista pelo button no database firestore
    const desejo_button = document.getElementById('HP1_desejo');     
    desejo_button.addEventListener('click', function(){
        const desejo_button = "Harry Potter e a Pedra Filosofal";
        let id = counter += 1;
        auth.onAuthStateChanged(user => {
            if(user) {
                fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                    id: '_' + id, 
                    desejo_button
                }).then ( () => {
                    alert('livro adicionado');
                }).catch(err => {
                    console.log(err.message);
                })
            }
            else {
                //console.log('user is not signed in to add toods');
            }
        })
    })

