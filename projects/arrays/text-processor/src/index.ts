// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

type AlignType = "left" | "middle" | "right";

function padder(
	word: string,
	align: AlignType = "left",
	paddedNtimes: number,
): string {
	// qui faccio il pad
	switch (align) {
		case "right":
			word = " " + word;
			break;
		case "middle":
			word = paddedNtimes % 2 ? " " + word : word + " ";
			break;
		default:
			word = word + " ";
			break;
	}
	return word;
}

export function alignTexts(
	texts: string[],
	options: {
		align?: AlignType;
		width: number;
	},
): string[][] {
	let splittedAr: string[][] = [];
	for (let i = 0; i < texts.length; i++) {
		let words: string[] = texts[i].split(" ");
		splittedAr[i] = [];

		for (let k = 0; k < words.length; k++) {
			let paddedNtimes = 0;
			let word = words[k];

			word = padder(word, options.align, paddedNtimes);

			while (word.length < options.width) {
				paddedNtimes++;
				console.log(paddedNtimes, word);
				// qui faccio il pad
				word = padder(word, options.align, paddedNtimes);
			}
			splittedAr[i][k] = word;
		}
	}

	return splittedAr;
}
