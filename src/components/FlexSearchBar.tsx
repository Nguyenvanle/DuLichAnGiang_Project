import { Box } from "@mui/material";
import { Search, SearchIconWrapper, StyledFlexInputBase } from "./SearchBar";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box sx={{ flexGrow: 0, mx: 1, display: { xs: "flex", md: "none" } }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon></SearchIcon>
        </SearchIconWrapper>
        <StyledFlexInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}
