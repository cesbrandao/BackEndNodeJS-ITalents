window.onload = function () {
    document.getElementById("azul-button").addEventListener("mouseover", function(){
        document.getElementById("title").style.color = "blue";
    });

    document.getElementById("amarelo-button").addEventListener("mouseout", function(){
        document.getElementById("title").style.color = "yellow";
    });

    document.getElementById("vermelho-button").addEventListener("mouseup", function(){
        document.getElementById("title").style.color = "red";
    });
}