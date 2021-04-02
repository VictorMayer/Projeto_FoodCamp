let contador = 0;

let category1 = false;
let category2 = false;
let category3 = false;

function confirmarPedido() {
    console.log("botao está sendo clicado");
    console.log("botao está sendo clicado");
    const elemento = document.querySelector(".fade");
    elemento.classList.remove("hidden");
}

function cancelar() {
    console.log("botao está sendo clicado");
    const elemento = document.querySelector(".fade");
    elemento.classList.add("hidden");
}

function selectCard(num) {
    console.log("entra na função de seleção");
    if (num === 1) {
        console.log("cartão está sendo selecionado");
        const elemento = document.querySelector(".card", ".1");
        elemento.classList.add("selected");
        contador++;
        category1 = true;
    }
}

function deselectCard(num) {
    console.log("entra na função de deseleção");
    if (num === 1) {
        console.log("cartão está sendo deselecionado");
        const elemento = document.querySelector(".card ", ".1", ".selected ");
        elemento.classList.remove("selected");
        contador--;
        category1 = false;
    }
}

function clicked(category) {
    console.log("card está sendo clicado");
    switch (category) {
        case 1:
            console.log("entra no switch case");
            if (category1 === true) {
                deselectCard(1)
            } else {
                selectCard(1)
            }
            break;
        case 2:
            if (category2 === true) {
                deselectCard(2)
            } else {
                selectCard(2)
            }
            break;
        case 3:
            if (category3 === true) {
                deselectCard(3)
            } else {
                selectCard(3)
            }
            break;
        default:
            break;

    }
}