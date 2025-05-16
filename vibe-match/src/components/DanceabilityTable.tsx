import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getSongsByDanceability } from "../utils/CallingFunctions";

interface DanceTableProps {
  minVal: number;
  maxVal: number;
}

const DanceTable = ({ minVal, maxVal }: DanceTableProps) => {
    const { songs, loading } = getSongsByDanceability(minVal, maxVal);
    const limitedResults = songs.splice(0, 10);

  if (!minVal) {
    return null;
  }
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
          {limitedResults.map((song) => (
            <TableRow key={song.id} className="song-table-row">
              <TableCell align="center">{song.track_name}</TableCell>
              <TableCell align="center">{song.genre.genre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DanceTable;
