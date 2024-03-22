// import { Box, Button, Grid, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchJobs, setEmploymentType } from "../../store/slices/jobsSlice";
import {
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import data from "../../data/data";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const JobCards = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [employmentType, setEmploymentType] = useState("All");
  const dispatch = useDispatch();
  const { searchTerm, employmentType } = useSelector((state) => state.jobs);
  const handleSearch = () => {
    dispatch(searchJobs(searchTerm));
  };
  const handleEmploymentTypeChange = (event) => {
    dispatch(setEmploymentType(event.target.value));
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <Box
      sx={{
        mt: "30px",
        mb: "30px",
        width: "100%",
        height: "350px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 2, mb: "30px" }}
      >
        <TextField
          sx={{ width: "541px", height: "45px" }}
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => dispatch(searchJobs(e.target.value))}
          // onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          InputProps={{
            sx: { borderRadius: "10px" },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Select
          value={employmentType}
          // onChange={(e) => setEmploymentType(e.target.value)}
          onChange={handleEmploymentTypeChange}
        >
          <MenuItem value="All"> All</MenuItem>
          <MenuItem value="Heltid"> Heltid</MenuItem>
          <MenuItem value="Deltid"> Deltid</MenuItem>
        </Select>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Företag</StyledTableCell>
                <StyledTableCell align="right">Jobb</StyledTableCell>
                <StyledTableCell align="right">Skills</StyledTableCell>
                <StyledTableCell align="right">
                  anställningsform
                </StyledTableCell>
                <StyledTableCell align="right">datum</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter((item) => {
                  const descriptionMatch = item.beskrivning
                    .toLowerCase()
                    .includes(searchTerm);
                  const tagMatch = item.taggar.some((tag) =>
                    tag.toLowerCase().includes(searchTerm)
                  );
                  const employmentTypeMatch =
                    employmentType === "All" ||
                    item.anställningsform.toLowerCase() ===
                      employmentType.toLowerCase();
                  return (descriptionMatch || tagMatch) && employmentTypeMatch;
                })
                .map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.företag}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.beskrivning}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.taggar.reduce((acc, tag, index) => {
                        if (index === 0) {
                          return tag;
                        } else {
                          return `${acc} | ${tag}`;
                        }
                      }, "")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.anställningsform}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.datum}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default JobCards;
