import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';

import { IconButton } from '@mui/material';


function LikeDislikeButtons() {
  return (
    
    <div className='flex w-full fixed bottom-8 justify-evenly py-48'>
    
    <IconButton>
          <PetsIcon fontSize='large'/>
    </IconButton>

    <IconButton>
          <CloseIcon fontSize='large'/>
    </IconButton>

    </div>
    
   
    

  )
}

export default LikeDislikeButtons