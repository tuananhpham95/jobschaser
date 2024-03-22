import { Box } from "@mui/material";
import Lines from "../Lines/Lines";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Spotify_Logo from "./../../assets/Spotify_logo.jpg";
import Apple_Logo from "./../../assets/Apple_logo.jpg";
import Microsoft_Logo from "./../../assets/microsoft.webp";
const TopCopanies = () => {
  return (
    <div>
      <Box
        sx={{ mt: "50px", display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Box>
          <Lines label={"Top Företag"} />
        </Box>
        <Box
          sx={{
            mt: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowBackIosIcon />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              component="img"
              alt="jobchaser logo"
              src={Spotify_Logo}
              sx={{
                width: "333px",
                height: "167px",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              }}
            />
            <Box
              component="img"
              alt="jobchaser logo"
              src={Apple_Logo}
              sx={{
                width: "333px",
                height: "167px",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              }}
            />
            <Box
              component="img"
              alt="jobchaser logo"
              src={Microsoft_Logo}
              sx={{
                width: "333px",
                height: "167px",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              }}
            />
          </Box>
          <ArrowForwardIosIcon />
        </Box>
      </Box>
    </div>
  );
};

export default TopCopanies;
