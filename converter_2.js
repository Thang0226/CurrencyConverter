const ti_gia = 24750

function convert(){
    let amount = +document.getElementById("amount").value
    let fr_currency = +document.getElementById("from").value
    let to_currency = +document.getElementById("to").value
    let exchange_rate = fr_currency/to_currency

    document.getElementById("result").innerHTML = amount*exchange_rate
    
    document.getElementById("to_currency").innerHTML = to_currency
}