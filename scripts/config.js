
//Main variables en getallen hier

let money = 0
//Je geld
let prijs1 = 50
let prijs2 = 500
let prijs3 = 250
let prijs4 = 1000
//Base Prijs Upgrades
let amount1 = 0
let amount2 = 0
let amount3 = 0
let amount4 = 0
//Hoveel Upgrades je hebt
let foodmulti = 1
//FoodMultiplier
let eetgeluid = ("sfx/eet.mp3")
let slidegeluid = ("sfx/slide.mp3")
let upgradegeluid = ("sfx/upgrade.mp3")
let popgeluid = ("sfx/pop.mp3")
//sounds
let autoclickpower = 0
let autoclickspeed = 1
let autoEpcInterval = null;
//autoclicker settings
let typefoods ={
    Zwerver: [
        { name: "Vuilnisbak", price: 0, tier: "Zwerver", multiplier: 1, foto: "fotos/afvalcontainer-removebg-preview.png" },
        { name: "Stoep Kauwgom", price: 1000, tier: "Zwerver", multiplier: 2, foto: "fotos/streetgun.png" },
        { name: "Bananen Schil", price: 3500, tier: "Zwerver", multiplier: 3, foto: "banana-peel.png" },
        { name: "Rat", price: 10000, tier: "Zwerver", multiplier: 5 },
      ],
      Arm: [
        { name: "Bruine Banaan", price: 0, tier: "Zwerver", multiplier: 1 },
        { name: "Rijst", price: 1000, tier: "Zwerver", multiplier: 2 },
        { name: "Aardappel", price: 3500, tier: "Zwerver", multiplier: 3 },
        { name: "Brood", price: 10000, tier: "Zwerver", multiplier: 5 },
      ],
      Normaal: [
        { name: "Banaan", price: 0, tier: "Zwerver", multiplier: 1 },
        { name: "Burger", price: 1000, tier: "Zwerver", multiplier: 2 },
        { name: "Spaghetti", price: 3500, tier: "Zwerver", multiplier: 3 },
      ],
      Rijk: [
        { name: "Sushi", price: 0, tier: "Zwerver", multiplier: 1 },
        { name: "Bananensplit", price: 1000, tier: "Zwerver", multiplier: 2 },
        { name: "Kreeft", price: 3500, tier: "Zwerver", multiplier: 3 },
        { name: "Caviar", price: 10000, tier: "Zwerver", multiplier: 5 },
        { name: "Wagyu Steak", price: 10000, tier: "Zwerver", multiplier: 5 },
      ],
      Legend: [
        { name: "Gouden pizza", price: 0, tier: "Zwerver", multiplier: 1 },
        { name: "Dodo", price: 1000, tier: "Zwerver", multiplier: 2 },
        { name: "Uranium", price: 3500, tier: "Zwerver", multiplier: 3 },
        { name: "Supreme Banaan", price: 10000, tier: "Zwerver", multiplier: 5 },
      ],
}
//FOODS/TIERS
function formatMoney(amount) { //Formatting voor getallen
    if (amount >= 1e12) {
        return (amount / 1e2).toFixed(1) + 'T'; //triljoen
    } else if (amount >= 1e9) {
        return (amount / 1e9).toFixed(1) + 'B'; //biljoen
    } else if (amount >= 1e6) {
        return (amount / 1e6).toFixed(1) + 'M'; //miljoen
    } else if (amount >= 1e3) {
        return (amount / 1e3).toFixed(1) + 'K'; //duizend
    } else {
        return amount;
    }
}

let epc = 1 //Euro per click


let displayedmoney = formatMoney(money);
let displayedepc =  formatMoney(epc);
let displayedprice1 = formatMoney(prijs1)
let displayedprice2 = formatMoney(prijs2)
let displayedprice3 = formatMoney(prijs3)
let displayedprice4 = formatMoney(prijs4)
//formatting system geld prijzen epc