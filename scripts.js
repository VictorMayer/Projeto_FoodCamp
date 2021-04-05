let contador = 0;

let total = 0;
let total_toString = "";

let category_array = ['a', 'b', 'c'];
let category_selected = [false, false, false];

let selected = [null, null, null];

let fecharPedido = false;

let price_array_number = [0, 0, 0];
let price_array_string = ["", "", ""];
let itens_array = ["", "", ""];
const cart_itens_title = [".food-title", ".drink-title", ".desert-title"];
const cart_itens_price = [".food-price", ".drink-price", ".desert-price"];


function clicked(category, card) {
    const card_toString = "." + category + card;
    let price_number = parseFloat(document.querySelector(card_toString + " .price .hidden").innerHTML);
    let price_string = document.querySelector(card_toString + " .price p:first-child").innerHTML;
    let item_title = document.querySelector(card_toString + " .item-title p").innerHTML;
    //seleciona a categoria
    for (let index = 0; index < category_array.length; index++) {
        if (category_array[index] === category) {
            const elemento = document.querySelector(card_toString);
            // clicou em um card
            if (category_selected[index] === false) {
                elemento.classList.add("selected");
                price_array_number[index] = price_number;
                price_array_string[index] = price_string;
                itens_array[index] = item_title;
                selected[index] = elemento;
                contador++;
                category_selected[index] = true;
            }
            // clicou em um card diferente
            else if (elemento !== selected[index]) {
                price_array_number[index] = price_number;
                price_array_string[index] = price_string;
                itens_array[index] = item_title;
                selected[index].classList.remove("selected");
                selected[index] = elemento;
                elemento.classList.add("selected");
            }
            // clicou no card selecionado
            else {
                price_array_number[index] = 0;
                price_array_string[index] = "";
                itens_array[index] = "";
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

function confirmarPedido() {
    for (let i = 0; i < price_array_number.length; i++) {
        total += price_array_number[i];
    }

    for (let i = 0; i < price_array_string.length; i++) {
        document.querySelector(cart_itens_price[i]).innerHTML = price_array_string[i].substr(3);
    }

    for (let i = 0; i < itens_array.length; i++) {
        document.querySelector(cart_itens_title[i]).innerHTML = itens_array[i];
    }
    total_toString = "R$ " + total.toFixed(2).toString().replace(".", ",");
    document.querySelector(".cart-item.total .total-price").innerHTML = total_toString;
    const elemento = document.querySelector(".fade");
    elemento.classList.remove("hidden");
}

function cancelar() {
    console.log("botao está sendo clicado");
    const elemento = document.querySelector(".fade");
    elemento.classList.add("hidden");
}

function enviar() {
    const name = prompt("Digite seu nome: ");
    const adress = prompt("Ok, agora conte-nos, para devemos entregar seu pedido?           Endereço: ");
    const prato = document.querySelector(".food-title").innerHTML;
    const bebida = document.querySelector(".drink-title").innerHTML;
    const sobremesa = document.querySelector(".desert-title").innerHTML;
    const mensagem = "Olá, gostaria de fazer o pedido:\n- Prato: " + prato + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\n Total: " + total_toString + "\n \n Nome: " + name + "\n Endereço: " + adress;
    const coded_msg = encodeURIComponent(mensagem);
    document.querySelector(".enviar").href = "https://wa.me/5548991919779?text=" + coded_msg;
}