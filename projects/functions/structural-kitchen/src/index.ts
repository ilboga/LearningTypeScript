// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.

type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

export type Kitchen = {
	budget: number;
	cleaner: (dirt: number, time?: number) => number;
	supplier: (expense: number) => Stock;
};

export function createKitchen(
	budget: number,
	cleaner: (dirt: number, time?: number) => number,
	supplier: (expense: number) => Stock,
) {
	let dirt = 0;
	let stock: Stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};
	return {
		announce() {
			return `I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
		},
		clean(time: number) {
			return (dirt = cleaner(dirt, time));
		},
		purchase(expense: number) {
			if (budget >= expense) {
				const ingredients = supplier(expense);
				stock.breads += ingredients.breads;
				stock.fruits += ingredients.fruits;
				stock.sauces += ingredients.sauces;
				stock.vegetables += ingredients.vegetables;

				budget = budget - expense;
				return true;
			}
			return false;
		},
		prepare(recipe: (stock: Stock) => { succeeded: boolean; newStock: Stock }) {
			if (dirt >= 100) {
				return false;
			}

			let { succeeded, newStock } = recipe(stock);
			dirt++;
			if (succeeded) {
				stock = newStock;
			}

			return succeeded;
		},
	};
}
