//Elements Selection
const generatePasswordButton = document.getElementById('generate-password');
const generatePasswordElement = document.getElementById('generated-password');

//Functions
const getLowerCaseLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getUpperCaseLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48).toString()
};

const getSymbols = () => {
    const symbols = "!@#$%¨&*()_+`{^}<>:?[~],.;/-=";
    return symbols[Math.floor(Math.random() * 29)];
};

const generatePassword = (getLowerCaseLetter, getUpperCaseLetter, getNumber, getSymbols) => {
    let password = ""

    const passwordLength = 10

    const generators = [
        getLowerCaseLetter,
        getUpperCaseLetter,
        getNumber,
        getSymbols
    ]

    for (i = 0; i < passwordLength ; i = i + 4 ) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        });
    }
    
    password = password.slice(0, passwordLength)
    
    generatePasswordElement.style.display = "block"

    generatePasswordElement.querySelector("h4").innerText = password

    
};

//Events
generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLowerCaseLetter, getUpperCaseLetter, getNumber, getSymbols)
    
});

