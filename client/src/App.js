import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import Form from "./Form"


const App = () => {
  const [savedList, setSavedList] = useState([]);  
  
  const [movies, setMovies] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
  // moving this to the app page so props can be passed down through the components

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={props=>{
        return <MovieList {...props} movies={movies} setMovies={setMovies} />
        //adding properties movies and setMovies so they can be used in the MovieList file later on.
      }} />
      

      <Route
        path='/update-movie/:id'
        render={props => {
          return <Form {...props} movies={movies} setMovies={setMovies} />;
        }}
      />


      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} movies={addToSavedList} addToSavedList={addToSavedList} />;
          //addToSavedList={addToSavedList} and movies={movies} is a prop that you can use in the future where this is imported.
        }}
      />
    </>
  );
};

export default App;

//this page should be complete