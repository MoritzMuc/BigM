import { Box, Typography } from "@mui/material";
import { UpcomingEvent } from "../model/NextEventModel";

function NextEvent() {
  return (
    <Box sx={{ right: 70, position: "absolute", backgroundColor: "#545454", borderRadius: "15px", padding: "5px" }}>
      <Typography variant="h4">{UpcomingEvent.title}</Typography>
    </Box>
  );
}
export default NextEvent;
