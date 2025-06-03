import { Box, Typography } from "@mui/material";
import "./main.css";

function Home() {
  return (
    <Box>
      <Typography variant="h1">Big M</Typography>
      <Typography variant="h5" sx={{width: "50%", margin: "auto"}}>
        Kurze Beschreibung Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempore dignissimos voluptates sint officiis nulla beatae quia
        delectus inventore. Inventore veritatis, adipisci unde incidunt
        exercitationem labore fuga omnis debitis beatae suscipit.
      </Typography>
    </Box>
  );
}

export default Home;
