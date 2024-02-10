import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Theme, styled } from '@mui/system';

interface GenderIconProps {
  theme: Theme,
  gender: string
}

const GenderIcon = styled(Avatar)(({ theme, gender }: GenderIconProps) => ({
  bottom: 20,
  position: "absolute",
  backgroundColor: gender === 'male' ? theme.palette.primary.main : theme.palette.secondary.main,
  color: theme.palette.getContrastText(gender === 'male' ? theme.palette.primary.main : theme.palette.secondary.main),
}));

const GenderAvatar = ({ gender, theme }: GenderIconProps) => {
  return (
    <GenderIcon gender={gender} theme={theme}>
      {gender === 'male' ? '♂' : '♀'}
    </GenderIcon>
  );
};

export default GenderAvatar;