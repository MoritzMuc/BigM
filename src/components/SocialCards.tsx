import { Box, Link, Stack, Typography } from "@mui/material";
import type { SocialCardProps } from "../model/SocialCardModels";
import { useTranslation } from "react-i18next";

function SocialCard(props: SocialCardProps) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        background: `url(${props.background})`,
        width: "300px",
        height: "300px",
        borderRadius: "15px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.8",
        ":hover": { scale: "1.05" },
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Stack
        sx={{
          backdropFilter: "blur(10px)",
          height: "100%",
          width: "100%",
          borderRadius: "15px",
          paddingTop: "20px",
        }}
        direction={"column"}
      >
        <Typography variant="h4">{props.title}</Typography>
        <Typography>{props.description}</Typography>
        <Link
          href={props.link}
          sx={{ marginTop: "auto", marginBottom: "30px" }}
        >
          {t("support.follow")}
        </Link>
      </Stack>
    </Box>
  );
}

export default SocialCard;
