import React from "react";
import Preview from "../modules/Preview";
import { Row, Col, Container } from "react-bootstrap";
import home from "../../mildred-hailey.jpg";
const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Preview type="Events" />
        </Col>
        <Col>
          <Preview type="Updates" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
