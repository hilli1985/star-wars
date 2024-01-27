import React, { useEffect } from "react";
import CharacterList from "./Components/CharacterList";
import SearchBar from "./Components/SearchBar";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import './App.css'
import { SearchContextProvider, useSearchContext } from "./SearchContext";
import Spinner from "./Components/Spinner";

const characterList = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    gender: "male",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    gender: "male",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    gender: "male",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    gender: "male",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    gender: "male",
  },
];

function App() {
  const { isLoading } = useSearchContext();
  const [light, setLight] = React.useState(false);
  const theme = light ? themeLight : themeDark;

  useEffect(() => {
    setLight(false)
  }, [])



  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="app-header">Star Wars</div>
        <SearchBar />
        {isLoading ? <Spinner/> : 
        <CharacterList characters={[]} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
