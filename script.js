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
function whatsenviar(){
    console.log("Função whatsenviar() chamada!");

    var cel = "+5511975602377";

    var nome = document.querySelector('.nome').value;
    var telefone = document.querySelector('.telefone').value;
    var data_entrega = document.querySelector('.data_entrega').value;
    var endereco = document.querySelector('.endereco').value;
    var numero = document.querySelector('.numero').value;
    var cidade = document.querySelector('.cidade').value;
    
    var pedidosString = JSON.stringify(pedidosSelecionados);

    var url = "https://wa.me/" + cel + "?text="
    +"*Nome :*" +nome+"%0a"
    +"*telefone :*" +telefone+"%0a"
    +"*data entrega :*" +data_entrega+"%0a"
    +"*endereco :*" +endereco+"%0a"
    +"*numero :*" +numero+"%0a"
    +"*cidade :*" +cidade+"%0a"
    +"pedidos: "+pedidosString+"%0a%0a"

    window.open(url, '_blank').focus();
}