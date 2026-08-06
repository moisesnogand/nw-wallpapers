const hora = new Date().getHours();

if (hora >= 6 && hora < 12) {
    document.body.style.background =
        "linear-gradient(#6dd5fa,#2980b9)";
}
else if (hora >= 12 && hora < 18) {
    document.body.style.background =
        "linear-gradient(#56ccf2,#2f80ed)";
}
else if (hora >= 18 && hora < 21) {
    document.body.style.background =
        "linear-gradient(#ff9966,#2c3e50)";
}
else {
    document.body.style.background =
        "linear-gradient(#000428,#004e92)";
}
const botao = document.getElementById("entra");

if (botao) {
    botao.addEventListener("click", function ()
    { 
     window.location.href = "home.html";
    });
}