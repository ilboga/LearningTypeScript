export interface AnyCrop {
	growth: number;
	harvested: boolean;
	name: "cactus" | "cassava" | "chia";
}

// Write your isAnyCrop function here! ✨
// You'll need to export it so the tests can run it.
export function isAnyCrop(data: unknown): data is AnyCrop {
	if (!!data && typeof data == "object") {
		if ("growth" in data && "harvested" in data && "name" in data) {
			return (
				typeof data.growth == "number" &&
				typeof data.harvested == "boolean" &&
				typeof data.name == "string" &&
				["cactus", "cassava", "chia"].includes(data.name)
			);
		} else {
			return false;
		}
	}
	return false;
}
