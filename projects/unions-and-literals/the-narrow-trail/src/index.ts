export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	type AvailableResources = "food" | "water" | undefined;
	type Food = number;
	type Water = number;
	type Day = number;

	let day: Day = 1;
	let food: Food = 5;
	let water: Water = 5;
	let available: AvailableResources = undefined;

	while (day <= 7) {
		day++;
		let dice: number = Math.floor(Math.random() * 6) + 1;
		switch (dice) {
			case 1:
				available = "food";
				break;
			case 2:
				available = "water";
				break;
			default:
				switch (available) {
					case undefined:
						available = dice % 2 === 0 ? "food" : "water";
						break;
					case "food":
						food += dice;
						available = undefined;
						break;
					case "water":
						water += dice;
						available = undefined;
						break;
				}
				break;
		}

		food--;
		water--;

		if (!food || !water) {
			return false;
		}
	}

	return true;
}
