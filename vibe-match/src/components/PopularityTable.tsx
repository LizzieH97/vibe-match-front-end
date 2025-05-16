import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getSongsByPopularity } from "../utils/CallingFunctions";

const PopularityTable = () => {
  const mockSongs = getSongsByPopularity();
  if (!mockSongs) {
    return null;
  }
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
            {/* <TableCell>#</TableCell> */}
            <TableCell align="center">SONG TITLE</TableCell>
            <TableCell align="center">GENRE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockSongs.map((song) => (
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

export default PopularityTable;
