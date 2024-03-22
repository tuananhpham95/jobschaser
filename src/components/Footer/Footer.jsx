import { Box } from "@mui/material";
import Info from "./Info/Info";
import CopyRight from "./CopyRight/CopyRight";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: "100px",
        width: "100%",
        height: "350px",
        backgroundColor: "#001744",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Box sx={{ display: "flex", gap: 10 }}>
        <Info
          title={"Jobchaser"}
          label1={"frågor"}
          label2={"Om jobchaser"}
          label3={"Kontakt"}
          label4={"CV"}
        />
        <Info
          title={"Jobchaser"}
          label1={"frågor"}
          label2={"Om jobchaser"}
          label3={"Kontakt"}
          label4={"CV"}
        />
        <Info
          title={"Jobchaser"}
          label1={"frågor"}
          label2={"Om jobchaser"}
          label3={"Kontakt"}
          label4={"CV"}
        />
        <Info
          title={"Jobchaser"}
          label1={"frågor"}
          label2={"Om jobchaser"}
          label3={"Kontakt"}
          label4={"CV"}
        />
        <Info
          title={"Jobchaser"}
          label1={"frågor"}
          label2={"Om jobchaser"}
          label3={"Kontakt"}
          label4={"CV"}
        />
      </Box>
      <Box>
        <CopyRight />
      </Box>
    </Box>
  );
};

export default Footer;
