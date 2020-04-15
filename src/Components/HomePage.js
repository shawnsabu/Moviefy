import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Route } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <>
        <Router>
          <NavigationBar />
          <Container>
            <Row>
              <Col lg={14} style={{ marginTop: "20px", width: "80%" }}>
                <Route path="/" exact>
                  <Welcome />
                </Route>
                <Route path="/movies">
                  <AddMovie />
                </Route>
                <Route path="/addMovie">
                  <MovieList />
                </Route>
              </Col>
            </Row>
          </Container>
        </Router>
      </>
    );
  }
}

export default HomePage;
