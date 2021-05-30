const fazerLogin = document.querySelector('.fazerLogin'); 
const fazerCadastro = document.querySelector('.fazerCadastro'); 
const sign_in_container = document.querySelector('.sign-in-container'); 
const sign_up_container = document.querySelector('.sign-up-container');

// botao na página de cadastro
fazerLogin.addEventListener('click', function(){
    sign_in_container.classList.add('sign-in-container-aparecer');    
})

// botao na página de login
fazerCadastro.addEventListener('click', function(){
    sign_in_container.classList.remove('sign-in-container-aparecer');    
})

// signup
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = signupForm['name'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    // console.log(name, email, password);
    signupForm.reset();
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        return db.collection('users').doc(cred.user.uid).set({
            Name: name,
            Email: email,
            Password: password
        }).then(() => {
            // console.log('success');
            location = "../views/lista-livros.html";
        }).catch(err => {
            // console.log(err.message);
            const signupError = document.getElementById('signupError');
            signupError.innerText = err.message;
        })
    }).catch(err => {
        // console.log(err.message);
        const signupError2 = document.getElementById('signupError');
        signupError2.innerText = err.message;
    })
})

// signin
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginEmail = loginForm['login-email'].value;
    const loginPassword = loginForm['login-password'].value;
     //console.log(loginEmail, loginPassword);
    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() => {
        //console.log('login success');
        location = "../views/lista-livros.html";
    }).catch(err => {
        const loginError = document.getElementById("loginError");
        loginError.innerText = err.message;
    })
})

