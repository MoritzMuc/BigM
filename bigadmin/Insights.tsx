import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import InstagramInsights from "./insights/InstagramInsights";
import TiktokInsights from "./insights/TiktokInsights";
import TwitchInsights from "./insights/TwitchInsights";

function Insights() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };
  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        sx={{
            minWidth: "300px",
            maxWidth: "300px",
            marginLeft: "50%",
            transform: "translateX(-50%)",
        }}
      >
        <Tab label="Instagram" />
        <Tab label="TikTok" />
        <Tab label="Twitch" />
      </Tabs>
      {tabIndex === 0 && <InstagramInsights />}
      {tabIndex === 1 && <TiktokInsights />}
      {tabIndex === 2 && <TwitchInsights />}
    </>
  );
}

export default Insights;
