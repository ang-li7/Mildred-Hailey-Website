import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../UserContext";
import "./Preview.css";
import InputForm from "./InputForm";
import Item from "./Item";
import { Container, Accordion, Button } from "react-bootstrap";

const Preview = ({ type }) => {
  const { email, verified } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`/api/${type}`).then((res) => {
      res.json().then((res) => {
        setItems(res);
      });
    });
  }, []);

  return (
    <Container className=" Preview-container bg-success p-2 text-dark bg-opacity-10 border border-success">
      <h1>{type}</h1>
      <hr />
      {email && verified ? (
        <Container>
          {showForm ? (
            <>
              <Button
                onClick={(event) => setShowForm(false)}
                variant="outline-danger"
                className="shadow-none d-grid gap-2 col-6 mx-auto"
              >
                Cancel
              </Button>
              <InputForm type={type} />
            </>
          ) : (
            <Button
              className="shadow-none d-grid gap-2 col-6 mx-auto"
              onClick={(event) => setShowForm(true)}
            >
              Create New {type.slice(0, -1)}
            </Button>
          )}
        </Container>
      ) : null}

      {items.map((item) => {
        return <Item item={item} />;
      })}
    </Container>
  );
};

export default Preview;
