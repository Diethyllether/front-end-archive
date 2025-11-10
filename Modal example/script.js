const nome = document.getElementById("input2");
const endereco = document.getElementById("input3");
const cpf = document.getElementById("input4");
const tel = document.getElementById("input5");
const idade = document.getElementById("input6");
const rg = document.getElementById("input7");

function modal(card) {
    const modal = document.getElementById("modal")
    modal.style.display = "flex";
}

const root = document.documentElement.style
function trocarTema(tema) {
    switch (tema) {
        case "claro":
            root.setProperty("--background", "#000000");
            root.setProperty("--foreground", "#fca311");
            root.setProperty("--text", "#FFFFFF");
            sessionStorage.setItem("tema", "escuro")
            break;

        case "escuro":
            root.setProperty("--background", "#ffffff");
            root.setProperty("--foreground", "#ed9302");
            root.setProperty("--text", "#000000");
            sessionStorage.setItem("tema", "claro")
            break;
    }
}

addEventListener("DOMContentLoaded", () => {
    (sessionStorage.getItem("tema") == "escuro") ? trocarTema("claro") : trocarTema("escuro");
})

function cpfMask() {
    if (cpf.value[3] != "." && cpf.value[3] != undefined) {
        cpf.value = cpf.value.slice(0, 3) + "." + cpf.value[3]
    }
    if (cpf.value[7] != "." && cpf.value[7] != undefined) {
        cpf.value = cpf.value.slice(0, 7) + "." + cpf.value[7]
    }
    if (cpf.value[11] != "-" && cpf.value[11] != undefined) {
        cpf.value = cpf.value.slice(0, 11) + "-" + cpf.value[11]
    }
}

function telMask() {
    if (tel.value[0] != "(" && tel.value[0] != undefined) {
        tel.value = tel.value.slice(0, 0) + "(" + tel.value[0]
    }
    if (tel.value[3] != ")" && tel.value[3] != undefined) {
        tel.value = tel.value.slice(0, 3) + ") " + tel.value[3]
    }
    if (tel.value[6] != " " && tel.value[6] != undefined) {
        tel.value = tel.value.slice(0, 6) + " " + tel.value[5]
    }
    if (tel.value[11] != "-" && tel.value[11] != undefined) {
        tel.value = tel.value.slice(0, 11) + "-" + tel.value[10]
    }
}

function cnpjMask() {
    if (cnpj.value[2] != "." && cnpj.value[2] != undefined) {
        cnpj.value = cnpj.value.slice(0, 2) + "." + cnpj.value[2]
    }
    if (cnpj.value[6] != "." && cnpj.value[6] != undefined) {
        cnpj.value = cnpj.value.slice(0, 6) + "." + cnpj.value[6]
    }
    if (cnpj.value[10] != "/" && cnpj.value[10] != undefined) {
        cnpj.value = cnpj.value.slice(0, 10) + "/0001-" + cnpj.value[10]
    }
}

function rgMask() {
    if (rg.value[2] != "." && rg.value[2] != undefined) {
        rg.value = rg.value.slice(0,2)+"."+rg.value[2];
    }
    if (rg.value[6] != "." && rg.value[6] != undefined) {
        rg.value = rg.value.slice(0,6)+"."+rg.value[6];
    }
}

function envio() {
    const modal = document.getElementById("modal")
    window.alert("Envio realizado com sucesso!")
    localStorage.setItem("nome", nome.value);
    localStorage.setItem("endereco", endereco.value);
    localStorage.setItem("cpf", cpf.value);
    localStorage.setItem("telefone", tel.value);
    localStorage.setItem("idade", idade.value);
    localStorage.setItem("rg", rg.value);
    modal.style.display = "none";
}