var numero = 1

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un 10");
        break;    
    case 100:
        console.log("Si soy un 100");
        break;
    default:        
        console.log("Soy nada");
}

//Juego de piedra, papel o tijera con Switch

var piedra = 1;
var papel = 2;
var tijera = 3;
var cpu = (Math.floor(Math.random()*(4-1)+1));
var num = prompt("Escoge un numero, piedra = 1, papel = 2 y tijera = 3");

function game() {
    switch (true) {
        case num == cpu:
            console.log("Escogiste lo mismo que tu oponente, han empatado")
            break;
        case num == 1 && cpu == 2:
            console.log("Escogiste piedra y tu oponente papel, has perdido :(")
            break;
        case num == 1 && cpu == 3:
            console.log("Escogiste piedra y tu oponente tijera, has ganado :)")
            break;
        case num == 2 && cpu == 1:
            console.log("Escogiste papel y tu oponente piedra, has ganado :)")
            break;    
        case num == 2 && cpu == 3:
            console.log("Escogiste papel y tu oponente tijera, has perdido :(")    
            break;
        case num == 3 && cpu == 1:
            console.log("Escogite tijera y tu oponente piedra, has perdido :(")
            break;  
        case num == 3 && cpu == 2:
            console.log("Escogiste tijera y tu oponente papel, has ganado :)")  
            break; 
        case num !== 3 && cpu == 1:
            console.log("Este no es un numero valido, intenta de nuevo")   
            break;
        case num !== 2 && cpu == 2:
            console.log("Este no es un numero valido, intenta de nuevo")   
             break;    
        case num !== 1 && cpu == 3:
            console.log("Este no es un numero valido, intenta de nuevo")   
             break;     
    }
}
game();