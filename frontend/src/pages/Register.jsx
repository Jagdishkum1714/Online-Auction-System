import React, { useState } from 'react'
import axios from 'axios'
import { 
  Container, Box, Card, Typography, TextField, Button 
} from '@mui/material';
import PasswordField from '../components/PasswordField';

const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log({firstName})
    console.log({lastName})
    console.log({email})
    console.log({password})
    console.log({confirmPassword})

    if (password !== confirmPassword) {
      console.log("Password doesn't match.")
      alert("Password doesn't match.")
      return
    } 

    console.log("After password checked")

    // Send request to Backend API
    try {
      const res = await axios.post("/api/users/register", {
        firstName,
        lastName,
        email,
        password
      })
      // console.log(res.data)
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      alert(res.data.message)
    } catch (err) {
      // console.error(err.response.data)
      alert(err.response.data.message)
    }    
  }

  return (
    <Container 
      sx={{ 
        paddingTop: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} 
      maxWidth="sm"
    >
      <Card
        sx={{
          width: 450,
        }}
      >
        <Box bgcolor="#9ba6a5">
          <Typography
             py={2} 
             align="center" 
             fontWeight="bold"
             variant="h5"
             color="black"
          >
              Register Form
          </Typography>
        </Box>
        <Box 
          component="form"
          onSubmit={onSubmitHandler}
          display="flex" 
          flexDirection="column" 
          gap={2} 
          my={4} 
          px={4}
        >
          <TextField 
            label="First Name"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField 
            label="Last Name"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField 
            label="Email"
            type="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth 
          />
          <PasswordField password={password} setPassword={setPassword} />
          <PasswordField title="Confirm Password" password={confirmPassword} setPassword={setConfirmPassword} />
          <Button type="submit" variant="contained" size="large" style={{backgroundColor:'#9ba6a5',color:'black'}} >
            Register
          </Button>
        </Box>
      </Card>
    </Container>
  )
}

export default Register
