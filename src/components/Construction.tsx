import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Construction() {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h1">{t("construction.title")}</Typography>
      <Typography variant="body1">{t("construction.message")}</Typography>
    </>
  );
}

export default Construction;
