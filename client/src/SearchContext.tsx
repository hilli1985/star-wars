import React, { createContext, useContext, useState, ReactNode } from "react";
import { Character } from "./Components/CharacterList";
import axios from 'axios';
import { themeDark } from "./theme"; 
import { Theme } from "@mui/material";
import { severity } from "./Components/Toaster";

interface SearchContextProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchResults: Character[];
  handleSearch: () => void;
  count: number;
  isLoading: boolean;
  theme: Theme;
  severity: severity;
  open: boolean;
  message: string;
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
  const [theme, setTheme] = useState(themeDark);
  const [severity, setSeverity] = useState('success' as severity);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  // Function to make API call based on the search query
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSearchResults = async () => {
    const apiUrl = `http://localhost:3001/api/character?search=${query}`;
  
    try {
      setIsLoading(true);
  
      // Use Axios to perform the HTTP request
      const response = await axios.get(apiUrl);
  
      // Axios response data is available in the data property
      const data = response.data;
  
      setSearchResults(data.results || []);
      setCount(data.count);
      setIsLoading(false);
      setOpen(true);
      if (data.count) {
        setSeverity('success');
        setMessage(`${data.count} items Successfully fetced!`)
      }
      else {
        setSeverity( 'error');
        setMessage(`Nothing fetced!`)
      }


    } catch (error) {
      setMessage('Error occured during fetch')
      setSeverity('error')
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
    isLoading,
    theme,
    setTheme,
    severity,
    open,
    setOpen,
    message
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export { SearchContextProvider, useSearchContext };
