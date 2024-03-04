//import Button from "@mui/material/Button";
//<Button variant="contained">Hello world</Button>
import * as UI from "@mui/material";

export default function Header() {
  return (
    <>
      <UI.Box sx={{ flexGrow: 1 }}>
        <UI.AppBar position="static">
          <UI.Toolbar>
            <UI.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Travel Site
            </UI.Typography>

            <UI.Button color="inherit">Home</UI.Button>
            <UI.Button color="inherit">Booking</UI.Button>
            <UI.Button color="inherit">Guides</UI.Button>
            <UI.Button color="inherit">Destinations</UI.Button>
            <UI.Button color="inherit">FAQ</UI.Button>
          </UI.Toolbar>
        </UI.AppBar>
      </UI.Box>
    </>
  );
}
