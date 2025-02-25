import React from 'react';
import Button from 'react-bootstrap/Button';


export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
          <hr />
        </div>
        <div className="movie-title" as="h2">
          <span className="label"><strong>Title: {''}</strong></span>
          <span className="value">{movie.Title}{''}</span>
        </div>
        <hr />
        <div className="movie-description">
          <span className="label"><strong>Synopsis: {''}</strong></span>
          <span className="value">{movie.Description}{''}</span>
        </div>
        <hr />
        <div className="movie-genre">
          <span className="label"><strong>Genre: {''}</strong></span>
          <span className="value">{movie.Genre.Name}{''}</span>
        </div>
        <hr />
        <div className="movie-director">
          <span className="label"><strong>Director: {''}</strong></span>
          <span className="value">{movie.Director.Name}{''}</span>
        </div>
        <hr />
        <div className="director-bio">
          <span className="label"><strong>Bio: {''}</strong></span>
          <span className="value">{movie.Director.Bio}{''}</span>
        </div>
        <hr />
        <div className="director-birth">
          <span className="label"><strong>Birth: {''}</strong></span>
          <span className="value">{movie.Director.Birth}{''}</span>
        </div>
        <hr />
        <div>
          <Button onClick={() => { onBackClick(null); }} variant="success">Back</Button>
        </div>
      </div>
    );
  }
}
