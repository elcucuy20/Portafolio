function saludar(){
    let salida = document.getElementById("salida_boton");
    salida.innerText = "Hola desde la salida de la funcion saludar";

    salida.innerText = "Hola desde la funcion saludar";

}

let otro_boton = document.getElementById("otro_boton");

otro_boton.addEventListener("click", function() {
    let salida = document.getElementById("salida_otro");
    salida.innerText = "Otro saludo 😶‍🌫️"
});

otro_boton.addEventListener("mouseenter", function(){
    this.innerText = "Entro el mouse";

});


otro_boton.addEventListener("mouseleave", function(){
    this.innerText = "Salio el mouse";

});

otro_boton.addEventListener("mousemove", function(){
    this.innerText = "🐸";

});

let nombreTxt = document.getElementById("nombre");
let salida_teaclado = document.getElementById("salida_teclado");

nombreTxt.addEventListener("keydown", function(event){
    salida_teclado.innerHTML = `Se presiono <kbd>${event.key}</kbd>` ;

});

 let miform = document.getElementById("miform");
 miform.addEventListener("submit", function(event){
    event.preventDefault();

    //alert("Se intento procesar el formulario");
    let aTxt = document.getElementById("a"); 
    let bTxt = document.getElementById("b");
    //Das nombre al aTxt el nombre de id "a"
    //console.log(a, b);
    let salida = document.getElementById("salida_suma"); 
    //Asigna el nombre salida a nuestro code que tiene el id de "salida_suma"

    let a = parseInt(aTxt.value);//convertir aTxt a int
    let b = parseInt(bTxt.value);//convertir bTxt a int
    let resultado = a + b;
    salida.innerText = resultado;

 });


