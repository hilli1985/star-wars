// src/components/CharacterList.tsx
import React from "react";
import { useSearchContext } from "../SearchContext";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomGrid from "./CustomGrid";


const SearchBar: React.FC<any> = () => {
  const { query, setQuery, handleSearch, theme } = useSearchContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    // Check if the key down is Enter
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <CustomGrid
      spacing={4}
    >
      <CustomInput placeholder="Search Character"
        type="search"
        fullWidth
        value={query}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        size="small"
        theme={theme}

      />
      <CustomButton
        theme={theme}
        variant="contained"
        onClick={() => {
          handleSearch();
        }}
        size="medium"
      >
        Search
      </CustomButton>

    </CustomGrid>
  );
};

export default SearchBar;
