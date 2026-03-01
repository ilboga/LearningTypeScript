// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.

export function deepEquality(a: string[][], b: string[][]) {
	if (a.length !== b.length) {
		return false;
	}

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			return false;
		}

		for (let k = 0; k < a[i].length; k++) {
			if (a[i][k] !== b[i][k]) {
				return false;
			}
		}
	}

	return true;
}
