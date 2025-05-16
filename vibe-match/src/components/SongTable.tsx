import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import type { Song } from "../types/Song";
import { getAllSongs } from "../utils/CallingFunctions";
import { useState } from "react";

interface SongTableProps {
  songInput: string;
};

const SongTable = ({ songInput }: SongTableProps) => {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>();

  const allSongs = getAllSongs();

  let filteredSongs: Song[] = [];

  const targetSongMatch = allSongs.find(
    (song: Song) => song.track_name.toLowerCase().trim() === songInput.toLowerCase().trim()
  );

    if (targetSongMatch) {
      setSelectedGenreId(targetSongMatch.genre.id)
    }
        filteredSongs = allSongs.filter(
        (song: Song) => song.genre.id === selectedGenreId
      );

  if (targetSongMatch && filteredSongs.length > 0) {
    return (
      <TableContainer
        component={Paper}
        sx={{
          minWidth: 400,
          width: "40%",
          margin: "0 auto",
        }}
      >
        <Table className="song-table" aria-label="table of songs">
          <TableHead className="song-table-header">
            <TableRow>
              <TableCell align="center">SONG TITLE</TableCell>
              <TableCell>GENRE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSongs.map((song) => (
              <TableRow key={song.spotify_id} className="song-table-row">
                <TableCell align="center" component="th" scope="row">
                  {song.track_name}
                </TableCell>
                <TableCell align="center">{song.genre.genre}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return null;
};

export default SongTable;
