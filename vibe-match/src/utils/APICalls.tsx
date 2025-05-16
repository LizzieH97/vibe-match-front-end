import type { Song } from "../types/Song";
import type { Genre } from "../types/Genre";

export async function fetchAllSongs(): Promise<Song[]> {
  const res = await fetch("http://140.238.94.98:8080/api/songs");
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json() as Promise<Song[]>;
}
export async function fetchSongsByGenre(genreId: number): Promise<Song[]> {
  const res = await fetch(
    `http://140.238.94.98:8080/api/songs/bygenre/${genreId}`
  );
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json() as Promise<Song[]>;
}
export async function fetchSongsByArtist(artistId: number): Promise<Song[]> {
  const res = await fetch(
    `http://140.238.94.98:8080/api/songs/byartist/${artistId}`
  );
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json() as Promise<Song[]>;
}
export async function fetchAllGenres(): Promise<Genre[]> {
  const res = await fetch("http://140.238.94.98:8080/api/genres");
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json() as Promise<Genre[]>;
}
export async function fetchByDanceability(
  minVal: number,
  maxVal: number
): Promise<Song[]> {
  const res = await fetch(
    `http://140.238.94.98:8080/api/songs/bydanceability/${minVal},${maxVal}`
  );
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json() as Promise<Song[]>;
}
export async function fetchByTempo(
  minVal: number,
  maxVal: number
): Promise<Song[]> {
  const url = `http://140.238.94.98:8080/api/songs/bytempo/${minVal},${maxVal}`;

  try {
    const res = await fetch(url);

    const raw = await res.text();

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const json = JSON.parse(raw);
    return json as Song[];
  } catch (err) {
    console.error("Fetch or parse error:", err);
    throw err;
  }
}
export async function fetchSongsByPopularity(): Promise<Song[]> {
  const res = await fetch("http://140.238.94.98:8080/api/songs/bypopularity");
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json() as Promise<Song[]>;
}
