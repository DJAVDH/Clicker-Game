
//Main variables en getallen hier
let epc = 1 //Euro per click
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
let currenttab = 0
//Tabs

let typefoods = {
    Zwerver: [
      { name: "Vuilnisbak", price: 0, tier: "Zwerver", multiplier: 1, foto: "fotos/afvalcontainer-removebg-preview.png", equipped: true, owned: false},
      { name: "Stoep Kauwgom", price: 1000, tier: "Zwerver", multiplier: 2, foto: "fotos/streetgum.png", equipped: false, owned: false },
      { name: "Bananen Schil", price: 3500, tier: "Zwerver", multiplier: 3, foto: "fotos/banana-peel.png", equipped: false, owned: false },
      { name: "Rat", price: 10000, tier: "Zwerver", multiplier: 5, foto:"fotos/rat.png", equipped: false, owned: false },
    ],
    Arm: [
      { name: "Bruine Banaan", price: 50000, tier: "Arm", multiplier: 10, foto:"fotos/brown-banana.png", equipped: false, owned: false },
      { name: "Rijst", price: 150000, tier: "Arm", multiplier: 15, foto:"fotos/rijst.png", equipped: false, owned: false },
      { name: "Aardappel", price: 250000, tier: "Arm", multiplier: 20, foto:"fotos/aardappelnew.png", equipped: false, owned: false },
      { name: "Brood", price: 500000, tier: "Arm", multiplier: 25, foto:"fotos/bread.png", equipped: false, owned: false },
    ],
    Normaal: [
      { name: "Banaan", price: 1000000, tier: "Normaal", multiplier: 50, foto:"fotos/banaan.png", equipped: false, owned: false },
      { name: "Burger", price: 2000000, tier: "Normaal", multiplier: 100, foto:"fotos/burger.png", equipped: false, owned: false },
      { name: "Spaghetti", price: 3500000, tier: "Normaal", multiplier: 150, foto:"fotos/spagghetti.png", equipped: false, owned: false },
      { name: "Sushi", price: 10000000, tier: "Normaal", multiplier: 250, foto:"fotos/sushi.png", equipped: false, owned: false },
    ],
    Rijk: [
      { name: "Bananensplit", price: 25000000, tier: "Rijk", multiplier: 500, foto:"fotos/bananensplit.png", equipped: false, owned: false },
      { name: "Kreeft", price: 50000000, tier: "Rijk", multiplier: 750, foto:"fotos/lobster.png", equipped: false, owned: false },
      { name: "Caviar", price: 100000000, tier: "Rijk", multiplier: 1000, foto:"fotos/caviar.png", equipped: false, owned: false },
      { name: "Wagyu Steak", price: 500000000, tier: "Rijk", multiplier: 1500, foto:"fotos/wagyu-steak.png", equipped: false, owned: false },
    ],
    Legend: [
      { name: "Gouden pizza", price: 1000000000, tier: "Legend", multiplier: 2500, foto:"fotos/goldenpizza.png", equipped: false, owned: false },
      { name: "Dodo", price: 2500000000, tier: "Legend", multiplier: 5000, foto:"fotos/cartoon-dodo.png", equipped: false, owned: false },
      { name: "Uranium", price: 5000000000, tier: "Legend", multiplier: 10000, foto:"fotos/uranium.png", equipped: false, owned: false },
      { name: "Supreme Banaan", price: 1000000000000, tier: "Legend", multiplier: 1000000, foto:"fotos/supreme-banana.png", equipped: false, owned: false },
    ],
  }
//FOODS SETTINGS
function formatMoney(amount) { //Formatting voor getallen
    if (amount >= 1e24) {
        return (amount / 1e24).toFixed(1) + 'SP'; //Septillion
    } else if (amount >= 1e24) {
        return (amount / 1e21).toFixed(1) + 'SX'; //Sextillion
    } else if (amount >= 1e21) {
        return (amount / 1e18).toFixed(1) + 'QN'; //Quantillion
    } else if (amount >= 1e18) {
        return (amount / 1e15).toFixed(1) + 'QD'; //Qd
    } else if (amount >= 1e15) {
        return (amount / 1e12).toFixed(1) + 'T'; //triljoen
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


let displayedmoney = formatMoney(money);
let displayedepc =  formatMoney(epc);
let displayedprice1 = formatMoney(prijs1)
let displayedprice2 = formatMoney(prijs2)
let displayedprice3 = formatMoney(prijs3)
let displayedprice4 = formatMoney(prijs4)
//formatting system geld prijzen epc