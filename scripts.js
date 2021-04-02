let contador = 0;

let category_array = ['a', 'b', 'c'];
let category_selected = [false, false, false];

let selected = [null, null, null];

let fecharPedido = false;

let price_array = [0, 0, 0];
let item_title = "";

function confirmarPedido() {
    let total = 0;
    for (let i = 0; i < price_array.length; i++) {
        total += price_array[i];
    }
    console.log(total.toFixed(2));
    document.querySelector(".cart-item.total .total-price").innerHTML = total.toFixed(2);
    const elemento = document.querySelector(".fade");
    elemento.classList.remove("hidden");
}

function cancelar() {
    console.log("botao está sendo clicado");
    const elemento = document.querySelector(".fade");
    elemento.classList.add("hidden");
}

// function

function clicked(category, card) {
    const card_toString = "." + category + card;
    const price = parseFloat(document.querySelector(card_toString + " .price .hidden").innerHTML);
    for (let index = 0; index < category_array.length; index++) {
        //seleciona a categoria
        if (category_array[index] === category) {
            const elemento = document.querySelector(card_toString);
            // clicou em um card
            if (category_selected[index] === false) {
                elemento.classList.add("selected");
                price_array[index] = price;
                selected[index] = elemento;
                contador++;
                category_selected[index] = true;
            }
            // clicou em um card diferente
            else if (elemento !== selected[index]) {
                price_array[index] = price;
                selected[index].classList.remove("selected");
                selected[index] = elemento;
                elemento.classList.add("selected");
            }
            // clicou no card selecionado
            else {
                price_array[index] = 0;
                selected[index].classList.remove("selected");
                selected[index] = null;
                category_selected[index] = false;
                contador--;
            }
        }
    }
    habilitarPedido(contador);
}

function habilitarPedido(contador) {
    const elemento = document.querySelector(".habilitado");
    if (contador === 3) {
        fecharPedido = true;
        elemento.classList.remove("hidden");
    } else if (fecharPedido) {
        fecharPedido = false;
        elemento.classList.add("hidden");
    }
}