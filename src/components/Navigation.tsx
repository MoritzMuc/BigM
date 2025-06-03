import { Box, Divider, IconButton, Link, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "framer-motion";

function Navigation() {
  const [ismenuOpen, setIsMenuOpen] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <Box
        sx={{
          width: "280px",
          background: "url(/ebkflagge.png) no-repeat center center",
          backgroundSize: "cover",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: 30,
          left: 30,
          borderRadius: "10px",
          padding: "2px",
          flexDirection: "column",
        }}
        component={motion.div}
        initial={{ height: "60px" }}
        animate={{ height: ismenuOpen ? "210px" : "60px" }}
        exit={{ height: "60px" }}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <IconButton
          onClick={() => setIsMenuOpen(!ismenuOpen)}
          sx={{ marginTop: "10px" }}
        >
          <MenuIcon />
        </IconButton>
        {ismenuOpen && (
          <Stack
            direction={"column"}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Divider sx={{color: "rgb(89, 89, 89)"}}>Menu</Divider>
            <Stack
              direction={"column"}
              component={motion.div}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              sx={{
                padding: "5px",
              }}

            >
              <Link
                sx={{
                  color: "rgb(89, 89, 89)",
                  textDecoration: "none",
                }}
                component={motion.a}
                initial={{ scale: 1}}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="/"
              >
                Home
              </Link>
              <Link
                sx={{
                  color: "rgb(89, 89, 89)",
                  textDecoration: "none",
                }}
                component={motion.a}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="/shop"
              >
                Shop
              </Link>
              <Link
                sx={{
                  color: "rgb(89, 89, 89)",
                  textDecoration: "none",
                }}
                component={motion.a}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="/events"
              >
                Events
              </Link>
              <Link
                sx={{
                  color: "rgb(89, 89, 89)",
                  textDecoration: "none",
                }}
                component={motion.a}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="/about"
              >
                About
              </Link>
              <Link
                sx={{
                  color: "rgb(89, 89, 89)",
                  textDecoration: "none",
                }}
                component={motion.a}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="/legal"
              >
                Legal
              </Link>
            </Stack>
          </Stack>
        )}
      </Box>
    </AnimatePresence>
  );
}

export default Navigation;
