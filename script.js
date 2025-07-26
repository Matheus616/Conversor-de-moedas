const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".valor-moeda-converter");
    const currencyValueConverted = document.querySelector(".valor-moeda");

    const bitcoinToday = 657.255;
    const dolarToday = 5.56;
    const euroToday = 6.53;
    const libraToday = 7.47;
    


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
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
        currancyName.innerHTML = "Dólar (EUA)";
        currancyImage.src = "./img/estados-unidos (1) 1.png"
    }

    if (currencySelect.value === "euro") {
        currancyName.innerHTML = "Euro";
        currancyImage.src = "./img/euro 3.png"
    }

    if (currencySelect.value === "libra") {
        currancyName.innerHTML = "Libra";
        currancyImage.src = "./img/libra 1.png"
    }

    if (currencySelect.value === "bitcoin") {
        currancyName.innerHTML = "Bitcoin";
        currancyImage.src = "./img/bitcoin 1.png"
    }

    convertValues()

}



currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

