import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{paddingTop:"80px"}}>
    
        <Typography variant="h5">
        <b>Welcome to Login Page</b>
        </Typography><br></br><br></br><br></br>
<TextField id="outlined-basic" label="Username" variant="outlined" /><br></br><br></br>
<TextField id="outlined-basic" label="Password" variant="outlined" /><br></br><br></br>

<Button variant="contained" color="success">submit</Button>


    </div>
  )
}

export default Login