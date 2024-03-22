import { Box, Divider, Typography } from "@mui/material";

const Lines = ({ label }) => {
  return (
    <Box>
      <Typography fontSize="30px" fontWeight={500} lineHeight={2}>
        {label}
      </Typography>
      <Divider
        sx={{
          my: 0.5,
          width: "169px",
          backgroundColor: "black",
          height: "3px",
        }}
      />
    </Box>
  );
};

export default Lines;
