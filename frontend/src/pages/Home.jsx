// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CircularProgress from '@mui/material/CircularProgress';
// import { Container, Grid } from '@mui/material';


// import backgroundImg1 from '../assets/images/one.jpg'

// import backgroundImg2 from '../assets/images/two.jpg'

// import backgroundImg3 from '../assets/images/three.png'

// import backgroundImg4 from '../assets/images/four.png'
// import backgroundImg5 from '../assets/images/five.jpg'
// import backgroundImg6 from '../assets/images/six.jpeg'



// const Home = () => {
//   return (
    
//     <div>
      
//       <style>
//         {`
//          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
//          :root {
//              --primary: #111;
//              --secondary: #A6D1E6;
//              --bg: #F0F8FF;
//              --border: #aaa;
//          }
//          * 
//          {
//              box-sizing: border-box;
//              padding: 0;
//              margin: 0;
//              font-family: 'Poppins', sans-serif;
//              scroll-behavior: smooth ;
//          }
//          .top
//          {
//              display: flex;
//              justify-content: space-between;
//              align-items: center;
//              height: 80px;
//              width: 100%;
//              padding: 0 50px;
//              font-size: 1.5em;
//          }
//          .top .links a
//          {
//              text-decoration: none;
//              color: var(--primary);
//              transition: .5s;
//          }
//          .top .links a:hover
//          {
//              color: var(--secondary);
//          }
//          .top .head
//          {
//              font-weight: 600;
//          }
//          .top .head span
//          {
//              color: var(--secondary);
//          }
//          .top .search i
//          {
//              transition: .5s;
//              padding-right: 10px;
//          }
//          .top .search i:hover
//          {
//              color: var(--secondary);
//              cursor: pointer;
//          }
//          .top .search .hamburger
//          {
//              display: none;
//          }
//          .header
//          {
//              height: 60px;
//              width: 100%;
//              display: flex;
//              justify-content: center;
//              align-items: center;
//              border-top: 1px solid var(--border);
//              border-bottom: 1px solid var(--border);
//              position: sticky;
//              top: 0;
//              z-index: 1000;
//              background: #fff;
//          }
//          .header .navigation
//          {
//              display: flex;
//              justify-content: center;
//              align-items: center;
//              list-style: none;
//              position: relative;
//          }
//          .header .navigation li a
//          {
//              text-decoration: none;
//              color: var(--primary);
//              padding: 5px 40px;
//              transition: .3s ease-in-out;
//              border-bottom: 2px solid #fff;
//              left: 0;
//          }
//          .header .navigation li a:hover
//          {
//              border-bottom: 2px solid var(--secondary);
//          }
//          .banner
//          {
//              margin: 20px 0px;   
//          }
//          .banner swiper-container 
//          {
//              width: 100%;
//              height: 80vh;
//            }
         
//          swiper-slide 
//            {
//              text-align: center;
//              font-size: 18px;
//              background: #fff;
//              display: flex;
//              justify-content: center;
//              align-items: center;
//            }
//          img
//          {
//           height:300px;
//           width:300px;
//          }
//          swiper-slide .imgbx img 
//            {
//              position: relative;
//              display: block;
            
//              object-fit: cover;
//              filter: brightness(50%)
//            }
//          swiper-slide .text
//            {
//              position: absolute;
//              color: #fff;
//              top: 70%;
//            }
//          section
//            {
//              padding: 40px 30px;
//            }
//          .news
//          {
//              text-align: center;
             
//          }
//          .news .titletext
//          {
//              text-align: center;
//              font-size: 2em;
//              padding-bottom: 40px;
//          }
//          .news .titletext span
//          {
//              color: var(--secondary);
//          }
         
//          .container {
//              display: flex;
//              flex-wrap: wrap;
//              justify-content: center;
//              margin-block: 2rem;
//              gap: 2rem;
//              background: var(--bg);
//              border-radius: 20px;
//              padding: 50px 0px;
//            }
           
//            img {
//              max-width: 100%;
//              object-fit: cover;
//            }
           
//            .card {
//              display: flex;
//              flex-direction: column;
//              align-items: center;
//              width: clamp(20rem, calc(20rem + 2vw), 22rem);
//              overflow: hidden;
//              box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
//              border-radius: 1em;
//              background: #fff;
//            }
           
//            .card__body {
//              padding: 1rem;
//              display: flex;
//              flex-direction: column;
//              gap: .5rem;
//            }
           
           
//            .tag {
//              align-self: flex-start;
//              padding: .25em .75em;
//              border-radius: 1em;
//              font-size: .75rem;
//              background: var(--secondary);
//              color: #fff;
//            }
           
//            .tag + .tag {
//              margin-left: .5em;
//            }
           
//            .card__body h4 {
//              font-size: 1.5rem;
//              text-transform: capitalize;
//            }
           
//            .card__footer {
//              display: flex;
//              padding: 1rem;
//              margin-top: auto;
//            }
           
//            .user {
//              display: flex;
//              gap: .5rem;
//            }
           
