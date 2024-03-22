import { Box, Button } from "@mui/material";
import Logo from "./../../assets/jobb_logo.jpg";
import NavItems from "./Nav/NavItems";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const NavBar = () => {
  const yrkeLabels1 = ["Front-end", "Back-end", "Full-stack"];
  const yrkeLabels2 = ["apple", "spotify", "microsoft"];
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          alt="jobchaser logo"
          src={Logo}
          sx={{ width: "135px", height: "84px" }}
        />
        <Box sx={{ display: "flex", gap: 10 }}>
          <NavItems id={"basic-button-yrke-1"} btn_title={"Jobb"} />
          <NavItems id={"basic-button-yrke-1"} btn_title={"CV"} />
          <NavItems
            id={"basic-button-yrke-1"}
            labels={yrkeLabels1}
            btn_title={"Yrke"}
            endIcon={<KeyboardArrowDownIcon />}
          />
          <NavItems
            id={"basic-button-yrke-1"}
            labels={yrkeLabels2}
            btn_title={"Företag"}
            endIcon={<KeyboardArrowDownIcon />}
          />
          <NavItems
            id={"basic-button-yrke-1"}
            labels={yrkeLabels1}
            btn_title={"News"}
            endIcon={<KeyboardArrowDownIcon />}
          />
        </Box>
        <Box>
          <Button
            sx={{ width: "155px", height: "48px", borderRadius: "20px" }}
            variant="contained"
          >
            Login
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default NavBar;
