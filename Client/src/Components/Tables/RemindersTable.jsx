import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(description, due, overdue, notify, status) {
  return { description, due, overdue, notify, status };
}

const rows = [
  createData(
    "Urgent Safety Recall",
    "06/04/2023",
    "08/07/2023",
    "Amos Demo",
    "completed"
  ),
  createData(
    "Urgent Safety Recall",
    "06/04/2023",
    "08/07/2023",
    "Amos Demo",
    "completed"
  ),
  createData(
    "Urgent Safety Recall",
    "06/04/2023",
    "08/07/2023",
    "Amos Demo",
    "completed"
  ),
  createData(
    "Urgent Safety Recall",
    "06/04/2023",
    "08/07/2023",
    "Amos Demo",
    "completed"
  ),
  createData(
    "Urgent Safety Recall",
    "06/04/2023",
    "08/07/2023",
    "Amos Demo",
    "completed"
  ),
];

const ReminderTable = () => {
  return (
    <TableContainer component={Paper} className="!border-none !shadow-none">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className="!text-primaryGray">
              Description
            </TableCell>
            <TableCell align="left" className="!text-primaryGray">
              Due
            </TableCell>
            <TableCell align="left" className="!text-primaryGray">
              Overdue
            </TableCell>
            <TableCell align="left" className="!text-primaryGray">
              Notify
            </TableCell>
            <TableCell align="left" className="!text-primaryGray">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="left">{row.due}</TableCell>
              <TableCell align="left">{row.overdue}</TableCell>
              <TableCell align="left">{row.notify}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReminderTable;
