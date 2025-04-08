function clickfood(){
    formatMoney()
    money=money+epc
    upd("money")
}

function openmenu(){
    const slideMenu = document.getElementById('FoodMenu');
    slideMenu.classList.toggle('open');
};

function buyupgrade1(){
    if (money<prijs1){
        return;
    }
    amount1++
    money -= prijs1
    prijs1 = Math.round(prijs1*1.05+15)
    upd()
    let displayedprice1 = formatMoney(prijs1)
    document.getElementById("Amount1").textContent = amount1
    document.getElementById("Price1").textContent = displayedprice1+("€")
}

function buyupgrade2(){
    if (money<prijs2){
        return;
    }
    amount2++
    money -= prijs2
    prijs2 = Math.round(prijs2*1.2+50)
    upd()
    let displayedprice2 = formatMoney(prijs2)
    document.getElementById("Amount2").textContent = amount2
    document.getElementById("Price2").textContent = displayedprice2+("€")
}


