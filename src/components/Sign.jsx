import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Sign = () => {
  return (
    <div style={{paddingTop:"80px"}}>

<Typography variant="h5">
        <b>Welcome to SignUp Page</b>
        </Typography><br></br><br></br>

        <TextField id="outlined-basic" label="First Name" variant="outlined"/><br ></br><br></br>
        <TextField id="outlined-basic" label="Last name" variant="outlined" /><br></br><br></br>
        <TextField id="outlined-basic" label="Email" variant="outlined" /><br></br><br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br></br><br></br>
        <TextField id="outlined-basic" label="Confirm password" variant="outlined" /><br></br><br></br>
        <Button variant="contained" color="success">
  Create Account
</Button>
    </div>
  )
}

export default Sign