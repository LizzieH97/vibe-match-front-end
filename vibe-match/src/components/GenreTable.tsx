import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useSongs, getSongsByGenre } from "../utils/CallingFunctions";

interface GenreTableProps {
  genreId: number;
}

const GenreTable = ({ genreId }: GenreTableProps) => {
  const mockSongs = getSongsByGenre(genreId);

    const filteredSongs = mockSongs.filter((song) => song.genre.id === genreId);
    const limitedResults = filteredSongs.slice(0, 10);

  // to prevent non filtered data from displaying the table
  if (!genreId) {
    return null;
  }

  return (
    <TableContainer
      component={Paper}
      className="song-table-container"
    >
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
              {/* <TableCell component="th" scope="row">
                {song.id}
              </TableCell> */}
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

export default GenreTable;
