
//vendo quantos elementos tem na lista de lidos
// retriving username
auth.onAuthStateChanged(user => {
    const username = document.getElementById('username');
    if (user) {
        fs.collection('users').doc(user.uid).get().then((snapshot) => {
            // console.log(snapshot.data().Name);
            username.innerText = snapshot.data().Name;
        })
    }
    else {
        // console.log('user is not signed in to retrive username');
    }
})

auth.onAuthStateChanged(user => {
    const quantidade = document.querySelector(".lidosTotal")
    if(user) {
        fs.collection('Livros lidos' + ' ' + user.uid).get().then(function(querySnapshot) {
           
                quantidade.innerHTML = querySnapshot.size;           
            
        })
    }
})

//vendo quantos elementos tem na lista de lendo
auth.onAuthStateChanged(user => {
    const quantidade = document.querySelector(".lendoTotal")
    if(user) {
        fs.collection('Livros lendo' + ' ' + user.uid).get().then(function(querySnapshot) {
           
                quantidade.innerHTML = querySnapshot.size;         
            
        })
    }
})

//vendo quantos elementos tem na lista de lendo
auth.onAuthStateChanged(user => {
    const quantidade = document.querySelector(".desejadosTotal")
    if(user) {
        fs.collection('Livros desejados' + user.uid).get().then(function(querySnapshot) {
           
                quantidade.innerHTML = querySnapshot.size;         
            
        })
    }
})