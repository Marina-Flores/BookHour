    //adicionando lista pelo button no database firestore
    const lendo_button = document.getElementById('HP1_lendo');     
    lendo_button.addEventListener('click', function(){
        const lendo_button = "Harry Potter e a Pedra Filosofal";
        let id = counter += 1;
        auth.onAuthStateChanged(user => {
            if(user) {
                fs.collection('Livros lendo' + ' ' + user.uid).doc('_' + id).set({
                    id: '_' + id, 
                    lendo_button
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