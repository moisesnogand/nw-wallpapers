function atualizarCeu() {
    const hora = 11;
    const minutos = new Date(). getMinutes();
    const horaDecimal = hora + (minutos / 60);
    const ceu = document.querySelector(".ceu");
    const ceuTransicao = document.querySelector(".ceu-transicao");
    const sol = document.querySelector(".sol");
    const lua = document.querySelector(".lua");

    if (ceu) {
        if (hora >= 6 && hora < 12) {
            ceu.style.background =
                "linear-gradient(#6dd5fa,#2980b9)";
        }
        else if (hora >= 12 && hora < 18) {
            ceu.style.background =
                "linear-gradient(#56ccf2,#2f80ed)";
        }
        else if (hora >= 18 && hora < 24) {
            ceu.style.background =
                "linear-gradient(#ff9966,#2c3e50)";
        }
        else {
            ceu.style.background =
                "linear-gradient(#000428,#004e92)";
        }
    }

    if (ceuTransicao) {
        if (hora >= 18 && hora < 24) {
            ceuTransicao.style.opacity = (horaDecimal - 18) / 6;
        }
        else {
            ceuTransicao.style.opacity = "0";
        }
    }
    if (sol) {
        /* sol aparece */
        if (hora >= 6 && hora < 18) {
            sol.style.left = ((horaDecimal - 6) * 8) + "%";
            sol.style.top = (150 - Math.sin((horaDecimal - 6) * Math.PI / 12) * 100) + "px";
            sol.style.opacity = "1";
        }
        else {
            sol.style.opacity = "0";
        }
    }
if (lua) {

    let horaLua;

    if (hora >= 18) {
        horaLua = horaDecimal - 18;
    }
    else {
        horaLua = horaDecimal + 6;
    }

    if (hora >= 18 || hora < 6) {
        lua.style.left = (horaLua * 8) + "%";
        lua.style.top = (150 - Math.sin(horaLua * Math.PI / 12) * 100) + "px";
        lua.style.opacity = "1"
    }
    else {
        lua.style.opacity = "0";
    }
    setTimeout(atualizarCeu, 1000);
}
    let horamanha;
    let horatarde;
    let horanoite;
    let horamadrugada;
    let opacity;
    let clareamento;
    let corceu;

    if (hora >= 6 && hora < 12) {
        horamanha = horaDecimal - 6;
        clareamento = (horaDecimal - 6) / 6;       
        ceuTransicao.style.opacity = clareamento;
        let red = 80 + (86 - 80) * clareamento;
        let green = 150 + (204 - 150) * clareamento;
        let blue = 190 + (242 - 190) * clareamento;
        corceu = `linear-gradient(rgb(${red}, ${green}, ${blue}), #004e92)`;
        ceu.style.background = corceu;
    }
    if (hora >= 12 && hora < 18) {
        horatarde = horaDecimal - 12;
        opacity = 1 - ((horaDecimal - 12) / 6);
        clareamento = (horaDecimal - 12) / 6;
        ceuTransicao.style.opacity = opacity;
        let red = 86 + (255 - 86) * clareamento;
        let green = 204 + (153 - 204) * clareamento;
        let blue = 242 + (102 - 242) * clareamento;
        corceu = `linear-gradient(rgb(${red}, ${green}, ${blue}), #004e92)`;
        ceu.style.background = corceu;
    }
    if (hora >= 18 && hora < 24) {
        horanoite = horaDecimal - 18;
        opacity = 1 - ((horaDecimal - 18) / 6);
        clareamento = (horaDecimal - 18) / 6;
        ceuTransicao.style.opacity = opacity;
        let red = 255 + (80 - 255) * clareamento;
        let green = 153 + (4 - 153) * clareamento;
        let blue = 102 + (40 - 102) * clareamento;
        corceu = `linear-gradient(rgb(${red}, ${green}, ${blue}), #004e92)`;
        ceu.style.background = corceu;
    }
    if (hora >= 0 && hora < 6) {
        horamadrugada = horaDecimal ;
        opacity = 1 - (horaDecimal / 6);
        clareamento = horaDecimal / 6;
        ceuTransicao.style.opacity = opacity;
        let red = 80 * clareamento;
        let green = 4 + (150 - 4) * clareamento;
        let blue = 40 + (190 - 40) * clareamento;
        corceu = `linear-gradient(rgb(${red}, ${green}, ${blue}), #004e92)`;
        ceu.style.background = corceu;
    }
    else {
        horamadrugada = horaDecimal
    }

const botao = document.getElementById("entra");

if (botao) {
    botao.addEventListener("click", function () {
        window.location.href = "home.html";
    });
}
}
atualizarCeu();