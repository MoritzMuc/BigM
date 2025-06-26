import { useState } from "react";
import Panel from "./Panel";
import { AppBar, Box, Button, Tab, Tabs, TextField, Toolbar, Typography } from "@mui/material";
import  Insights  from "./Insights";

function AdminPanel() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [pwdInput, setPwdInput] = useState("");
  const confirmPassword = () => {
    if (pwdInput === "test") {
      setIsAdmin(true);
    }
  };
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };
  return (
    <>
      {isAdmin ? (
        <>
          <AppBar sx={{backgroundColor: "#333", alignItems: "center"}}>
            <Toolbar>
              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                sx={{ width: "100%" }}
              >
                <Tab label="Panel" />
                <Tab label="Insights" />
              </Tabs>
              
            </Toolbar>
          </AppBar>
          {tabIndex === 0 && <Panel />}
          {tabIndex === 1 && <Insights />}
        </>
      ) : (
        <Box>
          <Typography variant="h1">Admin Panel Login</Typography>
          <TextField
            value={pwdInput}
            onChange={(e) => setPwdInput(e.target.value)}
          />
          <Button onClick={confirmPassword}>Log In</Button>
        </Box>
      )}
    </>
  );
}

export default AdminPanel;
