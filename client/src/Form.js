import React, { useState } from "react";
import axios from "axios";

const Form = (props) =>{
    const [movie, setMovie] = useState({
//don't include ID here, it'll generate
        title: '',
        director: '',
        metascore: '',
        stars: []
      });

const handleChanges = e =>{
    setMovie({...movie, [e.target.name]: e.target.value})
}

// const updateMovie = (id)=>{
//     axios.put(`http://localhost3000/movie/${id}`, movie)
//     .then(res=>{
//         setMovie(res.data);
//         console.log(movie)
//     })
// }

const handleClick = e =>{
    axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
    .then(res => {
        let newMovieList = props.movies.map(newMovie =>{
            if (newMovie.id === movie.id) {
                return res.data;
            }else{
                return newMovie;
            }
        });
        props.setMovies(newMovieList);
        props.history.push(`/movies/${movie.id}`);
        setMovie(movie) //this could be wrong
    })
    .catch(error => console.log("error from put axios", error))
};

    return(
<div>
    <form>
    Title: <input type="text" name="title" value={movie.title} onChange={handleChanges} />
    Director: <input type="text" name="director" value={movie.director} onChange={handleChanges} />
    Metascore: <input type="text" name="metascore" value={movie.metascore} onChange={handleChanges} />
    Stars: <input type="text" name="stars" value={movie.stars} onChange={handleChanges} />

    <button type="submit">UPDATE MOVIE</button>
    </form>
</div>
    );
}

export default Form;
