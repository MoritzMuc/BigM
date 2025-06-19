import { useState } from "react";
import Panel from "./Panel";
import { Box, Button, TextField, Typography } from "@mui/material";

function AdminPanel() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [pwdInput, setPwdInput] = useState("");
    const confirmPassword = () => {
        if (pwdInput === "test") {
            setIsAdmin(true);
        }
    };
    return (
        <>
            {isAdmin && <Panel />}
            {!isAdmin && (
                <Box>
                    <Typography variant="h1">Admin Panel Login</Typography>
                    <TextField value={pwdInput} onChange={(e) => setPwdInput(e.target.value)} />
                    <Button onClick={confirmPassword}>Log In</Button>
                    </Box>
            )}
        </>
    );
}

export default AdminPanel;