import { useEffect, useState } from "react";
import {
  fetchAllSongs,
  fetchSongsByGenre,
  fetchAllGenres,
  fetchByDanceability,
  fetchByTempo,
} from "./APICalls";

import type { Song } from "../types/Song";
import type { Genre } from "../types/Genre";

export const useSongs = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data: Song[] = await fetchAllSongs();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return { songs, loading };
};

export const getAllGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    fetchAllGenres()
      .then((data: Genre[]) => setGenres(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return genres;
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

export const getSongsByDanceability = (minVal: number, maxVal: number) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchByDanceability(minVal, maxVal)
      .then((data) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err))
      .finally(() => setLoading(false));
  }, [minVal, maxVal]);

  return { songs, loading };
};
export const getSongsByTempo = (minVal: number, maxVal: number) => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetchByTempo(minVal, maxVal)
      .then((data: Song[]) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return songs.map((song) => {
    return song;
  });
};
