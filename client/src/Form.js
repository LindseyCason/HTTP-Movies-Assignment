import React, { useState } from "react";
import axios from "axios";

const UpdateMovie = () =>{
    const [movie, setMovie] = useState({
        id: "",
        title: '',
        director: '',
        metascore: '',
        stars: []
      });
const handleChanges = e =>{
    setMovie({...movie, [e.target.name]: e.target.value})

}

const updateMovie = (id)=>{
    axios.put(`http://localhost3000/movie/${id}`, movie)
    .then(res=>{
        console.log("response from inside form axios put", res);
    })
}

const handleClick = e =>{
    updateMovie();
    //here you need to route back to the homepage to see updated movies.
}

    return(
<div>
    <form>
    Title: <input type="text" name="title" value={movie.title} onChange={handleChanges} />
    Director: <input type="text" name="director" value={movie.director} onChange={handleChanges} />
    Metascore: <input type="text" name="metascore" value={movie.metascore} onChange={handleChanges} />
    Stars: <input type="text" name="stars" value={movie.stars} onChange={handleChanges} />

    <button onClick={handleClick}>UPDATE MOVIE</button>
    </form>
</div>
    );
}

export default UpdateMovie;
