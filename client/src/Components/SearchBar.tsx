// src/components/CharacterList.tsx
import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSearchContext } from "../SearchContext";
import CustomInput from "./CustomInput";

const SearchBar: React.FC<any> = () => {
  const { query, setQuery, handleSearch } = useSearchContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Grid
      spacing={2}
      style={{
        padding: 16,
        display: "flex",
        alignItems: "stretch",
        width: "50%",
        margin: "auto"
      }}
    >
      <CustomInput placeholder="Search Character"    
       type="search"
       fullWidth
       value={query}
       onChange={handleSearchChange}
       size="small"
      //  sx={{ borderColor: "#C8C8C8", color: "#FFE300" }}
      
      />
      <Button
        sx={{ backgroundColor: "#454A4E", color: "#C8C8C8" }}
        // color="secondary"
        variant="contained"
        onClick={() => {
          setQuery("");
          handleSearch();
        }}
        style={{ marginLeft: 8 }}
        size="medium"
      >
        Search
      </Button>
    </Grid>
  );
};

export default SearchBar;
