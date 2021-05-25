const todoContainer = document.getElementById('todo-container');

// checando se o usuário está logado
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user is signed in at users.html');
    }
    else {
        alert('Você foi desconectado, faça o login para se reconectar');
        location = "../views/login.html";
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

// Logout //
const logout = document.querySelector(".logout");    
logout.addEventListener('click', function(){
    firebase.auth().signOut()
    .then(function(){
        location = "../views/login.html";
    })
    .catch(function(error) {
        //An error happened
    })
})

// Excluir conta // 
const excluir = document.querySelector(".excluir_conta"); 
excluir.addEventListener('click', function(){
    var user = firebase.auth().currentUser;
    user.delete().then(function() {        
        location = "../views/login.html";
      }).catch(function(error) {
        // An error happened.
      });
})

