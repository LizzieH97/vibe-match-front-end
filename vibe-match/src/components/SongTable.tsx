import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface SongTableProps {
  songInput: string;
}

const mockSongs = [
  { id: "1", songTitle: "One Kiss", artist: "Rihanna" },
  { id: "2", songTitle: "Rock the Boat", artist: "Aaliyah" },
  { id: "3", songTitle: "Sweet Caroline", artist: "Neil Diamond" },
  { id: "4", songTitle: "Crazy in Love", artist: "Beyoncé" },
  { id: "5", songTitle: "22", artist: "Taylor Swift" },
];

const SongTable = ({ songInput }: SongTableProps) => {
  const filteredSongs = mockSongs.filter((song) =>
    song.songTitle.toLowerCase().includes(songInput.toLocaleLowerCase())
  );

  // to prevent non filtered data from displaying the table
  if (!songInput) {
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
      <Table sx={{ minWidth: 400, width: "100%" }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#884fff" }}>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">SONG TITLE</TableCell>
            <TableCell align="center">ARTIST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredSongs.map((song) => (
            <TableRow
              key={song.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: "#67afa9",
              }}
            >
              <TableCell component="th" scope="row">
                {song.id}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {song.songTitle}
              </TableCell>
              <TableCell align="center">{song.artist}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SongTable;
