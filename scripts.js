const convertButton = document.querySelector("button")

const currencySelect = document.querySelector(".currency-select")

async function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value

const MoedaValorConvert = document.querySelector(".valor-da-moeda-convert")

const moedaD = document.querySelector(".valor-da-moeda")

const data  = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(resposta => resposta.json())

const dolar = data.USDBRL.higth

const euroToday = data.EURBRL.higth



if(currencySelect.value == "dolar"){
    moedaD.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency:"USD"
    
    }).format( inputCurrencyValue / dolar)

}


if(currencySelect.value == "euro"){
 moedaD.innerHTML = new Intl.NumberFormat("de-DE",{
     style: "currency",
     currency:"EUR"
      

    }).format(inputCurrencyValue / euroToday )

}


if(currencySelect.value == "libra"){
    moedaD.innerHTML = new Intl.NumberFormat("eu-SP",{
    style: "currency",
    currency:"SYP"
}).format(inputCurrencyValue / libraToday )



}



MoedaValorConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)

}


function changeCurrency (){
    const currencyNAme = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".currency-img")
    if(currencySelect.value == "dolar"){
        currencyNAme.innerHTML= "Dólar Americano"
       currencyImg.src = "./assets/dolar.png"   
    }

    if(currencySelect.value == "euro"){
        currencyNAme.innerHTML = "Euro" 
        currencyImg.src = './assets/euro.png'  
}

if(currencySelect.value == "libra"){
    currencyNAme.innerHTML = "Libra"
    currencyImg.src = "./assets/libra.png"
}

convertValues()
}

currencySelect.addEventListener("change",changeCurrency  )
convertButton.addEventListener("click", convertValues)
