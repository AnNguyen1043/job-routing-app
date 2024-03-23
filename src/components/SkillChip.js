import * as React from 'react';
import Chip from '@mui/material/Chip';



export default function SkillChip({skill}) {
 

  return (
    
      <Chip label={skill} color='secondary'mr={1}/>
    
  );
}