import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function Footer() {
  return (
    <AppBar
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "#242424",
        borderTop: "1px solid #4e4e4e",
      }}
      position="fixed"
    >
      <Toolbar>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ width: "100%", justifyContent: "space-between" }}
        >
          <Box sx={{ width: "33%" }}>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Typography>President of MUC</Typography>
              <Box
                component={"img"}
                src="/bflagge.jpg"
                sx={{ height: "50px", width: "80px" }}
              />
            </Stack>
          </Box>
          <Stack direction={"column"} sx={{ width: "33%" }}>
            <Typography variant="subtitle1">Up to Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Typography variant="subtitle1">
                {dayjs().format("DD/MM/YYYY")}
              </Typography>
            </LocalizationProvider>
          </Stack>
          <Typography variant="subtitle1" sx={{ width: "33%" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Footer;
