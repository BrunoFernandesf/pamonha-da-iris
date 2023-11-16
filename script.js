document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carrossel-slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    document.addEventListener("click", function (event) {
        if (event.target.id === "nextBtn") {
            nextSlide();
        } else if (event.target.id === "prevBtn") {
            prevSlide();
        }
    });

    //Mudança slide tempo
    setInterval(nextSlide, 5000);
});

var pedidosSelecionados = {};

// Incremento
function increment(nomeItem) {
    if (!pedidosSelecionados[nomeItem]) {
        pedidosSelecionados[nomeItem] = 0;
    }

    pedidosSelecionados[nomeItem]++;
    document.getElementById("counting-" + nomeItem).innerText = pedidosSelecionados[nomeItem];

    console.log(pedidosSelecionados);
}

// Decremento
function decrement(nomeItem) {
    if (pedidosSelecionados[nomeItem] > 0) {
        pedidosSelecionados[nomeItem]--;
        document.getElementById("counting-" + nomeItem).innerText = pedidosSelecionados[nomeItem];

        console.log(pedidosSelecionados);
    }
}

//Função envio whatsapp
function whatsenviar() {
    console.log("Função whatsenviar() chamada!");

    var cel = "+5511975602377";

    var nome = document.querySelector('.nome').value;
    var telefone = document.querySelector('.telefone').value;
    var data_entrega = document.querySelector('.data_entrega').value;
    var endereco = document.querySelector('.endereco').value;
    var numero = document.querySelector('.numero').value;
    var cidade = document.querySelector('.cidade').value;

    // Substitui os traços por espaços apenas nos nomes dos itens
    var pedidosString = JSON.stringify(pedidosSelecionados, (key, value) => {
        if (key === 'nome') {
            return value.replace(/-/g, ' ');
        }
        return value;
    });

    // Substitui todos os traços por espaços na string resultante
    pedidosString = pedidosString.replace(/-/g, ' ');

    var url = "https://wa.me/" + cel + "?text="
        + "Nome : " + nome + "%0a"
        + "Telefone :" + telefone + "%0a"
        + "Data entrega : " + data_entrega + "%0a"
        + "Endereco : " + endereco + "%0a"
        + "Número : " + numero + "%0a"
        + "Cidade : " + cidade + "%0a"
        + "Pedido: " + pedidosString + "%0a%0a";

    window.open(url, '_blank').focus();
}