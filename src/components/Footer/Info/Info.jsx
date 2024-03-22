import { Box, Typography } from "@mui/material";
const Info = ({ title, label1, label2, label3, label4 }) => {
  return (
    <Box sx={{ color: "#FFF" }}>
      <Typography variant="h5">{title}</Typography>
      <Typography>{label1}</Typography>
      <Typography>{label2}</Typography>
      <Typography>{label3}</Typography>
      <Typography>{label4}</Typography>
    </Box>
  );
};

export default Info;
