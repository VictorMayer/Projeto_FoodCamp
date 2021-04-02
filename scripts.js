let contador = 0;

let category1 = false;
let category2 = false;
let category3 = false;

let selected = null;

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

function selectCard(category, card) {
    console.log("entra na função de seleção");
    if (category === 1) {
        console.log("cartão está sendo selecionado");
        const card_toString = ".a" + card;
        const elemento = document.querySelector(card_toString);
        elemento.classList.add("selected");
        selected = elemento;
        contador++;
        category1 = true;
    } else if (category === 2) {
        console.log("cartão está sendo selecionado");
        const card_toString = ".b" + card;
        const elemento = document.querySelector(card_toString);
        elemento.classList.add("selected");
        selected = elemento;
        contador++;
        category2 = true;
    } else if (category === 3) {
        console.log("cartão está sendo selecionado");
        const card_toString = ".c" + card;
        const elemento = document.querySelector(card_toString);
        elemento.classList.add("selected");
        selected = elemento;
        contador++;
        category3 = true;
    } else {
        prompt("Um erro inesperado ocorreu. Por favor, entre em contato com o desenvolvedor")
    }
}

function deselectCard(category, card) {
    console.log("entra na função de deseleção");
    if (category === 1) {
        console.log("cartão está sendo deselecionado");
        const cardSelected_toString = ".a" + card + ".selected";
        // const elemento = document.querySelector(cardSelected_toString);
        selected.classList.remove("selected");
        contador--;
        category1 = false;
    } else if (category === 2) {
        console.log("cartão está sendo deselecionado");
        const cardSelected_toString = ".b" + card + ".selected";
        // const elemento = document.querySelector(cardSelected_toString);
        selected.classList.remove("selected");
        contador--;
        category2 = false;
    } else if (category === 3) {
        console.log("cartão está sendo deselecionado");
        const cardSelected_toString = ".c" + card + ".selected";
        // const elemento = document.querySelector(cardSelected_toString);
        selected.classList.remove("selected");
        contador--;
        category3 = false;
    }
}

// function

function clicked(category, card) {
    switch (category) {
        case 1:
            if (category1 === true) {
                deselectCard(1, card)
            } else {
                selectCard(1, card)
            }
            break;
        case 2:
            if (category2 === true) {
                deselectCard(2, card)
            } else {
                selectCard(2, card)
            }
            break;
        case 3:
            if (category3 === true) {
                deselectCard(3, card)
            } else {
                selectCard(3, card)
            }
            break;
        default:
            break;

    }
}