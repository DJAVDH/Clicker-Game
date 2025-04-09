
//Calculations hier

function upd(){ //Update UI, Getallen En Formatting
    totalepc = amount1*1+amount2*10 //Telt op Upgrades naar de Euro per click
    totalautoclickpower = amount3*15 // Telt op upgrades naar de autoclick value
    autoclickpower = totalautoclickpower //Vertelt de autoclick value
    epc = (1+totalepc)*foodmulti //Vertelt de Click value
    displayedmoney = formatMoney(money); //Displayed geld
    document.getElementById("Money").textContent = displayedmoney+"€" //Update de geld display
    document.getElementById("Epc").textContent = epc+"€" //Update de epc display
}

function startautoclick() {
    if (autoEpcInterval) clearInterval(autoEpcInterval); // Haalt de oude interval weg zodat de code niet breekt
 
    autoEpcInterval = setInterval(() => {
        if (autoclickpower > 0) {
            money += autoclickpower; // Geeft geld van autoclicker
            upd(); // Update UI
        }
    }, Math.round((autoclickspeed-(amount4/10)) * 1000)) // Snelheid autoclicker
}




upd()