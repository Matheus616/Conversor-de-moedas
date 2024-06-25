const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencyselected = document.querySelector(".currency-selected");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".valor-moeda-converter");
    const currencyValueConverted = document.querySelector(".valor-moeda");

    const dolarToday = 5.43;
    const euroToday = 5.81;
    const libraToday = 6.87;
    const bitcoinToday = 348.250;
    const realToday = 1.50;


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
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencyselected.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday);
    }

    if (currencyselected.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencyselected.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

}

function changeCurrency() {
    const currancyName = document.getElementById("currancy-name")
    const currancyImage = document.querySelector(".currancy-img")
    const currencyImageConverted = document.querySelector(".currency-imagem")
    const currencyNameConverted = document.querySelector(".moeda-valor")


    if (currencySelect.value === "dolar") {
        currancyName.innerHTML = "Dólar americano";
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

    if (currencySelect.value === "real") {
        currancyName.innerHTML = "Real";
        currancyImage.src = "./img/brasil 2.png"
    }

    if (currencyselected.value === "dolar") {
        currencyNameConverted.innerHTML = "Dólar americano";
        currencyImageConverted.src = "./img/estados-unidos (1) 1.png"
    }

    if (currencyselected.value === "euro") {
        currencyNameConverted.innerHTML = "Euro";
        currencyImageConverted.src = "./img/euro 3.png"
    }

    convertValues()

}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

