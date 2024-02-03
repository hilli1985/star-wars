import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Character } from './CharacterList';
import GenderAvatar from './GenderAvatar';
import { useSearchContext } from '../SearchContext';
import CustomCard from './CustomCard';


interface IProps {
  character:Character
  index: string
}

const CharacterCard = ({character} : IProps) => {
  const { name, height, mass, gender } = character as Character;
  const { theme } = useSearchContext();

  return (
    <CustomCard theme={theme}>
      <CardContent>
        <Typography variant="h5" component="div" color={{color:theme.palette.secondary.main}}>
          {name}
        </Typography>
        <Typography variant="body1" color={{color:theme.palette.text.secondary}} >
          Height: {height} cm
        </Typography>
        <Typography variant="body1" color={{color:theme.palette.text.secondary}}>
          Mass: {mass} {mass === 'unknown' ? '': 'kg'} 
        </Typography>
         <GenderAvatar gender={gender} theme={theme} />
      </CardContent>
    </CustomCard>
  );
};

export default CharacterCard;