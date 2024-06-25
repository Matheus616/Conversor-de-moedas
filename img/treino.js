const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".valor-moeda-converter");
    const currencyValueConverted = document.querySelector(".valor-moeda");

    const dolarToday = 5.2;
    const euroToday = 6.2;

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currancyName = document.getElementById("currancy-name")
    const currancyImage = document.querySelector(".currancy-img")


    if (currencySelect.value === "dolar") {
        currancyName.innerHTML = "Dólar americano";
        currancyImage.src = "./img/estados-unidos (1) 1.png"
    }

    if (currencySelect.value === "euro") {
        currancyName.innerHTML = "Euro"
        currancyImage.src = "./img/euro 3.png"
    }

    convertValues()

}


currencySelect.addEventListener("change", changeCurrency );
convertButton.addEventListener("click", convertValues);
