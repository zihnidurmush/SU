function adventure(input) {
	// We use shift because it will make the first number to disappear from the array
	const charactersCount = Number(input.shift());
	const posse = {};

	for (let i = 0; i < charactersCount; i++) {
		const [characterName, hpInput, bulletsInput] = input.shift().split(" ");
		posse[characterName] = {
			hp: Number(hpInput),
			bullets: Number(bulletsInput),
		};
	}

	const commands = {
		FireShot(characterName, target) {
			if (posse[characterName].bullets) {
				const currentBullets = --posse[characterName].bullets;
				console.log(
					`${characterName} has successfully hit ${target} and now has ${currentBullets} bullets!`
				);
			} else {
				console.log(
					`${characterName} doesn't have enough bullets to shoot at ${target}!`
				);
			}
		},
		TakeHit(characterName, damage, attacker) {
			damage = Number(damage);
			posse[characterName].hp -= damage;
			const currentHp = posse[characterName].hp;
			if (currentHp > 0) {
				console.log(
					`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${currentHp} HP!`
				);
			} else {
				delete posse[characterName];
				console.log(`${characterName} was gunned down by ${attacker}!`);
			}
		},
		Reload(characterName) {
			const maxBullets = 6;
			const currentBullets = posse[characterName].bullets;
			if (currentBullets < maxBullets) {
				posse[characterName].bullets = 6;
				console.log(
					`${characterName} reloaded ${
						maxBullets - currentBullets
					} bullets!`
				);
			} else {
				console.log(`${characterName}'s pistol is fully loaded!`);
			}
		},
		PatchUp(characterName, amount) {
			amount = Number(amount);
			const maxHp = 100;
			const currentHp = posse[characterName].hp;
			if (currentHp < maxHp) {
				const newHp = Math.min(currentHp + amount, maxHp);
				posse[characterName].hp = newHp;

				const recoveredAmount = newHp - currentHp;
				console.log(
					`${characterName} patched up and recovered ${recoveredAmount} HP!`
				);
			} else {
				console.log(`${characterName} is in full health!`);
			}
		},
	};

	let commandInput = input.shift();

	while (commandInput !== "Ride Off Into Sunset") {
		const [command, characterName, ...args] = commandInput.split(" - ");

		commands[command](characterName, ...args);

		commandInput = input.shift();
	}

	// print result
	Object.keys(posse).forEach((characterName) => {
		console.log(`${characterName}`);
		console.log(`HP: ${posse[characterName].hp}`);
		console.log(`Bullets: ${posse[characterName].bullets}`);
	});
}

adventure(["2",
   "Gus 100 0",
   "Walt 100 6",
   "FireShot - Gus - Bandit",
   "TakeHit - Gus - 100 - Bandit",
   "Reload - Walt",
   "Ride Off Into Sunset"]
);

// const hp = Number(hpInput);
// const bullets = Number(bulletsInput);

// posse[characterName] = {
//     hp,
//     bullets,
// }
