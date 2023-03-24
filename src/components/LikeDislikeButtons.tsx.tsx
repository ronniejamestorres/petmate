import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';

import { IconButton } from '@mui/material';


function LikeDislikeButtons() {
  return (
    
    <div className='flex w-full fixed bottom-10 justify-evenly left-0 p-9'>
    <IconButton>
          <PetsIcon />
    </IconButton>

    <IconButton>
          <CloseIcon  />
    </IconButton>
    </div>
    
   
    

  )
}

export default LikeDislikeButtons