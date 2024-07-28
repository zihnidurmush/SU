function fanciestSolve(input) {
    input
    .map(row => row.split(' / '))
    .map(([name, level, items]) => ({
        name,
        level: Number(level),
        items,
    }))
    .sort((a, b) => a.level - b.level)
    .forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}

// function fancySolve(input) {
//     input.map(row => {
//         const [name, level, items] = row.split(' / ');

//         return {
//             name,
//             level: Number(level),
//             items,
//         };
//     })
//     .sort((a, b) => a.level - b.level)
//     .forEach(hero => {
//         console.log(`Hero: ${hero.name}`);
//         console.log(`level => ${hero.level}`);
//         console.log(`items => ${hero.items}`);
//     })
// }

// function solve(input) {
//     const heroes = [];
    
//     for (const row of input) {
//         const [name, level, items] = row.split(' / ');
//         const hero = {
//             name,
//             level: Number(level),
//             items,
//         };

//         heroes.push(hero);
//     }

//     heroes.sort((a, b) => a.level - b.level);

//     for (const hero of heroes) {
//         console.log(`Hero: ${hero.name}`);
//         console.log(`level => ${hero.level}`);
//         console.log(`items => ${hero.items}`);
//     }
// }

fanciestSolve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);

	// Hero: Hes
    // level => 1
    // items => Desolator, Sentinel, Antara
    // Hero: Derek
    // level => 12
    // items => BarrelVest, DestructionSword
    // Hero: Isacc
    // level => 25
    // items => Apple, GravityGun


// solve([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ]);	
    // Hero: Batman
    // level => 2
    // items => Banana, Gun
    // Hero: Superman
    // level => 18
    // items => Sword
    // Hero: Poppy
    // level => 28
    // items => Sentinel, Antara
    