import React, { Component } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

class AddMovie extends Component {
  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Add Movie Here</Card.Header>
        <Form>
          <Card.Body>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    className={"bg-dark text-white"}
                    placeholder="First name"
                  />
                </Col>
                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    className={"bg-dark text-white"}
                    placeholder="Last name"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Fathers name</Form.Label>
                  <Form.Control
                    type="text"
                    className={"bg-dark text-white"}
                    placeholder="Fathers name"
                  />
                </Col>
                <Col>
                  <Form.Label>Mothers name</Form.Label>
                  <Form.Control
                    type="text"
                    className={"bg-dark text-white"}
                    placeholder="Mothers name"
                  />
                </Col>
              </Row>
            </Form.Group>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
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
