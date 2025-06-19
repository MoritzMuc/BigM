import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import i18n from "../i18n";

function LanguageButtons() {
  return (
    <ToggleButtonGroup
      sx={{
        marginTop: "10px",
        marginLeft: "50px",
        marginRight: "50px",
      }}
    >
      <ToggleButton
        value="en"
        onClick={() => i18n.changeLanguage("en")}
        sx={{
          border: "none",
          background: "none",
            ":hover": { background: "none", borderBottom: "2px solid #242424", scale: "1.08" },
          transition: "all 0.1s ease-in-out",
        }}
      >
        EN
      </ToggleButton>
      <ToggleButton
        value="de"
        onClick={() => i18n.changeLanguage("de")}
        sx={{
          border: "none",
          background: "none",
            ":hover": { background: "none", borderBottom: "2px solid #242424", scale: "1.08" },
          transition: "all 0.1s ease-in-out",
        }}
      >
        DE
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default LanguageButtons;
