function solve(input) {
    const astronautCount = Number(input.shift());
    const team = {};
    
    // gather team
    for (let i = 0; i < astronautCount; i++) {
        const [name, oxygen, energy] = input[i].split(' ');
        
        team[name] = {
            oxygen, 
            energy 
        };
    }
    
    let commandLine = input.shift();

    while (commandLine != 'End') {
        const [command, name, lastArg] = commandLine.split(' - ');

        const astronaut = team[name];
        let energyNeeded, amount;

        switch (command) {
            case 'Explore':
                energyNeeded = Number(lastArg);
                if ((team[name].energy - energyNeeded) > 0) {
                team[name].energy = team[name].energy - energyNeeded;
                    console.log(`${name} has successfully explored a new area and now has ${team[name].energy} energy!`);
                } else {
                    console.log(`${name} does not have enough energy to explore!`);
                }

                break;
            case 'Refuel':
                amount = Number(lastArg);
                const maxEnergy = 200;
                const currentEnergy = Number(team[name].energy);
                if (currentEnergy < maxEnergy) {
                    const newEnergy = Math.min(currentEnergy + amount, maxEnergy);
                    team[name].energy = newEnergy;

                    const recoveredEnergy = newEnergy - currentEnergy;
                    console.log(`${name} refueled their energy by ${recoveredEnergy}!`);
                }

                break;
            case 'Breathe':
                amount = Number(lastArg)
                const maxOxygen = 100;
                const currentOxygen = Number(team[name].oxygen);
                if (currentOxygen <= maxOxygen) {
                    const newOxygen = Math.min(currentOxygen + amount, maxOxygen);
                    team[name].oxygen = newOxygen;

                    const recoveredOxygen = newOxygen - currentOxygen;
                    console.log(`${name} took a breath and recovered ${recoveredOxygen} oxygen!`);   
                }
                break;
        }
        commandLine = input.shift();
    }
    for (const name in team) {
        // console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].workShift}, Drinks: ${team[baristaName].coffeeTypes.join(', ')}`);
        console.log(`Astronaut: ${name}, Oxygen: ${team[name].oxygen}, Energy: ${team[name].energy}`);
        
    }
    
}

// solve([  '3',
//     'John 50 120',
//     'Kate 80 180',
//     'Rob 70 150',
//     'Explore - John - 50',
//     'Refuel - Kate - 30',
//     'Breathe - Rob - 20',
//     'End']
// );

// John has successfully explored a new area and now has 70 energy!
// Kate refueled their energy by 20!
// Rob took a breath and recovered 20 oxygen!
// Astronaut: John, Oxygen: 50, Energy: 70
// Astronaut: Kate, Oxygen: 80, Energy: 200
// Astronaut: Rob, Oxygen: 90, Energy: 150

solve([    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']
);

// Bob has successfully explored a new area and now has 20 energy!
// Alice refueled their energy by 30!
// Charlie took a breath and recovered 30 oxygen!
// Dave refueled their energy by 20!
// Bob does not have enough energy to explore!
// Charlie took a breath and recovered 0 oxygen!
// Alice has successfully explored a new area and now has 90 energy!
// Astronaut: Alice, Oxygen: 60, Energy: 90
// Astronaut: Bob, Oxygen: 40, Energy: 20
// Astronaut: Charlie, Oxygen: 100, Energy: 150
// Astronaut: Dave, Oxygen: 80, Energy: 200

