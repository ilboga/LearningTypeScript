// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

export type makeGuessType = (text: string, attempt: number) => string;

export type CodeCrackerOptions = {
	attempts: number;
	makeGuess: makeGuessType;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: CodeCrackerOptions) {
	return (text: string) => {
		for (let i = 0; i < attempts; i++) {
			const guess = makeGuess(text, i);
			if (validateGuess(guess)) {
				return guess;
			}
		}

		return undefined;
	};
}
