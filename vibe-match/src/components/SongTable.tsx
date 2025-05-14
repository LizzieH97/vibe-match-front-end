import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { string } from "prop-types";

function createData(
  id: string,
  songTitle: string,
  artist: string
) {
  return { id, songTitle, artist};
}

const rows = [
  createData("1", "One Kiss", "Rihana"),
  createData("2", "Rock the boat", "Aaliyah"),
  createData("3", "Sweet Caroline", "Neil Diamond"),
  createData("4", "Crazy in love", "Beyonce"),
  createData("5", "22", "Taylor Swift"),
];

const SongTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">SONG TITLE</TableCell>
            <TableCell align="left">ARTIST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.songTitle}
              </TableCell>
              <TableCell align="right">{row.artist}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SongTable;