//Alle main knoppen hier


function clickfood(){  //Main clicker
    formatMoney()

    const playEetsound = new Audio(eetgeluid)   //Speel geluid f
    playEetsound.playbackRate = Math.random() * (5-2) + 2;
    playEetsound.volume = 1;
    playEetsound.currentTime = 0.2;
    playEetsound.play()

    money=money+epc //geld erbij
    upd("money") //update de ui
}

function openmenu(){ //Open de food menu
    const slideMenu = document.getElementById('FoodMenu');

    const playslidesound = new Audio(slidegeluid)
    playslidesound.playbackRate = 10;
    playslidesound.currentTime = 0.6;
    playslidesound.play()

    slideMenu.classList.toggle('open');

};

function buyupgrade1(){ //Upgrade 1 kopen +1
    if (money<prijs1){ //als geld lager is dan prijs dan stop function
        return;
    }

    const playupgradesound = new Audio(upgradegeluid)
    playupgradesound.playbackRate = 3;
    playupgradesound.currentTime = 0.4;
    playupgradesound.play()


    amount1++  //+1 voor amount1 (+1 epc/europerclick)
    money -= prijs1  //Geld - prijs = gewoon kopen voor prijs
    prijs1 = Math.round(prijs1*1.03+10) //prijs increase
    upd() //update ui
    let displayedprice1 = formatMoney(prijs1) //nieuwe prijs format
    document.getElementById("Amount1").textContent = amount1 //Hoeveel je hebt gekocht in de ui
    document.getElementById("Price1").textContent = displayedprice1+("€") //Nieuwe prijs update
}

function buyupgrade2(){ //Upgrade 2 kopen +10
    if (money<prijs2){
        return;
    }

    const playupgradesound = new Audio(upgradegeluid)
    playupgradesound.playbackRate = 3;
    playupgradesound.currentTime = 0.4;
    playupgradesound.play()

    amount2++
    money -= prijs2
    prijs2 = Math.round(prijs2*1.1+50)
    upd()
    let displayedprice2 = formatMoney(prijs2)
    document.getElementById("Amount2").textContent = amount2
    document.getElementById("Price2").textContent = displayedprice2+("€")
}


function buyupgrade3(){ // +15/sec
if (money<prijs3){
    return;
}

const playupgradesound = new Audio(upgradegeluid)
playupgradesound.playbackRate = 3;
playupgradesound.currentTime = 0.4;
playupgradesound.play()

amount3++
upd()
money -= prijs3
prijs3 = Math.round(prijs3*1.1+35)

if (autoclickpower > 0) {
    startautoclick(); // als autoclickpower hoger dan 0 is dan start de autoclick syteem
}

upd()
    let displayedprice3 = formatMoney(prijs3)
    document.getElementById("Amount3").textContent = amount3
    document.getElementById("Price3").textContent = displayedprice3+("€")
}



function buyupgrade4(){ // +15/sec
    if (money<prijs4){
        return;
    }
    
    const playupgradesound = new Audio(upgradegeluid)
    playupgradesound.playbackRate = 3;
    playupgradesound.currentTime = 0.4;
    playupgradesound.play()
    
    amount4++
    upd()
    money -= prijs4
    prijs4 = Math.round(prijs4*1.25+200)
    
    if (autoclickpower > 0) {
        startautoclick(); // Start automatic scoring if not already running
    }

    if (amount4 == 9){
        document.getElementById("Upgrade4").remove()
    }
    
    upd()
        let displayedprice4 = formatMoney(prijs4)
        document.getElementById("Amount4").textContent = amount4
        document.getElementById("Price4").textContent = displayedprice4+("€")
    }


