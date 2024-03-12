import Typography from "@mui/material/Typography";
import HikingIcon from "@mui/icons-material/Hiking";

export function Logo() {
  return (
    <>
      <HikingIcon
        fontSize="large"
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      />
      <Typography
        variant={"h6"}
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          fontFamily: "sans-serif",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        AGTRAVEL
      </Typography>
    </>
  );
}
