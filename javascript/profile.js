const todoContainer = document.getElementById('todo-container');

// Checando se o usuário está logado //
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user is signed in at users.html');
    }
    else {
        alert('Você foi desconectado, faça o login para se reconectar');
        location = "../views/login.html";
    }
})


// // Mostrando username do usuário na tela //
// auth.onAuthStateChanged(user => {
//     const username = document.getElementById('username');
//     if (user) {
//         fs.collection('users').doc(user.uid).get().then((snapshot) => {
//             // console.log(snapshot.data().Name);
//             username.innerText = snapshot.data().Name;
//         })
//     }
//     else {
//         // console.log('user is not signed in to retrive username');
//     }
// })

// Mostrando Email do usuário na tela //
//  auth.onAuthStateChanged(user => {
//      const email = document.getElementById('email');
//      if (user) {
//         return db.collection('users').child('Email').set({
//             Name: name,
//             Email: email,
//             Password: password
//          })
//     }
//      else {
//          // console.log('user is not signed in to retrive username');
//      }
//  })

// // Logout //
// const logout = document.querySelector(".logout");    
// logout.addEventListener('click', function(){
//     firebase.auth().signOut()
//     .then(function(){
//         location = "../views/login.html";
//     })
//     .catch(function(error) {
//         //An error happened
//     })
// })

// // Excluir conta // 
// const excluir = document.querySelector(".excluir_conta"); 
// excluir.addEventListener('click', function(){
//     var user = firebase.auth().currentUser;
//     user.delete().then(function() {        
//         location = "../views/login.html";
//       }).catch(function(error) {
//         // An error happened.
//       });
// })

// realtime listners


// editando dados //

  
const mailField = document.getElementById('mail');
const passwordField = document.getElementById('password');
const displayNameField = document.getElementById('displayName');
const labels = document.getElementsByTagName('label');
const editButton = document.getElementById('edit');
const deleteButton = document.getElementById('delete');
const backButton = document.getElementById('back');


auth.onAuthStateChanged(user => {
    console.log(user);
})

const editInformation = () => {
    const newName = displayNameField.value;
    const newEmail = mailField.value;
    const newPassword = passwordField.value;
    //Holds all the information about the current signed in user
    const user = auth.currentUser;
    
    //Changes the email and password if the respective fields are filled with values
    if(newPassword && newEmail) {
        const credential = createCredential(user);
        changePassword(user, credential, newPassword);
        changeEmail(user, credential, newEmail);
    }
    //Changes only password
    else if(newPassword) {
        const credential = createCredential(user);
        changePassword(user, credential, newPassword);
    }
    //Changes only the email
    else if(newEmail) {
        const credential = createCredential(user);
        changeEmail(user, credential, newEmail);
    }
    //Changes only the username
    else if(newName){       
        displayNameField.value = 'Nome atualizado para: ' + newName;
        return db.collection('users').doc(user.uid).update({            
            Name: newName,                 
    }) 
                    
        }         
                  
}
    

    




//Create credential for the reauthenticationWithCredential function which is a most do
//in order to change critical information such as changing email, password or
//deleting the account
const createCredential = user => {
    const password = prompt('Password:');
    const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        password
    );
    return credential;
}

const changePassword = (user, credential, newPassword) => {
    user.reauthenticateWithCredential(credential)
    .then((cred) => {
        user.updatePassword(newPassword);
        return db.collection('users').doc(cred.user.uid).update({            
            Password: newPassword,            
         })
    })    
    .catch(error => {
        console.error(error);
    })
    
}

const changeEmail = (user, credential, newEmail) => {
    user.reauthenticateWithCredential(credential)
    .then((cred) => {
        user.updateEmail(newEmail);
        mailField.value = 'Email atualizado para: ' + newEmail;
        return db.collection('users').doc(cred.user.uid).update({            
            Email: newEmail,            
         })
        
    })
    .catch(error => {
        console.error(error);
    })
}




const deleteAccount = () => {
    const user = auth.currentUser;
    const credential = createCredential(user);
    user.reauthenticateWithCredential(credential)
    .then(() => {
        user.delete();
        console.log('Your Account Has Been Deleted!');
    })
    .catch(error => {
        console.error(error);
    })
}

deleteButton.addEventListener('click', deleteAccount);

editButton.addEventListener('click', editInformation,);

// backButton.addEventListener('click', () => {
//     window.location.assign('../views/lista-livros.html');
// });

//Animations
mailField.addEventListener('focus', () => {
    labels.item(0).className = "focused-field";
});

passwordField.addEventListener('focus', () => {
    labels.item(1).className = "focused-field";
});

mailField.addEventListener('blur', () => {
    if(!mailField.value)
        labels.item(0).className = "unfocused-field";
});

passwordField.addEventListener('blur', () => {
    if(!passwordField.value)
        labels.item(1).className = "unfocused-field";
});

displayNameField.addEventListener('focus', () => {
    labels.item(2).className = "focused-field";
});

displayNameField.addEventListener('blur', () => {
    if(!displayNameField.value)
        labels.item(2).className = "unfocused-field";
});





