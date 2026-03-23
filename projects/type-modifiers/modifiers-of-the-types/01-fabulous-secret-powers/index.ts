import { characters } from "./characters";

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.

interface Character {
	name: string;
	powers: string[];
	side: "good" | "evil";
}

export function announceCharacter(str: string): Character {
	const char: Character = JSON.parse(str);
	console.log(`I am ${char.name}.`);
	console.log(`My powers are: ${char.powers.join(", ")}.`);
	console.log(`I am ${char.side}.`);

	// console.log(string)
	return char;
}
