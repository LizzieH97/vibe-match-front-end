import { useEffect, useState } from "react";
import type { Song } from "../types/Song";
import { fetchSongsByGenre } from "./APICalls";

export const useSongsByGenre = (genreId: number) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!genreId) return;

    fetchSongsByGenre(genreId)
      .then((data) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err))
      .finally(() => setLoading(false));
  }, [genreId]);

  return { songs, loading };
};
