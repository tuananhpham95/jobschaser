import { Box } from "@mui/material";
import Lines from "../Lines/Lines";
import TopJobItems from "./TopJobItems/TopJobItems";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LaptopIcon from "@mui/icons-material/Laptop";
import DevicesIcon from "@mui/icons-material/Devices";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
const TopJobs = () => {
  return (
    <Box sx={{ mt: "50px" }}>
      <Box>
        <Lines label={"Top Jobb"} />
      </Box>
      <Box
        sx={{ mt: "50px", display: "flex", justifyContent: "space-between" }}
      >
        <TopJobItems
          jobsTitle={"FullStack-Developer"}
          label={"1630 jobb"}
          icon={<ImportContactsIcon sx={{ width: 84, height: 78 }} />}
        />
        <TopJobItems
          jobsTitle={"Front-end Developer"}
          label={"1220 jobb"}
          icon={<LaptopIcon sx={{ width: 84, height: 78 }} />}
        />
        <TopJobItems
          jobsTitle={"Back-end Developer"}
          label={"1005 jobb"}
          icon={<DevicesIcon sx={{ width: 84, height: 78 }} />}
        />
        <TopJobItems
          jobsTitle={"UXUI Desiger"}
          label={"805 jobb"}
          icon={<LibraryBooksIcon sx={{ width: 84, height: 78 }} />}
        />
      </Box>
    </Box>
  );
};

export default TopJobs;
