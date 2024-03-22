import { Box, Typography } from "@mui/material";

const TopJobItems = ({ jobsTitle, label, icon }) => {
  return (
    <Box
      sx={{
        width: "264px",
        height: "263px",
        backgroundColor: "#F2F7FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          width: "124px",
          height: "112px",
          backgroundColor: "#D9D9D9",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </Box>
      <Box textAlign={"center"}>
        <Typography variant="h6">{jobsTitle}</Typography>
        <Typography>{label}</Typography>
      </Box>
    </Box>
  );
};

export default TopJobItems;