//            .user__image {
//              border-radius: 50%;
//            }
           
//            .user__info > small {
//              color: #666;
//            }
         
//          .events
//          {
//              text-align: center;
//          }
//          .events .titletext
//          {
//              text-align: center;
//              font-size: 2em;
//              padding-bottom: 40px;
//          }
//          .events .titletext span
//          {
//              color: var(--secondary);
//          }
//          .jobs
//          {
//              text-align: center;
//          }
//          .jobs .titletext
//          {
//              text-align: center;
//              font-size: 2em;
//              padding-bottom: 40px;
//          }
//          .jobs .titletext span
//          {
//              color: var(--secondary);
//          }   
//          .register
//          {
//              text-align: center;
//              border-top: 1px solid var(--border);
//          }
//          .register .titletext
//          {
//              text-align: center;
//              font-size: 2em;
//              padding-bottom: 40px;
//          }
//          .register .titletext span
//          {
//              color: #bbe9db;
//              background:#5F9EA0;
//              border-radius: 5px;
//          }  
//          .form
//          {
//              display: flex;
//              justify-content: center;
//              align-items: center;
//              flex-wrap: wrap;
//              gap: 40px;
//              background: transprent;
//              padding: 30px;
//              width: 700px;
//              margin: auto;
//              border-radius: 20px;
//              height: auto;
//              border:1px solid #bbe9db;
//          }
//          .form .formimg img
//          {
//              width: 350px;
//              border-radius: 25px;
//          }
//          .form .formcontent
//          {
//              display: flex;
//              justify-content: center;
//              align-items: center;
//              flex-direction: column;
//              gap: 10px;
//          }
//          .form .formcontent input
//          {
//              border: none;
//              padding: 10px 30px;
//              border-radius: 20px;
//          }
//          .strip
//          {
//              background: var(--secondary);
//              width: 100%;
//              height: 10px;
//              display: flex;
//              justify-content: center;
//              align-items: center;
//              flex-direction: column;
//          }
//          .strip h1
//          {
//              color: #fff;
//              font-weight: 300;
//          }
//          .strip .icons a{
//              color: #fff;
//          }
//          .alert {
//              position: fixed;
//              top: 5%;
//              right: 2%;
//              background: var(--secondary);
//              color: #fff;
//              font-weight: 800;
//              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
//              padding: 20px;
//              width: 300px;
//              height: 100vh;
//              border-radius: 10px;
//              transform: translateX(150%);
//              transition: transform 0.3s ease-in-out;
//              z-index: 2;
//          }
//          .alert .navigation1
//          {
//              display: flex;
//              flex-direction: column;
//              gap: 70px;
//              list-style: none;
//              text-align: center;
//          }
//          .alert .navigation1 li a
//          {
//              text-decoration: none;
//              color: #fff;
//          }
//          .alert p {
//              margin: 30px;
//              letter-spacing: 1px;
//          }
         
//          .alert i {
//              display: flex;
//              justify-content: flex-end;
//              font-size: 30px;
//              cursor: pointer;
//              color: #fff;
//          }
//          .register .form .btn
//          {
//              margin-top: 10px;
//              border: none;
//              padding: 10px 30px;
//              background: #fff;
//              border-radius: 25px;
//              cursor: pointer;
//              transition: .5s;
//          }
         
//          @media(max-width: 911px){
//              .header
//              {
//                  display: none;
//              }
//              .top .search .hamburger
//              {
//                  display: block;
//              }   
//              .register .form
//              {
//                  margin: 0 0;
//              }
//              swiper-slide .imgbx img {
//                  height: 100vh;
//              }
//              .top .search{
//                  display: flex;
//                  justify-content: space-between;
//              }
//              .top
//              {
//                  position: sticky;
//                  top: 0;
//                  z-index: 2;
//                  background: #fff;
//                  width: 100%;
//              }
//              .banner
//              {
//              margin: 0px 0px;   
//              }
//              .form
//              {
//                  width: 100%;
//                  display: flex;
//                  justify-content: center;
//                  align-items: center;
//              }
//          }
          
//         `}
//       </style>
      

//       {/* News Section */}
//       <section className="news" id="news">
//         {/* News cards go here */}
//         <div class="titletext">
//             <h1> <span>Products</span></h1>
//         </div>
//         <div class="container">
//             <div class="card">
//               <div class="card__header">
//                 <img src={backgroundImg1} alt="card__image" class="card__image" width="600"></img>
//               </div>
//               <div class="card__body">
                
//                 <h4>Anscient Weapons</h4>
//                 <p>655330/-</p>
//               </div>
//               <div class="card__footer">
//                 <div class="user">
                 
//                   <div class="user__info">
//                     <h5>User 1</h5>
//                     <small>2h ago</small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="card">
//               <div class="card__header">
//                 <img src={backgroundImg2}  alt="card__image" class="card__image" width="600"></img>
//               </div>
//               <div class="card__body">
                
