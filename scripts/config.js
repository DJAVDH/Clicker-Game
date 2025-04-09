
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
        { name: "Vuilnisbak", price: 0, tier: "Zwerver", multiplier: 1, foto: "fotos/afvalcontainer-removebg-preview.png"},
        { name: "Stoep Kauwgom", price: 1000, tier: "Zwerver", multiplier: 2, foto: "fotos/streetgun.png" },
        { name: "Bananen Schil", price: 3500, tier: "Zwerver", multiplier: 3, foto: "fotos/banana-peel.png" },
        { name: "Rat", price: 10000, tier: "Zwerver", multiplier: 5, foto:"fotos/rat.png" },
      ],
      Arm: [
        { name: "Bruine Banaan", price: 0, tier: "Zwerver", multiplier: 1, foto:"fotos/brown-banana.png" },
        { name: "Rijst", price: 1000, tier: "Zwerver", multiplier: 2, foto:"fotos/rijst.png" },
        { name: "Aardappel", price: 3500, tier: "Zwerver", multiplier: 3, foto:"fotos/aardappelnew.png" },
        { name: "Brood", price: 10000, tier: "Zwerver", multiplier: 5, foto:"fotos/bread.png" },
      ],
      Normaal: [
        { name: "Banaan", price: 0, tier: "Zwerver", multiplier: 1, foto:"fotos/banaan.png" },
        { name: "Burger", price: 1000, tier: "Zwerver", multiplier: 2, foto:"fotos/burger.png" },
        { name: "Spaghetti", price: 3500, tier: "Zwerver", multiplier: 3, foto:"fotos/spagghetti.png" },
      ],
      Rijk: [
        { name: "Sushi", price: 0, tier: "Zwerver", multiplier: 1, foto:"fotos/sushi.png" },
        { name: "Bananensplit", price: 1000, tier: "Zwerver", multiplier: 2, foto:"fotos/bananensplit.png" },
        { name: "Kreeft", price: 3500, tier: "Zwerver", multiplier: 3, foto:"fotos/lobster.png" },
        { name: "Caviar", price: 10000, tier: "Zwerver", multiplier: 5, foto:"fotos/caviar.png" },
        { name: "Wagyu Steak", price: 10000, tier: "Zwerver", multiplier: 5, foto:"fotos/wagyu-steak.png"},
      ],
      Legend: [
        { name: "Gouden pizza", price: 0, tier: "Zwerver", multiplier: 1, foto:"fotos/goldenpizza.png" },
        { name: "Dodo", price: 1000, tier: "Zwerver", multiplier: 2, foto:"fotos/cartoon-dodo.png" },
        { name: "Uranium", price: 3500, tier: "Zwerver", multiplier: 3, foto:"fotos/uranium.png" },
        { name: "Supreme Banaan", price: 10000, tier: "Zwerver", multiplier: 5, foto:"fotos/supreme-vanana.png" },
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