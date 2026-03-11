// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.

interface Restaurant {
	city: string;
	name: string;
}

interface GroupedRestaurant {
	[key: string]: string[];
}

export function groupRestaurants(restaurants: Restaurant[]): GroupedRestaurant {
	let result: GroupedRestaurant = {};
	for (let i = 0; i < restaurants.length; i++) {
		let key = restaurants[i].city;
		if (key && result[key]) {
			result[key].push(restaurants[i].name);
		} else if (key) {
			result[key] = [restaurants[i].name];
		}
	}

	return result;
}
