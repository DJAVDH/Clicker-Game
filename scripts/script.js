
//Calculations hier

function upd(){
    totalepc = amount1*1+amount2*10
    totalautoclickpower = amount3*15
    autoclickpower = totalautoclickpower
    epc = 1+totalepc
    displayedmoney = formatMoney(money);
    document.getElementById("Money").textContent = displayedmoney+"€"
    document.getElementById("Epc").textContent = epc+"€"
}

function startautoclick() {
    if (autoEpcInterval) clearInterval(autoEpcInterval); // Clear old interval if exists
 
    autoEpcInterval = setInterval(() => {
        if (autoclickpower > 0) {
            money += autoclickpower; // Add AutoEpcValue to score
            upd(); // Update UI or game state
        }
    }, Math.round(autoclickspeed * 1000)) // Runs every AutoEpcSpeed seconds
}




upd()