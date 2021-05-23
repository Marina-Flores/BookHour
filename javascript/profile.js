const todoContainer = document.getElementById('todo-container');

// checando se o usuário está logado
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user is signed in at users.html');
    }
    else {
        alert('your login session has expired or you have logged out, login again to continue');
        location = "../cadastro/cadastro.component.html";
    }
})

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
    const email = document.getElementById('email');
    if (user) {
        fs.collection('users').doc(user.uid).get().then((snapshot) => {
            // console.log(snapshot.data().Name);
            email.innerText = snapshot.data().Email;
        })
    }
    else {
        // console.log('user is not signed in to retrive username');
    }
})


//vendo quantos elementos tem na lista de lidos
auth.onAuthStateChanged(user => {
    const quantidade = document.querySelector(".lidosTotal")
    if(user) {
        fs.collection('Livros lidos' + ' ' + user.uid).get().then(function(querySnapshot) {
           
                quantidade.innerHTML = 'Livros lidos: ' + querySnapshot.size;           
            
        })
    }
})

//vendo quantos elementos tem na lista de lendo
auth.onAuthStateChanged(user => {
    const quantidade = document.querySelector(".lendoTotal")
    if(user) {
        fs.collection('Livros lendo' + ' ' + user.uid).get().then(function(querySnapshot) {
           
                quantidade.innerHTML = 'Livros em leitura: ' + querySnapshot.size;         
            
        })
    }
})

//vendo quantos elementos tem na lista de lendo
auth.onAuthStateChanged(user => {
    const quantidade = document.querySelector(".desejadosTotal")
    if(user) {
        fs.collection('Livros desejados' + user.uid).get().then(function(querySnapshot) {
           
                quantidade.innerHTML = 'Livros em leitura: ' + querySnapshot.size;         
            
        })
    }
})