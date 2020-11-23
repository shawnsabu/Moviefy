import React, { Component } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      genre: "",
      rating: "",
      runningLength: "",
    };
    this.handleFormReset = this.handleFormReset.bind(this);
  }

  defaultState = {
    movieName: "",
    genre: "",
    rating: "",
    runningLength: "",
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };
  handleFormReset() {
    this.setState(this.defaultState);
  }

  handleComponentChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Add Movie Here</Card.Header>
        <Form onSubmit={this.handleFormSubmit} onReset={this.handleFormReset}>
          <Card.Body>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Movie Name</Form.Label>
                  <Form.Control
                    type="text"
                    className={"bg-dark text-white"}
                    placeholder="Movie Name"
                    name="movieName"
                    value={this.state.movieName}
                    onChange={this.handleComponentChange}
                  />
                </Col>
                <Col>
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    className={"bg-dark text-white"}
                    placeholder="Genre"
                    name="genre"
                    value={this.state.genre}
                    onChange={this.handleComponentChange}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    type="text"
                    className={"bg-dark text-white"}
                    placeholder="Rating"
                    name="rating"
                    value={this.state.rating}
                    onChange={this.handleComponentChange}
                  />
                </Col>
                <Col>
                  <Form.Label>Runnig Length</Form.Label>
                  <Form.Control
                    type="text"
                    className={"bg-dark text-white"}
                    placeholder="Runnig Length"
                    name="runningLength"
                    value={this.state.runningLength}
                    onChange={this.handleComponentChange}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button variant="warning" type="reset">
              Reset
            </Button>{" "}
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}

export default AddMovie;
