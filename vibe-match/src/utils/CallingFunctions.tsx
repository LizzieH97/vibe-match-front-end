import { useEffect, useState } from "react";
import {
  fetchAllSongs,
  fetchSongsByGenre,
  fetchSongsByArtist,
  fetchAllGenres,
} from "./APICalls";

import type { Song } from "../types/Song";
import type { Genre } from "../types/Genre";

export const getAllSongs = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetchAllSongs()
      .then((data: Song[]) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return songs.map((song) => {
    return song;
  });
};

export const getAllGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    fetchAllGenres()
      .then((data: Genre[]) => setGenres(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return genres.map((genre) => {
    return genre.genre;
  });
};

export const getSongsByGenre = (genreId: number) => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetchSongsByGenre(genreId)
      .then((data: Song[]) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return songs.map((song) => {
    return song;
  });
};

export const getSongsByArtist = (artistId: number) => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetchSongsByGenre(artistId)
      .then((data: Song[]) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return songs.map((song) => {
    return song.track_name;
  });
};
