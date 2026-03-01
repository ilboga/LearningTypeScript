// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function deepDifferences(a: string[][], b: string[][]) {
	let result: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			result[i] = undefined;
		} else {
			result[i] = [];
			for (let k = 0; k < a[i].length; k++) {
				result[i][k] = a[i][k] !== b[i][k] ? undefined : a[i][k];
			}
		}
	}

	return result;
}
