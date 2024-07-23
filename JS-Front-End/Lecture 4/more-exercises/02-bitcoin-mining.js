function solve(minedAmount) {
    
    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;
    let dailyGold = 0;
    let dayCounter = 0;
    let bitcoinsBought = 0;
    let totalBitcoins = 0;
    let dayOfFirstPurchase = -1;
    let cashAvailable = 0;
    
    for (let i = 0; i < minedAmount.length; i++) {
        dayCounter++;
        if (dayCounter % 3 == 0) {
            dailyGold = minedAmount[i] * 0.7;
        } else {
            dailyGold = minedAmount[i];
        }
        
        cashAvailable = cashAvailable + goldPricePerGram * dailyGold;
        if (cashAvailable >= bitcoinPrice) {
            bitcoinsBought = parseInt (cashAvailable / bitcoinPrice);
            cashAvailable = cashAvailable - bitcoinPrice * bitcoinsBought;
            if (dayOfFirstPurchase === -1) {
                dayOfFirstPurchase = dayCounter;
            }
            totalBitcoins += bitcoinsBought;
        }


    }
    
    if(bitcoinsBought <= 0) {
        console.log(`Bought bitcoins: ${totalBitcoins}`);
        console.log(`Left money: ${cashAvailable.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${totalBitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
        console.log(`Left money: ${cashAvailable.toFixed(2)} lv.`);
    }
}


solve([100, 200, 300]);
// Bought bitcoins: 2
// Day of the first purchased bitcoin: 2
// Left money: 10531.78 lv.

solve([50, 100]);	
// Bought bitcoins: 0
// Money left: 10126.50 lv.		

solve([3124.15, 504.212, 2511.124]);	
// Bought bitcoins: 30
// Day of the first purchased bitcoin: 1
// Money left: 5144.11 lv.
