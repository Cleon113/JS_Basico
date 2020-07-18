if (false) {
    console.log("Hola")
} else {
    console.log("Soy falso")
}

//Ejemplo con else if
var edad = 18

if (edad === 18) {
    console.log("Puedes votar, será tu primera vez");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

//Ejemplo de if else incorporado
condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No soy un uno"

console.log(resultado)

//Juego piedra, papel o tijera

var piedra = 1;
var papel = 2;
var tijera = 3;
var cpu = (Math.floor(Math.random()*(4-1)+1));
var num = prompt("Escoge un numero, piedra = 1, papel = 2 y tijera = 3");

function game() {
    if (num == cpu) {
        console.log("Escogiste lo mismo que tu oponente, han empatado")
    } else if (num == 1 && cpu == 2) {
        console.log("Escogiste piedra y tu oponente papel, has perdido :(")
    } else if (num == 1 && cpu == 3) {
        console.log("Escogiste piedra y tu oponente tijera, has ganado :)")
    } else if (num == 2 && cpu == 1) {
        console.log("Escogiste papel y tu oponente piedra, has ganado :)")
    } else if (num == 2 && cpu == 3) {
        console.log("Escogiste papel y tu oponente tijera, has perdido :(")
    } else if (num == 3 && cpu == 1) {
        console.log("Escogite tijera y tu oponente piedra, has perdido :(")
    }else if (num == 3 && cpu == 2) {
        console.log("Escogiste tijera y tu oponente papel, has ganado :)")
    }
}
game();

//Fin del juego