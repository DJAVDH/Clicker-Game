//Alle main knoppen hier


function clickfood(){  //Main clicker
    formatMoney()

    const playEetsound = new Audio(eetgeluid)
    playEetsound.playbackRate = Math.random() * (5-2) + 2;
    playEetsound.volume = 0.5;
    playEetsound.currentTime = 0.2;
    playEetsound.play()

    money=money+epc
    upd("money")
}

function openmenu(){ //Open de food menu
    const slideMenu = document.getElementById('FoodMenu');

    const playslidesound = new Audio(slidegeluid)
    playslidesound.playbackRate = 10;
    playslidesound.currentTime = 0.6;
    playslidesound.play()

    slideMenu.classList.toggle('open');

};

function buyupgrade1(){ //Upgrade 1 kopen
    if (money<prijs1){
        return;
    }

    const playupgradesound = new Audio(upgradegeluid)
    playupgradesound.playbackRate = 3;
    playupgradesound.currentTime = 0.4;
    playupgradesound.play()


    amount1++
    money -= prijs1
    prijs1 = Math.round(prijs1*1.05+15)
    upd()
    let displayedprice1 = formatMoney(prijs1)
    document.getElementById("Amount1").textContent = amount1
    document.getElementById("Price1").textContent = displayedprice1+("€")
}

function buyupgrade2(){ //Upgrade 2 kopen
    if (money<prijs2){
        return;
    }

    const playupgradesound = new Audio(upgradegeluid)
    playupgradesound.playbackRate = 3;
    playupgradesound.currentTime = 0.4;
    playupgradesound.play()

    amount2++
    money -= prijs2
    prijs2 = Math.round(prijs2*1.2+50)
    upd()
    let displayedprice2 = formatMoney(prijs2)
    document.getElementById("Amount2").textContent = amount2
    document.getElementById("Price2").textContent = displayedprice2+("€")
}


