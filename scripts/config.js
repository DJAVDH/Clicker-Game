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

// Epc Calculations


function formatMoney(amount) {
    if (amount >= 1e9) {
        return (amount / 1e9).toFixed(1) + 'B';  // Billions
    } else if (amount >= 1e6) {
        return (amount / 1e6).toFixed(1) + 'M';  // Millions
    } else if (amount >= 1e3) {
        return (amount / 1e3).toFixed(1) + 'K';  // Thousands
    } else {
        return amount;  // Less than a thousand, just return the number
    }
}
let epc = 1
let displayedmoney = formatMoney(money);