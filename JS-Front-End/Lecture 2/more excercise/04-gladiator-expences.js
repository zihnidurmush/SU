function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let brokenShield = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }

        if (i % 3 === 0) {
            expenses += swordPrice;
        }

        if ((i % 2 === 0) && (i % 3 === 0)) {
            expenses += shieldPrice;
            brokenShield++;
            if (brokenShield % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5)
solve(23, 12.50, 21.50, 40, 200)


// Gladiator expenses: 16.00 aureus

// Trashed helmet -> 3 times
// Trashed sword -> 2 times
// Trashed shield -> 1 time
// Total: 6 + 6 + 4 = 16.00 aureus;
