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

//Incremento 
var data = 0;
var pedidosSelecionados = [];

nomeitem = document.getElementById("item1").textContent
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;

    if(data >= 1) {
        pedidosSelecionados.push(nomeitem);
        pedidosSelecionados.push(data);
        console.log(pedidosSelecionados);
    }
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
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
    
    var url = "https://wa.me/" + cel + "?text="
    +"*Nome :*" +nome+"%0a"
    +"*telefone :*" +telefone+"%0a"
    +"*data entrega :*" +data_entrega+"%0a"
    +"*endereco :*" +endereco+"%0a"
    +"*numero :*" +numero+"%0a"
    +"*cidade :*" +cidade+"%0a"
    +"pedidos: "+pedidosSelecionados+"%0a%0a"

    window.open(url, '_blank').focus();
}