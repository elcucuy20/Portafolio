let objeto ={
    nombre: "Adolfo", saludar: function(){
        setTimeout(() => {
            console.log( `Hola soy ${this.nombre} ` ) ;
        }, 1000);
    },
};

objeto.saludar();

let titulo = document.getElementById("titulo");
console.log(titulo.textContent);
titulo.style.color = "red";

let parrafos = document.getElementsByTagName("p");
console.table(parrafos);
Array.from(parrafos).forEach((el, idx) =>{
    el.innerText = "Texto " + (idx + 1);
});

//Remarcar texto
let parrafos2 = document.getElementsByClassName("parrafo");
parrafos2[1].style.backgroundColor = "greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo parrafo <strong> "

let parrafo = document.querySelector(".parrafo");
parrafo.className = "nuevo-parrafo";

//Pintar titulos de blanco
let titu = document.getElementById("titu");
console.log(titu.textContent);
titu.style.color = "white";

let tit = document.getElementById("tit");
tit.style.color = "white";


//Crear un elemento
let parrafo_nuevo = document.createElement("p");
parrafo_nuevo.innerText = "Este parrafo tiene un emoji 😶‍🌫️";
document.body.appendChild(parrafo_nuevo);

console.log(parrafo_nuevo);

//Crear elemento e insertar en el parrafo_nuevo, despues y antes
let h1 = document.createElement("h1");
h1.innerText = "Titulo dinamico";
let hr = document.createElement("hr");

parrafo_nuevo.prepend(h1);
parrafo_nuevo.parentElement.appendChild(hr);

//Crea una lista de elementos
let padre_parrafo = parrafo.parentElement;
console.log(padre_parrafo);

let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++){
    let item = document.createElement("li");
    item.innerText = `Elemento ${i}`;
    lista.appendChild(item);
}

padre_parrafo.appendChild(lista);