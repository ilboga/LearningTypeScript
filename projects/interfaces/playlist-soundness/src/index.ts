// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.
interface Song {
	artist: string[] | string;
	length: number;
	name: string;
	type: "song";
}

interface Album {
	songs: Song[];
	type: "album";
}

interface PlayList {
	resolve: () => Song[];
	type: "playlist";
}

export interface Artists {
	[i: string]: string[];
}

type Items = (Song | Album | PlayList)[];

function processSong(s: Song, artists: Artists, songs: string[]): number {
	const artistList = Array.isArray(s.artist) ? s.artist : [s.artist];
	artistList.forEach((a: string) => {
		if (artists[a]) artists[a].push(s.name);
		else artists[a] = [s.name];
	});
	songs.push(s.name);
	return s.length;
}

export function unrollPlaylist(item: Items): {
	artists: Artists;
	songs: string[];
	time: number;
} {
	let artists: Artists = {};
	let songs: string[] = [];
	let time: number = 0;

	item.forEach((el) => {
		if (el.type) {
			switch (el.type) {
				case "song":
					time += processSong(el, artists, songs);
					break;
				case "album":
					el.songs.forEach((s: Song) => {
						time += processSong(s, artists, songs);
					});
					break;
				case "playlist":
					el.resolve().forEach((e) => {
						time += processSong(e, artists, songs);
					});
			}
		}
	});

	return { artists, songs, time };
}
