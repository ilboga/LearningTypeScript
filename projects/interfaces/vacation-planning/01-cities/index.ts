// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.

interface City {
	coordinates: {
		north: number[];
		west: number[];
	};
	catchphrase?: string;
	name: string;
}
function pad(input: number) {
	let string = `${input}`;
	return string.length == 2 ? `${string}` : "0" + string;
}

export function describeCity(city: City) {
	let coordinates = pad(city.coordinates.north[0]);

	coordinates += `${pad(city.coordinates.north[0])}°${pad(city.coordinates.north[1])}'${pad(city.coordinates.north[2])}"N `;
	// `${city.coordinates.west[0]}°${city.coordinates.west[1]}'${city.coordinates.west[2]}"W`

	const string = `${city.name}, New York
    ${city.catchphrase ? '"* ' + city.catchphrase + '"' : ""} 
    * Located at ${coordinates}`;

	return string;
}
