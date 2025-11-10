const nome = document.getElementById("input1");
const endereco = document.getElementById("input2");
const cep = document.getElementById("input3");
const cpf = document.getElementById("input4");
const tel = document.getElementById("input5");
const cnpj = document.getElementById("input6");
const cdg = document.getElementById("input7");

function cepMask() {
    if (cep.value[2] != "." && cep.value[2] != undefined) {
        cep.value = cep.value.slice(0, 2) + "." + cep.value[2]
    }
    if (cep.value[6] != "-" && cep.value[6] != undefined) {
        cep.value = cep.value.slice(0, 6) + "-" + cep.value[6]
    }
}

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

function cdgMask() {
    if (cdg.value[2] != "_" && cdg.value[2] != undefined) {
        cdg.value = cdg.value.slice(0, 2) + "_" + cdg.value[2]
    }
    if (cdg.value[5] != "/" && cdg.value[5] != undefined) {
        cdg.value = cdg.value.slice(0, 5) + "//" + cdg.value[5]
    }
    if (cdg.value[10] != "-" && cdg.value[10] != undefined) {
        cdg.value = cdg.value.slice(0, 10) + "-" + cdg.value[10]
    }
    if (cdg.value[14] != "." && cdg.value[14] != undefined) {
        cdg.value = cdg.value.slice(0, 14) + ".9." + cdg.value[14]
    }
}

function envio() {

    window.alert("Envio realizado com sucesso!")

}