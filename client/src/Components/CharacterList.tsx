import React from 'react';
import Grid from '@mui/material/Grid';
import CharacterCard from './CharacterCard';
import { useSearchContext } from '../SearchContext';
import { Typography } from '@mui/material';
import CustomGrid from './CustomGrid';
import { margin } from '@mui/system';

export interface Character {
  name: string;
  height: string;
  mass: string;
  gender: string;
}


const CharacterList: React.FC = () => {
  const {  searchResults, theme } = useSearchContext();
  console.log(searchResults);
  return (
    !!searchResults.length ? <CustomGrid container spacing={4} style={{marginTop:16}}  >
      {searchResults.map((character, index) => (
        <Grid key={index} xs={12} sm={6} md={4} lg={4} >
          <CharacterCard character={character} index={index.toString()} />
        </Grid>
      ))}
    </CustomGrid>: 
    <Typography variant="h6" component="div" color={{color:theme.palette.secondary.main}} margin={"5vh"}>
    Nothing To Show...
  </Typography>
  );
};

export default CharacterList;