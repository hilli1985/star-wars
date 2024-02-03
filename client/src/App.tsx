import React, { useEffect } from "react";
import CharacterList from "./Components/CharacterList";
import SearchBar from "./Components/SearchBar";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import './App.css'
import { useSearchContext } from "./SearchContext";
import Spinner from "./Components/Spinner";
import { Typography } from "@mui/material";
import Toaster from "./Components/Toaster";

function App() {
  const { isLoading, open, setOpen, severity, message } = useSearchContext();
  const [light, setLight] = React.useState(false);
  const { theme, setTheme } = useSearchContext();
  

  useEffect(() => {
    setTheme(light ? themeLight : themeDark)
  }, [setLight, light, setTheme])


  useEffect(() => {
    setLight(false)
  }, [setLight, light])


  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h4" component="div" color={{ color: theme.palette.secondary.main }}>
          Star Wars
        </Typography>
        <SearchBar />
        <Toaster message={message} severity={severity} open={open} setOpen={setOpen}/>
        {isLoading ? <Spinner /> :
          <CharacterList />}
      </div>
    </ThemeProvider>
  );
}

export default App;
