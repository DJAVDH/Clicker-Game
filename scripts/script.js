function upd(){
    displayedmoney = formatMoney(money);
    document.getElementById("Money").textContent = displayedmoney
    document.getElementById("Epc").textContent = epc+"€"
    
}

upd()