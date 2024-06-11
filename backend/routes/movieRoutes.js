// MOVIES ROUTES

import express from 'express'
import verifyJWT from '../middleware/verifyJWT.js';
import mongoose from 'mongoose';
import multer from 'multer'
import Movie from '../models/movieModel.js';

import { randomUUID } from 'crypto'

const router = express.Router()

const localStorageForImage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "uploads")
    },
    filename(req, file, cb) {
        cb(null, randomUUID()+".jpeg")
    }
})

const upload = multer({ storage: localStorageForImage })

// PUBLIC
// GET
// Get all movies
router.get("/", async (req, res) => {
    console.log("Get movies called.")
    try {
        const movies = await Movie.find({})
        res.status(200).json({
            success: true,
            message: "Movies fetched successfully.",
            data: movies
        })

    } catch (err) {
        console.error({err})
        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
})

// PRIVATE
// GET
// Get user movies
router.get("/get-user-movies", verifyJWT, async (req, res) => {
    console.log("Get user movies called.")
    try {
        const movies = await Movie.find({ user: req.user._id })
        res.status(200).json({
            success: true,
            message: "Movies fetched successfully.",
            data: movies
        })

    } catch (err) {
        console.error({err})
        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
})


// PUBLIC
// GET
// Get movies details
router.get("/get-details/:id", async (req, res) => {
    console.log("Get movies details called.")
    
    const { id  } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid movie Id.",
            data: null
        }) 
    }

    try {
        const movie = await Movie.findById(id)

        if(!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found",
                data: null
            }) 
        }

        res.status(200).json({
            success: true,
            message: "Movie details fetched successfully.",
            data: movie
        })

    } catch (err) {
        console.error({err})
        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
})

router.post("/", verifyJWT,  upload.single('image'), async (req, res) => {
   const { title, description, rating, trailer, year, genre, writers, directors  } = req.body
   console.log(req.file)

//    if(!title || !description || !req.file.path || !rating || !trailer || !year) {
    if(!title || !description || !rating || !trailer || !year) {

    return res.status(400).json({
        success: false,
        message: "Please fill all required fields."
    })
   }
    console.log(req.user)

   const genreArray = genre ? genre.split(",") : []
//    console.log({genreArray})
   const directorsArray = directors ? directors.split(",") : []
   const writersArray = writers ? writers.split(",") : []

   try {
       const newMovie = await Movie.create({
            user: req.user._id,
            title,
            description,
            image: `/${req.file.path}`,
            rating,
            trailer,
            year,
            genre: genreArray,
            directors: directorsArray,
            writers: writersArray
       })

       res.status(201).json({
            success: true,
            message: "Movie added successfully.",
            data: newMovie
        })

   } catch (err) {
        console.error({err})
        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
   }
})


router.patch("/update-movie", verifyJWT,  upload.single('image'), async (req, res) => {
    const { id, title, description, rating, trailer, year, genre, writers, directors  } = req.body
 
    if(!id || !title || !description || !rating || !trailer || !year) {
     return res.status(400).json({
         success: false,
         message: "Please fill all required fields."
     })
    }
 
    try {
        const movie = await Movie.findById(id)

        if(!movie) {
            res.status(404).json({
                success: false,
                message: "Movie not data.",
                data: null
            })
        }

        const genreArray = genre ? genre.split(",") : []
        const directorsArray = directors ? directors.split(",") : []
        const writersArray = writers ? writers.split(",") : []

        movie.title = title 
        movie.description = description,
        movie.rating = rating,
        movie.trailer = trailer,
        movie.year = year,
        movie.genre = genreArray,
        movie.directors = directorsArray
        movie.writers = writersArray
        movie.image = req?.file?.path ? `/${req.file.path}` : movie?.image

        const udpatedMovie = await movie.save()

        res.status(200).json({
             success: true,
             message: "Movie updatd successfully.",
             data: udpatedMovie
         })
 
    } catch (err) {
         console.error({err})
         res.status(500).json({
             success: false,
             message: "Internal Server Error."
         })
    }
 })


// PRIVATE
// DELETE
// Delete movie by id
router.delete("/delete-movie/:id", verifyJWT, async (req, res) => {
    console.log("Delete movie called.")
    
    const { id  } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid movie Id.",
            data: null
        }) 
    }

    try {
        const movie = await Movie.findById(id)

        if(!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found",
                data: null
            }) 
        }

        // Check if movie belongs to user
        if(movie.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized!",
                data: null
            }) 
        }

        await Movie.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Movie deleted successfully.",
            data: null
        })

    } catch (err) {
        console.error({err})
        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
})


export default router