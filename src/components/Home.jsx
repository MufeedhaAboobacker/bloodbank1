import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React from 'react'

const Home = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  

  return (
    <div  style={{paddingTop:"50px",marginLeft:"10px"}}>
        <h2 >Blood Request</h2>
        <TextField placeholder='enter your name' id="outlined-basic" label="Full Name" variant="outlined" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField placeholder='enter your mail' id="outlined-basic" label="Email" variant="outlined" /><br></br><br></br><br></br>
        <TextField placeholder='enter your location' id="outlined-basic" label="Location" variant="outlined" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField placeholder='enter your city' id="outlined-basic" label="city" variant="outlined" /> <br></br><br></br>
        <FormControl  sx={{ m: 1, minWidth: 130 }}>
  <InputLabel id="demo-simple-select-label">blood group</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="blood group"
    onChange={handleChange}
  >
    <MenuItem value={10}>A+ve</MenuItem>
    <MenuItem value={20}>A-ve</MenuItem>
    <MenuItem value={30}>B+ve</MenuItem>
    <MenuItem value={30}>B-ve</MenuItem>
    <MenuItem value={30}>AB+ve</MenuItem>
    <MenuItem value={30}>AB-ve</MenuItem>
    <MenuItem value={30}>O+ve</MenuItem>
    <MenuItem value={30}>B+ve</MenuItem>
    <MenuItem value={30}>B+ve</MenuItem>
  </Select>
</FormControl>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<TextField placeholder='enter your Phone number' id="outlined-basic" label="Phone number" variant="outlined" /> <br></br>
<h3>Gender</h3><br></br>
<FormControl>
   
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl><br></br><br></br>
    <Button variant="contained" color="success">submit</Button>




    
    </div>
  )
}

export default Home