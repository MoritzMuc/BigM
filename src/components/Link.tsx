import { Link } from "@mui/material";

function BasicLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      sx={{
        color: "#0907e7",
        textDecoration: "none",
        "&:hover": { scale: "1.2" },
        transition: "scale 0.1s ease-in-out",
      }}
    >
      {text}
    </Link>
  );
}

export default BasicLink;
