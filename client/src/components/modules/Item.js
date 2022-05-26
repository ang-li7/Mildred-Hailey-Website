import React from "react";
import { Container } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <Container>
      <h1>{item.title}</h1>
      {item.date ? <p>{item.date}</p> : null}
      {item.location ? <p>{item.location}</p> : null}
      <pre>{item.description}</pre>
    </Container>
  );
};

export default Item;
