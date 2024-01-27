import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Character } from './CharacterList';


interface IProps {
  character:Character
  index: string
}

const CharacterCard = ({character} : IProps) => {
  const { name, height, mass, gender } = character as Character;

  return (
    <Card style={{background:"#393E43"}}>
      <CardContent>
        <Typography variant="h5" component="div" style={{color:"#FFE300"}}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:"#C8C8C8"}}>
          Height: {height} cm
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:"#C8C8C8"}}>
          Mass: {mass} kg
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color:"#C8C8C8"}}>
          Gender: {gender}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;