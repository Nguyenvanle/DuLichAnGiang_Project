import Typography from "@mui/material/Typography";
import HikingIcon from "@mui/icons-material/Hiking";

export function FlexLogo() {
  return (
    <>
      <HikingIcon
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
        }}
        fontSize="large"
      />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: {
            xs: "flex",
            md: "none",
          },
          flexGrow: 1,
          fontFamily: "monospace",
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
