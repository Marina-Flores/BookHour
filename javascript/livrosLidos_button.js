    //adicionando lista pelo button no database firestore
    const lido_button = document.getElementById('HP1_lido');     
    lido_button.addEventListener('click', function(){
        const lido_button = "Harry Potter e a Pedra Filosofal";
        let id = counter += 1;
        auth.onAuthStateChanged(user => {
            if(user) {
                fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                    id: '_' + id, 
                    lido_button
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

