// import { useState } from "react";
// import {
//   TextField,
//   IconButton,
//   InputAdornment,
//   Box,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <Box
//       sx={{
//         mt: "30px",
//         width: "100%",
//         height: "60px",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <TextField
//         sx={{ width: "541px", height: "45px" }}
//         label="Search"
//         variant="outlined"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         onKeyDown={handleKeyDown}
//         InputProps={{
//           sx: { borderRadius: "10px" },
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton onClick={handleSearch}>
//                 <SearchIcon />
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />
//       <Select defaultValue="Heltid">
//         <MenuItem value="Heltid"> Heltid</MenuItem>
//         <MenuItem value="Deltid"> Deltid</MenuItem>
//       </Select>
//     </Box>
//   );
// };

// export default SearchBar;
