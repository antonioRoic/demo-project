import React, { Component } from 'react';
import './css/App.css';
import Data from './db.json';
import Popup from 'reactjs-popup';

const mov = Data;

class App extends Component {
    constructor(props) {
    super(props);

    this.state = { 
      movies: mov.movies,
      help: mov.movies,
      index: 1,
    };

    this.handleChangesss = this.handleChangesss.bind(this);
    this.handleChangess = this.handleChangess.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChangesss(event) {
    const string = event.target.value;
    var p = [];
    for(var i = 0; i < mov.movies.length; i++) {
      var obj = mov.movies[i];
      if(string === obj.type) { p[i] = obj; }
    }
    this.setState({ movies: p });
    this.setState({ help: p });
}

  handleChanges(event) {
    var h = [];
    if(this.state.index === 2) h = this.state.movies;
    else h = this.state.help;
    const string = event.target.value;
    var p = [];
    for(var i = 0; i < h.length; i++) {
      var obj = h[i];
      if(obj === undefined) continue;
      if(string === obj.rated) { p[i] = obj; } 
    }
      this.setState({ help: p });
      this.setState({ index: 2 });
}

  handleChangess(event) {
    var h = [];
    if(this.state.index === 1) h = this.state.movies;
    else h = this.state.help;
    const string = event.target.value;
    var p = [];
    for(var i = 0; i < h.length; i++) {
      var obj = h[i];
      if(obj === undefined) continue;
      for(var j = 0; j < obj.genre.length; j++) {
        var sec = obj.genre[j];
        if(sec === undefined) continue;
        if(string === sec) { p[i] = obj; } 
      }
    }
      this.setState({ help: p });
  }



  render() {
    return (
      <div className="App-container">
      <div className="side">
      <h3>Type</h3>
      <ul>
      <label className="container">Movies
        <input type="radio" name="radio1" value={"movie"} onClick={this.handleChangesss}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">Series
        <input type="radio" name="radio1" value={"series"} onClick={this.handleChangesss}></input>
        <span className="checkmark"></span>
      </label>
      </ul>
      <h3>Rated</h3>
      <ul>
      <label className="container">G
        <input type="radio" name="radio" value={"G"} onClick={this.handleChanges}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">PG
        <input type="radio" name="radio" value={"PG"} onClick={this.handleChanges}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">PG-13
        <input type="radio" name="radio" value={"PG-13"} onClick={this.handleChanges}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">R
        <input type="radio" name="radio" value={"R"} onClick={this.handleChanges}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">NC-17
        <input type="radio" name="radio" value={"NC-17"} onClick={this.handleChanges}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">N/A
        <input type="radio" name="radio" value={"N/A"} onClick={this.handleChanges}></input>
        <span className="checkmark"></span>
      </label>
        <label className="container">TV-14
        <input type="radio" name="radio" value={"TV-14"} onClick={this.handleChanges}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">TV-MA
        <input type="radio" name="radio" value={"TV-MA"} onClick={this.handleChanges}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">TV-Y7
        <input type="radio" name="radio" value={"TV-Y7"} onClick={this.handleChanges}></input>
        <span className="checkmark"></span>
      </label>
      </ul>
      
      <h3>Genre</h3>
      <ul>
      <label className="containers">Action
        <input type="checkbox" value={"Action"} onClick={this.handleChangess}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Adventure
        <input type="checkbox" value={"Adventure"} onClick={this.handleChangess}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Comedy
      <input type="checkbox" value={"Comedy"} onClick={this.handleChangess}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Crime
      <input type="checkbox" value={"Crime"} onClick={this.handleChangess}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Drama
        <input type="checkbox" value={"Drama"} onClick={this.handleChangess}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Family
        <input type="checkbox" value={"Family"} onClick={this.handleChangess}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Fantasy
        <input type="checkbox" value={"Fantasy"} onClick={this.handleChangess}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Horror
        <input type="checkbox" value={"Horror"} onClick={this.handleChangess}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Romance
        <input type="checkbox" value={"Romance"} onClick={this.handleChangess}></input>
        <span className="checkmarks"></span>
      </label>
      </ul>
      </div>

      <div className="App">
          <h1 className="App-title">What should I watch?</h1>
          {this.state.help.map((movie, index) => (
           <Popup
           trigger={ <div className="plot">
                       <h2>{movie.title} ({movie.year})</h2>
                       <p>{movie.plot}</p>
                     </div>
                   }
           modal
           contentStyle={{ width: "900px", border: "solid" }}
           >
           {close => (
            <div className="object-container">
            <div>
              <img src={movie.poster} alt="Sorry" />
            </div>
            <div className="object">
              <h2>{movie.title}</h2>
              <p>Plot: {movie.plot}</p>
              <p>Rated: {movie.rated}</p>
              <p>Released: {movie.released}</p>
              <p>Runtime: {movie.runtime}</p>
              <p>Genre: {movie.genre}</p>
              <p>Director: {movie.director}</p>
              <p>Writer: {movie.writer}</p>
              <p>Actors: {movie.actors}</p>
              <p>Language: {movie.language}</p>
              <p>Country: {movie.country}</p>
              <p>Awards: {movie.awards}</p>
              <p>Metascore: {movie.metascore}</p>
              <p>Rating: {movie.rating}</p>
              <p>Votes: {movie.votes}</p>
              <p>ImdbID: {movie.imdbID}</p>
              <p>Type: {movie.type}</p>
            </div>
            </div>
            )}
            </Popup>
          ))
         }
      </div>
     </div>
   );
 }
}

export default App;