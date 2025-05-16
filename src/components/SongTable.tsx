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

interface SongTableProps {
  filteredSongs: Song[];
}

const SongTable = ({ filteredSongs }: SongTableProps) => {
  if (filteredSongs.length === 0) return null;

  return (
    <TableContainer component={Paper} className="song-table-container">
      <Table className="song-table" aria-label="table of songs">
        <TableHead className="song-table-header">
          <TableRow>
            <TableCell align="center">SONG TITLE</TableCell>
            <TableCell align="center">GENRE</TableCell>
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
};

export default SongTable;
