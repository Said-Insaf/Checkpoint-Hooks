import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import movie7 from "../../Assests/movie7.jpg";
const ModalAddMovie = ({ addMovie }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [Rating, setRating] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("title" + title);
  console.log("Rating" + Rating);
  return (
    <div>
      <span variant="primary" onClick={handleShow}>
        [ + ]
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Movie name.."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Movie Rating.."
              min="1"
              max="5"
              onChange={(e) => setRating(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addMovie({
                id: Math.random(),
                title,
                rating: Rating,
                img: movie7,
              });
              handleClose();
            }}
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModalAddMovie;
