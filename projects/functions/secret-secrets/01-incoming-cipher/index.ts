// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.

export type stringToString = (text: string) => string;

export function createCipher(cypher: stringToString): stringToString {
	let output = (text: string) => {
		let tornaQuesto = "";
		for (const char of text) {
			tornaQuesto += cypher(char);
		}

		return tornaQuesto;
	};
	return output;
}
