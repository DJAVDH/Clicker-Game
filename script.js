upd()

function upd() { //update alles/main ccode zodat alles werkt
    epcupgtotal = (0+epcupg)
    AutoEpcValueTotal = (0+AutoEpcValue)
    if (AutoEpcValue > 0 ){
        AutoEpcOn = true
    }

    if (epcupg1 == true) {
        multi = 2
        document.getElementById("multi").style.color = "lime";
        document.getElementById("multi2").style.color = "lime";
        document.getElementById("topbar").style.backgroundColor = "#697A21"
        document.getElementById("rightbar").style.backgroundColor = "#424B54"
        document.getElementById("bottombar").style.backgroundColor = "#424B54"
    }
    if (epcupg2 == true) {
        multi = 3
        document.getElementById("multi").style.color = "orange"
        document.getElementById("multi2").style.color = "orange";
        document.getElementById("topbar").style.backgroundColor = "#124E78"
        document.getElementById("rightbar").style.backgroundColor = "#57CC99"
        document.getElementById("bottombar").style.backgroundColor = "#57CC99"
    }
    if (epcupg3 == true) {
        multi = 4
        document.getElementById("multi").style.color = "red"
        document.getElementById("multi2").style.color = "red";
        document.getElementById("topbar").style.backgroundColor = "#8F5C38"
        document.getElementById("rightbar").style.backgroundColor = "#ECE4B7"
        document.getElementById("bottombar").style.backgroundColor = "#ECE4B7"
    }
    epc = (1+epcupgtotal)*multi
    AutoEpcValue = (0+AutoEpcValueTotal)
    document.getElementById("epc").textContent = epcupg+1; // Weergeven epc
    document.getElementById("score").textContent = score; // Weergeven epc
    document.getElementById("multi").textContent = (multi+"x"); // Weergeven epc
    document.getElementById("multi2").textContent = (multi+"x"); // Weergeven epc
    document.getElementById("total").textContent = ("("+epc+")")
    document.getElementById("autoEpcValue").textContent = (AutoEpcValue)
    document.getElementById("totalAuto").textContent = ("("+AutoEpcValue*multi+")")
    document.getElementById("autospeed").textContent = ("/"+AutoEpcSpeed+"s")
}

//COIN FLIP

function coinflip(){
    let flip = Math.random() < 0.5 ? 'kop' : 'munt';
    if (flip === 'kop'){
        score = score*2 
    } else{
        score = Math.round(score-score/1.5)
    }
    upd()
};

//AutoEpcSysteem

function startAutoEpc() {
    if (autoEpcInterval) clearInterval(autoEpcInterval); // Clear old interval if exists

    autoEpcInterval = setInterval(() => {
        if (AutoEpcValue > 0) {
            score += AutoEpcValue*multi; // Add AutoEpcValue to score
            upd(); // Update UI or game state
        }
    }, Math.round(AutoEpcSpeed * 1000)) // Runs every AutoEpcSpeed seconds
}


//UPGRADE BUTTONS

document.getElementById("clickButton").addEventListener("click", function() {  //CLICK FUNCTION
    score=score+epc; // Score verhogen
    upd()
});

document.getElementById("upgradeButton").addEventListener("click", function() { //UPGRADE +1
    if (score < prijsupg){  //als score lager dan prijs dan werkt niet
        return;
    }
    epcupg += Upgradepower   ; // epcupg+1
    score -= prijsupg
    prijsupg=Math.round(prijsupg*1.1)
    upd()
    document.getElementById("upgrade1").textContent = prijsupg // weergeven nieuw prijs
});


document.getElementById("doubleEpc").addEventListener("click", function() { //UPGRADE *2
    if (score < prijsupg1){  //als score lager dan prijs dan werkt niet
        return;
    }
    epcupg1 = true   ; // epcupg1 = 2
    score -= prijsupg1
    prijsupg1=Math.round(prijsupg1*3)
    upd()
    document.getElementById("upgrade2").textContent = prijsupg1 // weergeven nieuw prijs
    document.getElementById("doubleEpc").remove();
});


document.getElementById("tripleEpc").addEventListener("click", function() { //UPGRADE *3
    if (score < prijsupg2){  //als score lager dan prijs dan werkt niet
        return;
    }
    epcupg2 = true   ; // epc+1
    score -= prijsupg2
    prijsupg2=Math.round(prijsupg2*10)
    upd()
    document.getElementById("upgrade3").textContent = prijsupg2 // weergeven nieuw prijs
    document.getElementById("tripleEpc").remove();
});

document.getElementById("quadrupleEpc").addEventListener("click", function() { //UPGRADE*4
    if (score < prijsupg3){  //als score lager dan prijs dan werkt niet
        return;
    }
    epcupg3 = true   ; // epc+1
    score -= prijsupg3
    prijsupg3=Math.round(prijsupg3*75)
    upd()
    document.getElementById("upgrade4").textContent = prijsupg3 // weergeven nieuw prijs
    document.getElementById("quadrupleEpc").remove();
});


document.getElementById("autoEpc").addEventListener("click", function() { //UPGRADE Auto
    if (score < prijsupgAuto){  //als score lager dan prijs dan werkt niet
        return;
    }
    score -= prijsupgAuto
    AutoEpcValue += AutoEpcUpgradePower
    prijsupgAuto = Math.round(prijsupgAuto*1.05+50)
    if (AutoEpcValue > 0) {
        startAutoEpc(); // Start automatic scoring if not already running
    }

    upd()
    document.getElementById("upgradeAuto").textContent = prijsupgAuto //update prijs
});


document.getElementById("autoEpcSpeed").addEventListener("click", function() { //UPGRADE Auto
    if (score < prijsupgSpeed){  //als score lager dan prijs dan werkt niet
        return;
    }
    score -= prijsupgSpeed
    AutoEpcSpeed = Math.round((AutoEpcSpeed - 0.1) * 10) / 10;
    prijsupgSpeed = Math.round(prijsupgSpeed*1.5)
    if (AutoEpcOn) startAutoEpc();
    upd()
    document.getElementById("upgradeAutoSpeed").textContent = prijsupgSpeed //update prijs

    if (AutoEpcSpeed < 0.2) {
        document.getElementById("autoEpcSpeed").remove();
    }
});


