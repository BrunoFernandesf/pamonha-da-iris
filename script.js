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

    //Muda a cada 5 seg
    setInterval(nextSlide, 3000);
});

var data = 0;
var pedidosSelecionados = [];

// Incremento
function increment(nomeItem, countingId) {
    data = data + 1;
    document.getElementById(countingId).innerText = data;

    // Verificar se o nome do item já está presente no vetor
    var index = pedidosSelecionados.findIndex(item => item.nome === nomeItem);

    if (index === -1) {
        pedidosSelecionados.push({ nome: nomeItem, quantidade: data });
    } else {
        pedidosSelecionados[index].quantidade = data;
    }

    console.log(pedidosSelecionados);
}

// Decremento
function decrement(nomeItem, countingId) {
    if (data > 0) {
        data = data - 1;
        document.getElementById(countingId).innerText = data;

        // Remover o nome do item do vetor se a quantidade for zero
        if (data === 0) {
            var index = pedidosSelecionados.findIndex(item => item.nome === nomeItem);
            if (index !== -1) {
                pedidosSelecionados.splice(index, 1);
            }
        } else {
            // Atualizar a quantidade se ainda houver itens
            var index = pedidosSelecionados.findIndex(item => item.nome === nomeItem);
            if (index !== -1) {
                pedidosSelecionados[index].quantidade = data;
            }
        }

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