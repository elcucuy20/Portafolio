console.log("Hola Mundo desde afuera");
let a= 5;
let b=3;
let resultado=((a+b-2)*3)/2;
console.log(resultado);
resultado +1;
console.log(a>b);
console.log(a===b);
console.log(resultado % 3==0? "👍": "👎");
let cadena = "Hola, " + "mundo!"; 

let anio = prompt("En que año naciste?");
let anio_actual = new Date().getFullYear();
let edad = anio_actual - anio;


if (edad >= 18){
    console.info("Eres mayor de edad");

}
else if (edad >=12 && edad < 18){
    if (edad == 12){
        console.log("Eres un preadolescente");
    }
    else{
        console.log("Eres un adolescente");
    }
   
}
 else{
        console.warn("Eres un niño");
    }

    let dia = parseInt( prompt("Ingresa un numero del 1 al 7"))  ;

    switch (dia){
        case 1:
            console.log("Lunes");
            break;
            case 2:
                console.log("Martes");
                break;
                case 3: 
                console.log("Miercoles");
                break;
                case 4: 
                console.log("Jueves");
                break;
                case 5: 
                console.log("Viernes");
                break;
                case 6: 
                console.log("Sabado");
                break;
                case 7: 
                console.log("Domingo");
                break;
                default:
                    console.error("Dia no valido");
    }

    let resta = function (a,b){
        return a - b;

    };

    console.log(resta(5,3));

    let multiplicacion = (a,b) => a*b;

    console.log(multiplicacion(5,3));

    let objeto ={
        nombre: "Adolfo", saludar: function(){
            setTimeout(() => {
                console.log( `Hola soy ${this.nombre} ` ) ;
            }, 1000);
        },
    };

    objeto.saludar();

    let arreglo = new Array(1,2,4,5);
    let colores = ["rojo","verde","azul","naranja","cafe","amarillo"];

    console.log(colores[1]);

    let frutas = ["🍎", "🍐","🍇","🍓"];

    frutas.push("🥭");
    frutas.unshift("🍌");
    frutas.pop();
    console.log(frutas);

    let frutas2 = frutas.slice(1,3);
    console.log(frutas2.join(" - "));
    console.log(frutas.length);
    console.log(frutas.indexOf("🍇"));

    let frutas3 = frutas.map((fruta) => fruta + "🍉");

    console.table(frutas3);
    
