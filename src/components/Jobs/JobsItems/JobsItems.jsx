import { Box, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const JobsItems = ({ logo, jobDesc, jobLocation, jobTitle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
      }}
    >
      <Box
        component="img"
        alt="jobchaser logo"
        src={logo}
        sx={{
          width: "182px",
          height: "169px",
          objectFit: "scale-down",
        }}
      />
      <Box
        sx={{
          height: "169px",
          width: "300px",
          backgroundColor: "#FAE6E6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Typography fontSize="20px">{jobTitle}</Typography>
        <Typography>{jobDesc}</Typography>
        <Box sx={{ display: "flex" }}>
          <PlaceIcon />
          <Typography>{jobLocation}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JobsItems;
