let score = 0;
//score
let epcupg = 0;
let epcupg1 = false;
let epcupg2 = false;
let epcupg3 = false;
//upgrade kracht
let prijsupg = 15;
let prijsupg1 = 100;
let prijsupg2 = 1000;
let prijsupg3 = 10000;
// upgrade prijzen

let epcupgtotal = 0 //total upgrade power
let multi = 1
let epc = 1

upd()

function upd() { //update alles
    epcupgtotal = (0+epcupg)
    if (epcupg1 == true) {
        multi = 2
        document.getElementById("multi").style.color = "lime";
        document.getElementById("topbar").style.backgroundColor = "#697A21"
        document.getElementById("rightbar").style.backgroundColor = "#424B54"
        document.getElementById("bottombar").style.backgroundColor = "#424B54"
    }
    if (epcupg2 == true) {
        multi = 3
        document.getElementById("multi").style.color = "orange"
        document.getElementById("topbar").style.backgroundColor = "#124E78"
        document.getElementById("rightbar").style.backgroundColor = "#57CC99"
        document.getElementById("bottombar").style.backgroundColor = "#57CC99"
    }
    if (epcupg3 == true) {
        multi = 4
        document.getElementById("multi").style.color = "red"
        document.getElementById("topbar").style.backgroundColor = "#8F5C38"
        document.getElementById("rightbar").style.backgroundColor = "#ECE4B7"
        document.getElementById("bottombar").style.backgroundColor = "#ECE4B7"
    }
    epc = (1+epcupgtotal)*multi
    document.getElementById("epc").textContent = epcupg+1; // Weergeven epc
    document.getElementById("score").textContent = score; // Weergeven epc
    document.getElementById("multi").textContent = (multi+"x"); // Weergeven epc
    document.getElementById("total").textContent = ("("+epc+")")
}


function coinflip(){
    let flip = Math.random() < 0.5 ? 'kop' : 'munt';
    if (flip === 'kop'){
        score = score*2 
    } else{
        score = Math.round(score-score/1.5)
    }
    upd()
};




document.getElementById("clickButton").addEventListener("click", function() {  //CLICK FUNCTION
    score=score+epc; // Score verhogen
    upd()
});

document.getElementById("upgradeButton").addEventListener("click", function() { //UPGRADE +1
    if (score < prijsupg){  //als score lager dan prijs dan werkt niet
        return;
    }
    epcupg++   ; // epcupg+1
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


