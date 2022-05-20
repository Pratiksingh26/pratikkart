import React from 'react'
import "./Address.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

export const Address=()=> {
    function myFunction() {
        alert("Your details has been recorded.")
    }
  return <>
  <h2>PLEASE FILL THE FOLLOWING FORM</h2> 
  <div className='main'>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       
        <br />
      <TextField id="outlined-basic" label="Name" variant="standard" required/><br /><br />
      <TextField id="standard-basic" label="E-mail" variant="standard" required/><br /><br />
      <TextField id="standard-basic" label="Phone number" variant="standard" required/><br /><br />
      <TextField id="standard-basic" label="Address line 1" variant="standard" required/>
      <TextField id="standard-basic" label="Address line 2" variant="standard" required/>
    
    </Box>
    <br />
    <Button variant="outlined" color="success" onClick={()=>myFunction()}>Submit</Button><br /><br />
    <Link to="/payment"> <Button variant="outlined" color="success">Proceed to payment gateway</Button></Link><br />
    
  </div>
  </>
}