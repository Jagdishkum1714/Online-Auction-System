import { 
    Container, Box, Card, Typography, TextField, 
    Button, 
    Avatar
  } from '@mui/material';
  import React, { useContext, useEffect, useState, useRef } from 'react'
  import { useLocation, useNavigate, useParams } from 'react-router-dom';
  import axios from 'axios';
  import AuthContext from '../context/AuthContext';
  
  const EditMovie = () => {
    const navigate = useNavigate()
    const fileRef = useRef(null)

    const params = useParams()
    const { id } = params

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [uploadedFile, setUploadedFile] = useState(null)
    const [image, setImage] = useState(null)
    const [rating, setRating] = useState('')
    const [year, setYear] = useState('')
    const [trailer, setTrailer] = useState('')
    const [genre, setGenre] = useState('')
    const [writers, setWriters] = useState('')
    const [directors, setDirectors] = useState('')

    const { user } = useContext(AuthContext)

    useEffect(() => {
      if(id) {
        getMovieDetails()

      }  
    }, [id])
  
    useEffect(() => {
      if(!user) {
        navigate("/login")
      }
    }, [user])

    const getMovieDetails = async () => {
      const options = {
          method: 'GET',
          url: `/api/movies/get-details/${id}`
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
            if(response.data?.success) {
              const movie = response.data?.data
              const genreData = movie?.genre?.toString()
              const writersData = movie?.writers?.toString()
              const directorsData = movie?.directors?.toString()
              setTitle(movie?.title)
              setDescription(movie?.description)
              setRating(movie?.rating)
              setYear(movie?.year)
              setTrailer(movie?.trailer)
              setGenre(genreData)
              setWriters(writersData)
              setDirectors(directorsData)
              setUploadedFile(movie?.image)
            } else  {
              alert(response.data?.message)
            }
        } catch (error) {
            console.error(error);
            alert(error?.response?.data?.message)
        } finally {
          // setLoading(false)
        }
  }

    const uploadFileHandler = (e) => {
      e.preventDefault()

      const file = e.target.files[0]

      if (file) {
        const reader = new FileReader()
        
        reader.onload = () => {
          setUploadedFile(reader.result)
        }
        
        reader.readAsDataURL(file)
        setImage(file)

      }
    }
  
    const onSubmitHandler = async (e) => {
      e.preventDefault()

      const formData = new FormData()

      formData.append("id", id)
      formData.append("image", image)
      formData.append("title", title)
      formData.append("description", description)
      formData.append("rating", rating) 
      formData.append("year", year)
      formData.append("trailer", trailer)
      formData.append("genre", genre)
      formData.append("writers", writers)
      formData.append("directors", directors)

      // Send Backend API
      try {
        const res = await axios.patch("/api/movies/update-movie", formData, {
            headers: {
                Authorization: `Bearer ${user?.accessToken}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        if(res.data?.success) {
            getMovieDetails()
            setImage(null)
            alert("Movie updated successfully.")
        } else  {
          alert("Something went wrong!")
        }
      } catch (err) {
        console.error(err)
        alert(err.response?.data?.message)
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
            mb: 6,
            pb: 3
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
                Update Movie
            </Typography>
          </Box>
          <Box 
            component="form"
            onSubmit={onSubmitHandler}
            display="flex" 
            flexDirection="column" 
            gap={2.5} 
            mt={6} 
            px={4}
          >
            <Box display="flex" justifyContent="center" gap={2}>
              <Avatar src={uploadedFile} variant="square" />
              <input 
                type="file"
                ref={fileRef}
                style={{ display: "none" }}
                onChange={uploadFileHandler}
              />
              <Button variant='contained' onClick={ () => fileRef.current.click() } style={{backgroundColor:'#9ba6a5',color:'black'}}>
                Upload Image
              </Button>
            </Box>
            <TextField 
              label="Title"
              placeholder="Avengers"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth 
            />
             <TextField 
              label="Description"
              placeholder="Some description about the movie...."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              fullWidth 
            />
             <TextField 
              label="Starting Price"
             
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
              fullWidth 
            />
            <TextField 
              label="Year"
             
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              fullWidth 
            />
            <TextField 
              label="Auctioneer"
              
              value={trailer}
              onChange={(e) => setTrailer(e.target.value)}
              required
              fullWidth 
            />
            <TextField 
              label="Shipping Details"
            
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              fullWidth 
            />
            <TextField 
              label="Terms And Conditions"
              
              value={writers}
              onChange={(e) => setWriters(e.target.value)}
              fullWidth 
            />
            <TextField 
              label="Payment Details"
             
              value={directors}
              onChange={(e) => setDirectors(e.target.value)}
              fullWidth 
            />
            <Button type="submit" variant="contained" size="large" style={{backgroundColor:'#9ba6a5',color:'black'}}>
              Update Movie
            </Button>
          </Box>
        </Card>
      </Container>
    )
  }
  
  export default EditMovie
  