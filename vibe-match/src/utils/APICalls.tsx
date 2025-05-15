import type { Song } from "../types/Song";
import type { Genre } from "../types/Genre";

export async function fetchAllSongs(): Promise<Song[]> {
  const res = await fetch("http://localhost:8080/api/songs");
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json() as Promise<Song[]>;
}
export async function fetchSongsByGenre(genreId: number): Promise<Song[]> {
  const res = await fetch(`http://localhost:8080/api/songs/bygenre/${genreId}`);
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json() as Promise<Song[]>;
}
export async function fetchSongsByArtist(artistId: number): Promise<Song[]> {
  const res = await fetch(
    `http://localhost:8080/api/songs/byartist/${artistId}`
  );
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json() as Promise<Song[]>;
}
export async function fetchAllGenres(): Promise<Genre[]> {
  const res = await fetch("http://localhost:8080/api/genres");
  if (!res.ok) throw new Error("Failed to fetch songs");
  return res.json() as Promise<Genre[]>;
}
