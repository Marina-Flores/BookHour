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

// Adicionando na primeira lista //
function renderData(individualDoc) {

    // parent div
    let parentDiv = document.createElement("div");
    parentDiv.className = "container todo-box";
    parentDiv.setAttribute('data-id', individualDoc.id);

    // todo div
    let todoDiv = document.createElement("div");
    todoDiv.textContent = individualDoc.data().todos;

    // button
    let trash = document.createElement("button");

    let i = document.createElement("i");
    i.className = "fas fa-trash";

    // appending
    trash.appendChild(i);

    parentDiv.appendChild(todoDiv);
    parentDiv.appendChild(trash);

    todoContainer.appendChild(parentDiv);

    // trash clicking event
    trash.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('data-id');
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Livros desejados' + user.uid).doc(id).delete();
            }
        })
    })
}

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

// adding todos to firestore database
const form = document.getElementById('form');
let date = new Date();
let time = date.getTime();
let counter = time;
form.addEventListener('submit', e => {
    e.preventDefault();
    const todos = form['todos'].value;
    // console.log(todos);
    let id = counter += 1;
    form.reset();
    auth.onAuthStateChanged(user => {
        if (user) {
         fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                id: '_' + id,
                todos
            }).then(() => {
                console.log('todo added');
            }).catch(err => {
                console.log(err.message);
            })
        }
        else {
            // console.log('user is not signed in to add todos');
        }
    })
})
// realtime listners
auth.onAuthStateChanged(user => {
    if (user) {
        fs.collection('Livros desejados' + user.uid).onSnapshot((snapshot) => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type == "added") {
                    renderData(change.doc);
                }
                else if (change.type == 'removed') {
                    let li = todoContainer.querySelector('[data-id=' + change.doc.id + ']');
                    todoContainer.removeChild(li);
                }
            })
        })
    }
})


//vendo quantos elementos tem na lista de lidos
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
