import { Box, Typography } from "@mui/material";
import type React from "react";

export interface BoxInBoxProps {
    title: string;
    content: React.ReactNode[];
}

function BoxInBox(props: BoxInBoxProps) {
    return (
      <Box sx={{ marginBottom: "100px" }}>
        <Box
          sx={{
            backgroundColor: "#545454",
            borderRadius: "15px 15px 0px 0px",
            padding: "5px",
          }}
        >
          <Typography variant="h3">{props.title}</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#545454",
            borderRadius: "15px",
            padding: "5px",
            width: "1000px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {props.content}
        </Box>
      </Box>
    );
}

export default BoxInBox