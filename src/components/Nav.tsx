import {
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  Box,
  Stack,
} from "@mui/material";
import IosArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BasicLink from "./Link";
import LanguageButtons from "./LanguageButtons";
function Navigation() {
  const { t } = useTranslation();
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  return (
    <AppBar
      component={motion.div}
      initial={{
        width: "300px",
        background: "url(/ebkeflagge.png) no-repeat center center",
        backgroundSize: "cover",
        top: 10,
        left: 10,
        borderRadius: "15px",
        boxShadow: "none",
        alignContent: "center",
        alignItems: "center",
        height: "60px",
      }}
      animate={{
        height: isNavigationOpen ? "400px" : "60px",
      }}
      onMouseLeave={() => setNavigationOpen(false)}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",

        }}
      >
        <Toolbar
          sx={{
            marginBottom: isNavigationOpen ? "250px" : "0px",
            transition: "margin-bottom 0.3s ease-in-out",
            paddingTop: "8px",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ color: "#242424", fontWeight: "bold" }}>
            {t("nav.menu")}
          </Typography>
          {isNavigationOpen &&(
            <Box
              sx={{
                opacity: isNavigationOpen ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack direction={"column"} spacing={2} sx={{ marginTop: "10px" }}>
                <BasicLink href="/" text={t("nav.home")} />
                <BasicLink href="/events" text={t("nav.events")} />
                <BasicLink href="/shop" text={t("nav.shop")} />
                <BasicLink href="/support" text={t("nav.support")} />
                <BasicLink href="/about" text={t("nav.about")} />
                <BasicLink href="/contact" text={t("nav.contact")} />
                
              </Stack>
              <LanguageButtons />
            </Box>
            
          )}
        </Toolbar>
      </Box>
      <IconButton>
        <IosArrowDownIcon
          sx={{
            color: "white",
            transform: isNavigationOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
          onClick={() => setNavigationOpen(!isNavigationOpen)}
          onMouseEnter={() => setNavigationOpen(true)}
        />
      </IconButton>
    </AppBar>
  );
}

export default Navigation;
