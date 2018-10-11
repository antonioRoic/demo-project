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
  }

  handleChangeType = (event) => {
    const string = event.target.value;
    var p = [];
    mov.movies.forEach((item, index) => {
      var obj = item;
      if(obj === undefined) return;
      if(string === obj.type) { p[index] = obj; }
    });
    /*for(var i = 0; i < mov.movies.length; i++) {
      var obj = mov.movies[i];
      if(string === obj.type) { p[i] = obj; }
    }*/
    this.setState({ movies: p });
    this.setState({ help: p });
};

  handleChangeRated = (event) => {
    var h = [];
    if(this.state.index === 2) h = this.state.movies;
    else h = this.state.help;
    const string = event.target.value;
    var p = [];
    h.forEach((item, index) => {
      var obj = item;
      if(obj === undefined) return;
      if(string === obj.rated) { p[index] = obj; } 
    });
  /*for(var i = 0; i < h.length; i++) {
      var obj = h[i];
      if(obj === undefined) continue;
      if(string === obj.rated) { p[i] = obj; } 
    }*/
      this.setState({ help: p });
      this.setState({ index: 2 });
};

  handleChangeGenre = (event) => {
    var h = [];
    if(this.state.index === 1) h = this.state.movies;
    else h = this.state.help;
    const string = event.target.value;
    var p = [];
    h.forEach((item, index) => {
      var obj = item;
      if(obj === undefined) return;
      obj.genre.forEach((items) => {
        var sec = items;
        if(sec === undefined) return;
        if(string === sec) { p[index] = obj; }
      });
    });
  /*for(var i = 0; i < h.length; i++) {
      var obj = h[i];
      if(obj === undefined) continue;
      for(var j = 0; j < obj.genre.length; j++) {
        var sec = obj.genre[j];
        if(sec === undefined) continue;
        if(string === sec) { p[i] = obj; } 
      }
    }*/
      this.setState({ help: p });
  };



  render() {
    return (
      <div className="App-container">
      <div className="side">
      <h6>(First select)</h6>
      <h3>Type</h3>
      <ul>
      <label className="container">Movies
        <input type="radio" name="radio1" value={"movie"} onClick={this.handleChangeType}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">Series
        <input type="radio" name="radio1" value={"series"} onClick={this.handleChangeType}></input>
        <span className="checkmark"></span>
      </label>
      </ul>
      <br></br>
      <hr></hr>
      <h6>(Then select)</h6>
      <h3>Rated</h3>
      <ul>
      <label className="container">G
        <input type="radio" name="radio2" value={"G"} onClick={this.handleChangeRated}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">PG
        <input type="radio" name="radio2" value={"PG"} onClick={this.handleChangeRated}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">PG-13
        <input type="radio" name="radio2" value={"PG-13"} onClick={this.handleChangeRated}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">R
        <input type="radio" name="radio2" value={"R"} onClick={this.handleChangeRated}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">NC-17
        <input type="radio" name="radio2" value={"NC-17"} onClick={this.handleChangeRated}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">N/A
        <input type="radio" name="radio2" value={"N/A"} onClick={this.handleChangeRated}></input>
        <span className="checkmark"></span>
      </label>
        <label className="container">TV-14
        <input type="radio" name="radio2" value={"TV-14"} onClick={this.handleChangeRated}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">TV-MA
        <input type="radio" name="radio2" value={"TV-MA"} onClick={this.handleChangeRated}></input>
        <span className="checkmark"></span>
      </label>
      <label className="container">TV-Y7
        <input type="radio" name="radio2" value={"TV-Y7"} onClick={this.handleChangeRated}></input>
        <span className="checkmark"></span>
      </label>
      </ul>
      <br></br>
      <hr></hr>
      <h6>(And, finally, select)</h6>
      <h3>Genre</h3>
      <ul>
      <label className="containers">Action
        <input type="checkbox" value={"Action"} onClick={this.handleChangeGenre}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Adventure
        <input type="checkbox" value={"Adventure"} onClick={this.handleChangeGenre}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Comedy
      <input type="checkbox" value={"Comedy"} onClick={this.handleChangeGenre}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Crime
      <input type="checkbox" value={"Crime"} onClick={this.handleChangeGenre}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Drama
        <input type="checkbox" value={"Drama"} onClick={this.handleChangeGenre}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Family
        <input type="checkbox" value={"Family"} onClick={this.handleChangeGenre}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Fantasy
        <input type="checkbox" value={"Fantasy"} onClick={this.handleChangeGenre}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Horror
        <input type="checkbox" value={"Horror"} onClick={this.handleChangeGenre}></input>
        <span className="checkmarks"></span>
      </label>
      <label className="containers">Romance
        <input type="checkbox" value={"Romance"} onClick={this.handleChangeGenre}></input>
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