//                 <h4>Silver Bol</h4>
//                 <h5>Silver Bol</h5>
//                 <p>23454/-</p>
//               </div>
//               <div class="card__footer">
//                 <div class="user">
                 
//                   <div class="user__info">
//                     <h5>User 2</h5>
//                     <small>Yesterday</small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="card">
//               <div class="card__header">
//                 <img src={backgroundImg3}  alt="card__image" class="card__image" width="600"></img>
//               </div>
//               <div class="card__body">
                
//                 <h4>A lamp</h4>
//                 <p>6665/-</p>
//               </div>
//               <div class="card__footer">
//                 <div class="user">
                  
//                   <div class="user__info">
//                     <h5>User 3</h5>
//                     <small>2d ago</small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="card">
//                 <div class="card__header">
//                   <img src={backgroundImg4}  alt="card__image" class="card__image" width="600"></img>
//                 </div>
//                 <div class="card__body">
                  
//                   <h4>Gold Bangle</h4>
//                   <p>45589445/-</p>
//                 </div>
//                 <div class="card__footer">
//                   <div class="user">
                   
//                     <div class="user__info">
//                       <h5>User 4</h5>
//                       <small>2h ago</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="card">
//                 <div class="card__header">
//                   <img src={backgroundImg5}  alt="card__image" class="card__image" width="600" ></img>
//                 </div>
//                 <div class="card__body">
                 
//                   <h4>Show </h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
//                 </div>
//                 <div class="card__footer">
//                   <div class="user">
                   
//                     <div class="user__info">
//                       <h5>User 5</h5>
//                       <small>2h ago</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="card">
//                 <div class="card__header">
//                   <img src={backgroundImg6}  alt="card__image" class="card__image" width="600"></img>
//                 </div>
//                 <div class="card__body">
                  
//                   <h4>Hand Paintongs</h4>
//                   <p>Price 123400/-</p>
//                 </div>
//                 <div class="card__footer">
//                   <div class="user">
                   
//                     <div class="user__info">
//                       <h5>User 6</h5>
//                       <small>2h ago</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//           </div>
//       </section>

      
      

//       {/* Register Section */}
//       <section className="register" id="register">
//         {/* Registration form goes here */}
//         <div class="titletext">
//             <h1><span>Register Now</span></h1>
//         </div>
//             <div class="form">
//                 <div class="formimg">
                   
//                 </div> 
//                 <div class="formcontent">
//                     <input type="text" placeholder="Username"></input>
//                     <input type="email" placeholder="Email"></input>
//                     <button class="btn">Submit</button>
//                 </div>
//             </div>
       
//       </section>
//     </div>
//   );
// };

// export default Home;
import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Container, IconButton, InputBase, Typography } from '@mui/material';
import { Search as SearchIcon, Visibility as VisibilityIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styled } from '@mui/system';

import AuthContext from '../context/AuthContext';


const SearchBar = styled(InputBase)({
  backgroundColor: '#D1E5DF',
  color: 'black',
  '& input': {
    color: 'black', // Text color
    borderRadius: '30px'

  },
  '& .MuiOutlinedInput-root': {
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff', // Border color on hover
    },
  },
});


const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => { 
    console.log({ user });

    if (!user) {
      navigate("/login");
    } else {
      getMoviesList();
    }
  }, [user]);

  const getMoviesList = async () => {
    try {
      console.log(user?.accessToken);
      const response = await axios.get("/api/movies/get-user-movies", {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      console.log("Movies data:", response.data);
      setMovies(response.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      alert("Failed to fetch movies. Please try again later.");
      setLoading(false);
    }
  };
  
  const deleteMovie = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/api/movies/delete-movie/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      });
      if (res.data?.success) {
        getMoviesList();
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return  (
    <Container sx={{ mt: 2 }} maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" color="black"></Typography>
        <Box display="flex" alignItems="center">
          <SearchBar
            placeholder="Search product"
            value={searchInput}
            onChange={handleSearchInputChange}
            startAdornment={<SearchIcon />}
          />
        </Box>
      </Box>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      ) : (
        <Box display="flex" flexWrap="wrap" gap={10}>
          {filteredMovies.map(movie => (
            <Box key={movie._id} width="300px" boxShadow={2} borderRadius={8} p={2} bgcolor="#D1E5DF">
              <Box display="flex" justifyContent="center">
                <img src={movie.image} alt={movie.title} style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }} />
              </Box>
              <Typography variant="h6" align="center" mb={1}>{movie.name}</Typography>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle1">Title :</Typography>
                <Typography style={{color:"black"}}>{movie.title}</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle1">Description:</Typography>
                <Typography style={{color:"black", padding:"0"}}>{movie.description}</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle1">Auctioneer :</Typography>
                <Typography style={{color:"black"}}>{movie.trailer}</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle1">Starting Price :</Typography>
                <Typography style={{color:"black"}}>{movie.rating}</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle1">Shipping Details :</Typography>
                <Typography style={{color:"black"}}>{movie.genre}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Home;
