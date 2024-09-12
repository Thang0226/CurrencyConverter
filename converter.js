const ti_gia = 24750

function convert(){
    let amount = document.getElementById("amount").value
    let fr_currency = document.getElementById("from").value
    let to_currency = document.getElementById("to").value

    if (fr_currency == "USD"){
        if (to_currency == "USD"){
            document.getElementById("result").innerHTML = amount
        }
        else if (to_currency=="VND") {
            document.getElementById("result").innerHTML = amount*ti_gia
        }
    }
    else if (fr_currency == "VND"){
        if (to_currency == "VND"){
            document.getElementById("result").innerHTML = amount
        }
        else if (to_currency=="USD") {
            document.getElementById("result").innerHTML = amount/ti_gia
        }
    }
    
    document.getElementById("to_currency").innerHTML = to_currency
}