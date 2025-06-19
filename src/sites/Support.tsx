import { Box, Stack} from "@mui/material";
import { useTranslation } from "react-i18next";
import BoxInBox from "../components/BoxInBox";
import type { BoxInBoxProps } from "../components/BoxInBox";
import type { SocialCardProps } from "../model/SocialCardModels";
import SocialCard from "../components/SocialCards";



function Support() {
  const { t } = useTranslation();
  const SocialCards: SocialCardProps[] = [
    {
      title: "Instagram",
      description: "Description 1",
      image: "https://via.placeholder.com/150",
      link: "https://example.com",
    },
    {
      title: "TikTok",
      description: "Description 2",
      image: "https://via.placeholder.com/150",
      link: "https://example.com",
    },
    {
      title: "Twitch",
      description: "Description 3",
      image: "https://via.placeholder.com/150",
      link: "https://example.com",
    },
  ];
  const FreeBox: BoxInBoxProps = {
    title: t("support.free"),
    content: [
      <Stack>
          <SocialCard {...SocialCards[0]}/>
      </Stack>
    ],
  }
  const PaidBox: BoxInBoxProps = {
    title: t("support.paid"),
    content: [
      <Stack>

      </Stack>
    ],
  }
  return (
    <Box>
      <BoxInBox {...FreeBox} />
      <BoxInBox {...PaidBox} />
    </Box>
  );
}
export default Support;
