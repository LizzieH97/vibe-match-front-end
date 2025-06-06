import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useSongsByGenre } from "../utils/UseSongsByGenre";

interface GenreTableProps {
  genreId: number;
}

const GenreTable = ({ genreId }: GenreTableProps) => {
  const { songs, loading } = useSongsByGenre(genreId);

  if (!genreId) return null;
  if (loading) return <p>Loading genre songs...</p>;

  const filteredSongs = songs.filter((song) => song.genre.id === genreId);
  const limitedResults = filteredSongs.slice(0, 10);

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

export default GenreTable;
