function autocomplete(inp, arr) {

   
  /*a função autocomplete pega dois argumentos, 
  o text field element e um array de valores de possibilidades*/

    var currentFocus;
    /*executar a função quando alguem escreve no text field*/

    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/

        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;

        /*criar um elemento div que irá conter todos os valores do array:*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

      
        /*append o elemento div como um filho do autocomplete container:*/
        this.parentNode.appendChild(a);

        /*para cada item do array...*/
        for (i = 0; i < arr.length; i++) {

          /*checando se o item começa com as mesmas letras do texto digitado*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

            /*criar um elemento div para cada elemento que combina:*/
            b = document.createElement("DIV");

            /*deixar as letras que combinam em negrito:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);

            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

            /*executa a função quando alguem clica no item (elemento)*/
            b.addEventListener("click", function(e) {

                /*inserindo o valor no input*/
                inp.value = this.getElementsByTagName("input")[0].value;

                /*fechando lista de itens*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the titles names in the world:*/
  var titulos = [
      "Harry Potter e a Pedra Filosofal",
      "Harry Potter e o Enígma do Príncipe",
      "Harry Potter e o Cálice de Fogo",
      "Harry Potter e a Câmera Secreta",
      "Harry Potter e a Ordem da Fênix",
      "Harry Potter e o Prisioneiro de Azkaban",
      "Harry Potter e as Relíquias da Morte",
      "Torto Arado",
      "O homem mais rico da Babilônia",
      "Mulheres que correm com os lobos",
      "A garota do lago",
      "Percy Jackson - Ladrão de Raios",
      "Percy Jackson - O mar de monstros",
      "Percy Jackson - A maldição do Titã",
      "Percy Jackson - A batalha do labirinto",
      "Percy Jackson - O último olímpiano",
      "A revolução dos bichos",
      "1984",
      "O conto da aia",
      "O milagre da manhã",
      "O poder da ação",
      "Mindset",
      "O poder do hábito",
      "Mentirosos",
      "A sutil arte de ligar o foda-se",
      "Pequeno manual antirracista",
      "A coragem de ser imperfeito",
      "O morro dos ventos uivantes",
      "Orgulho e Preconceito",
      "O iluminado",
      "It: A coisa",



     ];
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the titulos array as possible autocomplete values:*/
  autocomplete(document.getElementById("todos"), titulos);
  autocomplete(document.getElementById("lendo"), titulos);
  autocomplete(document.getElementById("lido"), titulos);


 