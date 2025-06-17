import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

function Footer() {
    const {t} = useTranslation();

  return (
    <AppBar sx={{ top: "auto", bottom: 0, backgroundColor: "#333" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          component={"img"}
          src="/bflagge.jpg"
          sx={{ width: "100px", height: "50px", borderRadius: "15px" }}
        />
        <Typography sx={{ width: "100px" }}>{t("footerText")}</Typography>
        <Typography sx={{ width: "100px" }}>
          BigM&copy;
          <br />
          {dayjs().format("YYYY")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Footer;
