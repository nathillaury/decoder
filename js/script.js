const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnCriptografar() {
    const textoCriptografado = criptografar(inputTexto.value)
    mensagem.value = textoCriptografado
}

function criptografar(stringCriptografada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringCriptografada;
}
    
    function btnDescriptografar() {
    const textoDescriptografado = descriptografar(inputTexto.value)
    mensagem.value = textoDescriptografado
}

function descriptografar(stringDescriptografada) {
    let matrizCode = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDescriptografada = stringDescriptografada.toUpperCase();


    for(let i=0; i < matrizCode.length; i++) {
        if(stringDescriptografada.includes(matrizCode[i][0])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCode[i][0], matrizCode[i][1])
        }
    }

    return stringDescriptografada;
}