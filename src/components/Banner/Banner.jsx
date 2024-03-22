import { Box } from "@mui/material";
import Banner_img from "./../../assets/banner.jpg";
const Banner = () => {
  return (
    <Box
      component="img"
      alt="jobchaser logo"
      src={Banner_img}
      sx={{ width: "100%", height: "390px", mt: "50px" }}
    />
  );
};

export default Banner;
