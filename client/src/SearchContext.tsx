import React, { createContext, useContext, useState, ReactNode } from "react";
import { Character } from "./Components/CharacterList";
import axios from 'axios';
import { themeDark } from "./theme";
import { Theme } from "@mui/material";
import { severity } from "./Components/Toaster";

type Page = number | null

interface SearchContextProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchResults: Character[];
  handleSearch: (page?: Page) => void;
  count: number;
  isLoading: boolean;
  theme: Theme;
  severity: severity;
  open: boolean;
  message: string;
  // setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: Page;
  handleNext: () => void;
  handlePrevious: () => void;
  previous: Page,
  next: Page
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
  const [currentPage, setCurrentPage] = useState<Page>(1);
  const [next, setNext] = useState<Page>(null);
  const [previous, setPrevious] = useState<Page>(null);

  // Function to make API call based on the search query
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSearchResults = async (page: Page) => {
    const apiUrl = `http://localhost:3001/api/character?search=${query}&page=${page}`;

    try {
      setIsLoading(true);

      // Use Axios to perform the HTTP request
      const response = await axios.get(apiUrl);

      // Axios response data is available in the data property
      const data = response.data;
      if (response.status === 200) {
        setSearchResults(data.results || []);
        setCount(data.count);
        setPrevious(response.data.previous)
        setNext(response.data.next)
        if (data.count) {
          setSeverity('success');
          setMessage(`${data.count} items Successfully fetced!`)
        }
        else {
          setSeverity('error');
          setMessage(`Nothing fetced!`)

        }
      }
      else if (response.status === 500) {
        setSeverity('error');
        setMessage('Error occured during fetch')
      }
      setIsLoading(false);
      setOpen(true);
    }
    catch (error) {
      setOpen(true);
      setIsLoading(false);
      setMessage('Error occured during fetch')
      setSeverity('error')
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearch = (page?: Page) => {
    // debugger;
    if (query.trim() !== "") {
      fetchSearchResults(page || currentPage);
    } else {
      // Clear results if the query is empty
      setSearchResults([]);
    }
  };

  const handleNext = () => {
    setCurrentPage(next)
    handleSearch(next);
  };

  const handlePrevious = () => {
    setCurrentPage(previous)
    handleSearch(previous);
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
    message, 
    currentPage,
    handleNext,
    handlePrevious,
    next,
    previous

  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export { SearchContextProvider, useSearchContext };
