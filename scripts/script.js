
//Calculations hier


function upd(){
    totalepc = amount1*1+amount2*5
    epc = 1+totalepc
    displayedmoney = formatMoney(money);
    document.getElementById("Money").textContent = displayedmoney
    document.getElementById("Epc").textContent = epc+"€"
}

upd()