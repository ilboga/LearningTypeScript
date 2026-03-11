// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.
interface baseLandMark {
	name: string;
}

interface Fort extends baseLandMark {
	type: "fort";
}

interface Lakes extends baseLandMark {
	type: "lake";
	miles: number;
}
interface Lighthouses extends baseLandMark {
	type: "lighthouse";
	lit: number;
	height: number;
}
interface Mountains extends baseLandMark {
	type: "mountain";
	height: number;
}

interface Parks extends baseLandMark {
	type: "park";
	acres: number;
}
interface Rivers extends baseLandMark {
	type: "river";
	length: number;
	depth: number;
}
interface Waterfalls extends baseLandMark {
	type: "waterfall";
	height: number;
}

type Landmark = Lakes | Lighthouses | Mountains | Parks | Rivers | Waterfalls;

export function describeLandmark(landmark: Landmark) {
	let res: string[] = [
		`${landmark.name} is a ${landmark.type} in Upstate New York.`,
	];
	switch (landmark.type) {
		case "lake":
			res.push(`It covers ${landmark.miles} square miles of water.`);
			break;
		case "lighthouse":
			res.push(
				`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`,
			);
			break;
		case "mountain":
			res.push(`Its peak is ${landmark.height} feet high.`);
			break;
		case "park":
			res.push(`It covers ${landmark.acres} square acres.`);
			break;
		case "river":
			res.push(
				`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`,
			);
			break;
		case "waterfall":
			res.push(`It is ${landmark.height} feet high.`);
			break;
	}

	return res.join("\n");
}
