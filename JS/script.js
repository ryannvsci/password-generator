//Seleção de Elementos
const generatePasswordButton = document.getElementById('generate-password')
const generatePasswordElement = document.getElementById('generated-password')

//Funções
const getLowerCaseLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getUpperCaseLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48).toString()
}

const getSymbols = () => {
    const symbols = "!@#$%¨&*()_+`{^}<>:?[~],.;/-=";
    return symbols[Math.floor(Math.random() * 29)];
}

//Eventos

generatePasswordButton.addEventListener("click", () => {
    console.log(getSymbols())
    generatePasswordElement.style.display = "block"   
    
})

