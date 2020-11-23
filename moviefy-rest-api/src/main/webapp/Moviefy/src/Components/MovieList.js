import React, { Component } from "react";
import { Card, Button, Table } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: "1",
          movieName: "Prestige",
          genre: "Thriller",
          runningLength: "1.44hr",
          rating: "5",
        },
        {
          id: "2",
          movieName: "Friends",
          genre: "Comedy",
          runningLength: "2hr",
          rating: "4",
        },
        {
          id: "3",
          movieName: "Bad Boys",
          genre: "Comedy Thriller",
          runningLength: "1.5hr",
          rating: "4",
        },
        {
          id: "4",
          movieName: "Breaking Bad",
          genre: "Series",
          runningLength: "10hr",
          rating: "5",
        },
      ],
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.setState({
      movies: [
        ...this.state.movies,
        {
          id: "5",
          movieName: "Bad Boys",
          genre: "Series",
          runningLength: "10hr",
          rating: "5",
        },
      ],
    });
  }

  handleDeleteAction(id) {
    const filterList = this.state.movies.filter((movie) => movie.id != id);
    this.setState({ movies: filterList });
  }
  handleUpdateAction = () => {
    return this.props.history.push("/addMovie");
  };

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
                <th>Rating</th>
                <th>Running Length</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.movieName}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                  <td>{movie.runningLength}</td>
                  <td>
                    <Button
                      onClick={() => this.handleUpdateAction(movie.id)}
                      size="sm"
                      variant="light"
                    >
                      Update
                    </Button>{" "}
                    <Button
                      onClick={() => this.handleUpdateAction.bind()}
                      size="sm"
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button onClick={this.buttonClick} variant="success" type="submit">
            Submit
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

export default MovieList;
