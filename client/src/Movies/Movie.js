import React from "react";
import { Route } from 'react-router-dom'
import axios from "axios";
import MovieCard from "./MovieCard";
import Form from "../Form"

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      id:""
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
      console.log(this.state.movie)
  };




  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };


  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
       
       {/* BUTTON GOES HERE */}
        {/* <div className="update-button" onClick={"/update-movie/:id"}>Update</div> */}
<Route path="/update-movie/:id" component={Form}>UPDATE</Route>


    
      </div>
    );
  }
}
