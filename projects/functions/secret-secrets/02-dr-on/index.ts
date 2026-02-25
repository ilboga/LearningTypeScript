// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

export type stringToString = (text: string) => string;

export function createAdvancedCipher(
	onVowel: stringToString,
	onConsonant: stringToString,
	onPunctuation: stringToString,
): stringToString {
	let output = (text: string) => {
		let tornaQuesto = "";
		for (const char of text) {
			if (/[aeiou]/i.test(char)) {
				tornaQuesto += onVowel(char);
			} else if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) {
				tornaQuesto += onConsonant(char);
			} else {
				tornaQuesto += onPunctuation(char);
			}
		}

		return tornaQuesto;
	};

	return output;
}
