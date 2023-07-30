// Obter referências aos elementos HTML necessários
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyDe = document.querySelector(".currency-de")

// Função para realizar a conversão de moedas
function convertValues() {
  // Obter o valor da moeda de entrada fornecido pelo usuário
  const inputCurrencyValue = document.querySelector(".input-currency").value

  // Obter referências aos elementos para exibir o valor da moeda de entrada e o valor convertido
  const currencyValueToConvert = document.querySelector( ".currency-value-to-convert")
  const currencyValueConverted = document.querySelector(".currency-value")

  // Definir as taxas de câmbio para as moedas selecionadas
  const dolarToday = 4.73
  const euroToday = 5.21
  const bitcoinToday = 35000 // Supondo que 1 Bitcoin vale 35.000 BRL
  const libraToday = 6.08
  const realToday = 1


  
  // Converter o valor da moeda de entrada para a moeda de destino selecionada
  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday)
  } 

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday)
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday)

    // Uma forma alternativa de exibir o valor convertido em BTC (não utilizada atualmente)
    // currencyValueConverted.innerHTML = convertValues.toFixed(8) + " BTC"
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday)
  }

  if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue / realToday)
  }
  // Exibir o valor da moeda de entrada em BRL (Real Brasileiro)
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue)
  

}




// Função para atualizar o nome da moeda e a imagem com base na seleção do usuário
function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  // Atualizar o nome e a imagem da moeda com base na moeda selecionada
  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/dolar.png"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
  }
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real"
    currencyImage.src = "./assets/real.png"
  }

  // Recalcular e exibir o valor convertido da moeda
  convertValues()
}

// Adicionar event listeners para a mudança de seleção da moeda e o clique no botão de conversão
currencyDe.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)