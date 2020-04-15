import React, { Component } from "react";
import { Card, Jumbotron, Table } from "react-bootstrap";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          movieName: "Prestige",
          genre: "Thriller",
          runningLength: "1.44hr",
          rating: "5",
        },
        {
          movieName: "Friends",
          genre: "Comedy",
          runningLength: "2hr",
          rating: "4",
        },
        {
          movieName: "Bad Boys",
          genre: "Comedy Thriller",
          runningLength: "1.5hr",
          rating: "4",
        },
        {
          movieName: "Breaking Bad",
          genre: "Series",
          runningLength: "10hr",
          rating: "5",
        },
      ],
    };
  }

  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Movie List</Card.Header>
        <Card.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Movie Name</th>
                <th>Genre</th>
                <th>Runnig Lenght</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr>
                  <td>{movie.movieName}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                  <td>{movie.runningLength}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}

export default MovieList;
