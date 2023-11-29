document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slidesWrapper = document.querySelector(".carrossel-wrapper");
    const bullets = document.querySelectorAll(".bullet");
    const totalSlides = bullets.length;

    function showSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        slidesWrapper.style.transform = `translateX(${-currentSlide * 100}%)`;
        updateBullets();
    }

    function updateBullets() {
        bullets.forEach((bullet, i) => {
            if (i === currentSlide) {
                bullet.classList.add("active");
            } else {
                bullet.classList.remove("active");
            }
        });
    }

    function changeSlide(index) {
        showSlide(index);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    bullets.forEach((bullet, index) => {
        bullet.addEventListener("click", function () {
            changeSlide(index);
        });
    });

    setInterval(() => {
        nextSlide();
    }, 5000);
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

    var cel = "+5511963220463";

    var nome = document.querySelector('.nome').value;
    var telefone = document.querySelector('.telefone').value;
    var data_entrega = document.querySelector('.data_entrega').value;
    var endereco = document.querySelector('.endereco').value;
    var numero = document.querySelector('.numero').value;
    var bairro = document.querySelector('.bairro').value;

    // Substitui os traços por espaços apenas nos nomes dos itens
    var pedidosString = JSON.stringify(pedidosSelecionados, (key, value) => {
        if (key === 'nome') {
            return value.replace(/-/g, ' ');
        }
        return value;
    });

    // Substitui todos os traços por espaços na string resultante
    pedidosString = pedidosString.replace(/-/g, ' ');

    pedidosString = pedidosString.replace(/["{}]/g, ' ' );

    var url = "https://wa.me/" + cel + "?text="
        + "Nome: " + nome + "%0a"
        + "Telefone: " + telefone + "%0a"
        + "Data entrega: " + data_entrega + "%0a"
        + "Endereço: " + endereco + "%0a"
        + "Número: " + numero + "%0a"
        + "Bairro: " + bairro + "%0a"
        + "Pedido: " + pedidosString + "%0a%0a";

    window.open(url, '_blank').focus();
}