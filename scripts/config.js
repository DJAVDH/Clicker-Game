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
//FoodMultis

function formatMoney(amount) { //Trillion billion million thousand
    if (amount >= 1e12) {
        return (amount / 1e2).toFixed(1) + 'T';
    } else if (amount >= 1e9) {
        return (amount / 1e9).toFixed(1) + 'B';
    } else if (amount >= 1e6) {
        return (amount / 1e6).toFixed(1) + 'M';
    } else if (amount >= 1e3) {
        return (amount / 1e3).toFixed(1) + 'K';
    } else {
        return amount;
    }
}
let epc = 1


let displayedmoney = formatMoney(money);
let displayedprice1 = formatMoney(prijs1)
let displayedprice2 = formatMoney(prijs2)
let displayedprice3 = formatMoney(prijs3)
let displayedprice4 = formatMoney(prijs4)
//formatting system