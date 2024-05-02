// consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata 10x10 (con 100 celle).
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// :roccia: MILESTONE #1
// Create la vostra griglia in HTML e CSS, in maniera grossolana. Vi servirà solo per testare le classi, come visto in mattinata con la griglia 3x3.

// :roccia: MILESTONE #2
// Commentate l'HTML e iniettatelo tramite un ciclo in JS, senza pensare al click o alle funzioni.

// :roccia: MILESTONE #3
// Aggiungete la gestione dell'evento di click, che stampi il numero e cambi il colore della cella.

// :roccia: MILESTONE #4
// Spostate alcuni elementi in funzioni, ad esempio la creazione del quadrato e/o l'event listener.
// alert("1 facile - 2 normale - 3 difficile");
// let select = parseInt(prompt("seleziona la difficoltà"));
let btnStart = document.getElementById("btnStart");
let select = document.getElementById("difficoltà");

btnStart.addEventListener("click", function () {
    grid.innerHTML = ""
    gridNorm.innerHTML = ""
    gridHard.innerHTML = ""

    if (select.value == "easy") {
        let griglia = document.getElementById("grid");
        // creo un ciclo for
        for (let i = 1; i <= 100; i++) {
            // ad ogni ciclo richiamo la funzione per creare il quadrato
            let elemento = CreaQuadrato(i);

            // alla griglia aggiungo con append in quadrato nel dom
            griglia.append(elemento);
        }

    }
    else if (select.value == "medium") {
        // difficoltà normale
        let griglia = document.getElementById("gridNorm");

        for (let i = 1; i <= 81; i++) {

            let elemento = CreaQuadrato(i);
            griglia.append(elemento);
        }
    }

    else if (select.value == "hard") {
        // difficoltà Difficile
        let griglia = document.getElementById("gridHard");

        for (let i = 1; i <= 49; i++) {

            let elemento = CreaQuadrato(i);
            griglia.append(elemento);
        }

    }

})









//     btnStart.addEventListener("click", function() {






// btnStart.addEventListener("click", function () {
//     // salvo la variabile sul dom virtuale della pagina
//     let griglia = document.getElementById("grid");
//     // creo un ciclo for
//     for (let i = 1; i <= 100; i++) {
//         // // salvo e creo il quadrato nel virtual dom
//         // let square = document.createElement("div");

//         // // aggiungo del testo che prendere il valore di "i" all'interno del quadrato
//         // square.innerText = i

//         // ad ogni ciclo richiamo la funzione per creare il quadrato
//         let elemento = CreaQuadrato(i);

//         // // aggiungo la classe square
//         // square.classList.add("square");

//         // alla griglia aggiungo con append in quadrato nel dom
//         griglia.append(elemento);

//         // elemento.addEventListener("click", function(){
//         // console.log("click");

//         // });


//     }

// })


// // difficoltà normale
// btnNormale.addEventListener("click", function () {
//     let griglia = document.getElementById("gridNorm");

//     for (let i = 1; i <= 81; i++) {

//         let elemento = CreaQuadrato(i);
//         griglia.append(elemento);
//     }
// })


// // difficoltà Difficile
// btnHard.addEventListener("click", function () {
//     let griglia = document.getElementById("gridHard");

//     for (let i = 1; i <= 49; i++) {

//         let elemento = CreaQuadrato(i);
//         griglia.append(elemento);
//     }

// })

// })
