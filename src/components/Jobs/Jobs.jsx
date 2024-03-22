import { Box } from "@mui/material";
import Skatteverket_Logo from "./../../assets/Skatteverket_Logo.png";
import Swebank_Logo from "./../../assets/swebank_logo.png";
import Arf_Logo from "./../../assets/arf_logo.png";
import Sbb_Logo from "./../../assets/sbb.jpg";
import Lines from "../Lines/Lines";
import JobsItems from "./JobsItems/JobsItems";

const Jobs = () => {
  return (
    <Box sx={{ mt: "50px" }}>
      <Box>
        <Lines label={"Lediga Jobb"} />
      </Box>
      <Box
        sx={{
          mt: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 5,
          backgroundColor: "#FFF6F6",
          height: "437px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <JobsItems
            logo={Skatteverket_Logo}
            jobTitle={"Marketing Coordinator"}
            jobDesc={"Support Marketing & Medica..."}
            jobLocation={"Stockholm"}
          />
          <JobsItems
            logo={Swebank_Logo}
            jobTitle={"Fullstack"}
            jobDesc={"Support Marketing & Medica..."}
            jobLocation={"Eskilstuna"}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <JobsItems
            logo={Arf_Logo}
            jobTitle={"UX/UI Designer"}
            jobDesc={"Support Marketing & Medica..."}
            jobLocation={"Borås"}
          />
          <JobsItems
            logo={Sbb_Logo}
            jobTitle={"Tester"}
            jobDesc={"Support Marketing & Medica..."}
            jobLocation={"Västerås"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Jobs;
