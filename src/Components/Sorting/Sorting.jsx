import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import "./Sorting.css"

export const Sorting=({handleSort})=> {
  return (
    <div className='sortButtons'>
        <ButtonGroup variant="text" aria-label="text button group">
        <Button className='bttn' variant="text" onClick={()=> {handleSort('asc', 'title')}}>Asc Title Sort</Button>
        <Button className='bttn' variant="text" onClick={()=> {handleSort('desc', 'title')}}>Dsc Title Sort</Button>
        <Button className='bttn' variant="text" onClick={()=> {handleSort('asc', 'price')}}>Asc Price Sort</Button>
        <Button className='bttn' variant="text" onClick={()=> {handleSort('desc', 'price')}}>Dsc Price Sort</Button>
        </ButtonGroup>
    </div>
  )
}

