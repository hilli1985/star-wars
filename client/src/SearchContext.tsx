import React, { createContext, useContext, useState, ReactNode } from "react";
import { Character } from "./Components/CharacterList";

interface SearchContextProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  searchResults: Character[];
  handleSearch: () => void;
  count: number;
  isLoading: boolean;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

// Custom hook to access the context
const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
};

// Context provider component
interface SearchContextProviderProps {
  children: ReactNode;
}

const SearchContextProvider: React.FC<SearchContextProviderProps> = ({
  children,
}) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to make API call based on the search query
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSearchResults = async () => {
    const apiUrl = `http://localhost:3001/api/character?search=${query}`;
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSearchResults(data.results || []);
      setCount(data.count);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      fetchSearchResults();
    } else {
      // Clear results if the query is empty
      setSearchResults([]);
    }
  };

  const value: SearchContextProps = {
    query,
    setQuery,
    searchResults,
    handleSearch,
    count,
    isLoading
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export { SearchContextProvider, useSearchContext };
