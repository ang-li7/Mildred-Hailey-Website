import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import DatePicker from "react-datepicker";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

const InputForm = ({ type }) => {
  const { email } = useContext(UserContext);
  const [showCalendar, setShowCalendar] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  const checkImage = (file) => {
    if (
      file.size < 10000000 &&
      (file.type === "image/jpeg" || file.type === "image/png")
    ) {
      setPhoto(file);
    } else {
      alert("Image must be a JPEG or PNG and must be less than 10MB in size");
    }
  };

  const postInfo = (event) => {
    const data = new FormData();
    data.append("title", title);
    data.append("date", date);
    data.append("location", location);
    data.append("description", description);
    data.append("admin", email);
    data.append("photo", photo);
    fetch(`/api/${type}`, {
      method: "POST",
      body: data,
    }).then((resp) => {});
  };

  return (
    <Container className="mx-auto">
      <Form>
        <Col>
          <Form.Group as={Col}>
            <Form.Label>Title</Form.Label>
            <Form.Control onInput={(event) => handleChange(event, setTitle)} />
            {type === "Events" ? (
              <>
                <Form.Label>Date and Time</Form.Label>
                <Form.Control
                  onFocus={(event) => setShowCalendar(true)}
                  value={date.toLocaleString([], {
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
                    selected={date}
                    onChange={(date) => {
                      setDate(date);
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
              </>
            ) : null}

            <Form.Label>Location</Form.Label>
            <Form.Control
              onInput={(event) => handleChange(event, setLocation)}
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              onInput={(event) => handleChange(event, setDescription)}
            />
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="file"
              onInput={(event) => checkImage(event.target.files[0])}
            />
          </Form.Group>
        </Col>

        <hr />
        <Button
          className="shadow-none d-grid gap-2 col-6 mx-auto"
          onClick={postInfo}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default InputForm;
