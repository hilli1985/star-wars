import React from 'react';
import Grid from '@mui/material/Grid';
import CharacterCard from './CharacterCard';
import { useSearchContext } from '../SearchContext';

export interface Character {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = () => {
  const {  searchResults } = useSearchContext();
  console.log(searchResults);
  return (
    !!searchResults.length ? <Grid container spacing={4}  style={{ padding: 16 }}>
      {searchResults.map((character, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
          <CharacterCard character={character} index={index.toString()} />
        </Grid>
      ))}
    </Grid>: <div className="app-header">Nothing To Show...</div>
  );
};

export default CharacterList;