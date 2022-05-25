import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import DatePicker from "react-datepicker";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

const InputForm = ({ type }) => {
  const { email } = useContext(UserContext);
  const [showCalendar, setShowCalendar] = useState(false);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  const postInfo = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("startDate", startDate);
    data.append("location", location);
    data.append("description", description);
    data.append("admin", email);
    data.append("photo", photo);
    fetch(`/api/${type}`, {
      method: "POST",
      body: data,
    });
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col xs={8}>
            <Form.Group as={Col}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                onInput={(event) => handleChange(event, setTitle)}
              />
              <Form.Label>Location</Form.Label>
              <Form.Control
                onInput={(event) => handleChange(event, setLocation)}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                onInput={(event) => handleChange(event, setDescription)}
              />
              <hr />
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="file"
                onInput={(event) => setPhoto(event.target.files[0])}
              />
              <Button type="submit" onClick={postInfo}>
                Submit
              </Button>
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Date and Time</Form.Label>
            <Form.Control
              onFocus={(event) => setShowCalendar(true)}
              value={startDate.toLocaleString([], {
                weekday: "long",
                month: "numeric",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            />
            {showCalendar ? (
              <DatePicker
                inline
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setShowCalendar(false);
                }}
                showTimeSelect
                showTime={{ use12Hours: true, format: "hh:mm aa" }}
                timeFormat="hh:mm aa"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            ) : null}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default InputForm;
