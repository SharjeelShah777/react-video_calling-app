import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button component
import Modal from 'react-bootstrap/Modal'; // Import Bootstrap Modal component
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home() {
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.trim() === "") {
      setShowModal(true);
    } else {
      navigate(`/room/${value}`);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <input
        type="text"
        placeholder="Enter Room Id"
        name=""
        id=""
        value={value}
        onChange={handleChange}
        className=""
      />

      <Button className="button " variant="primary" onClick={handleClick}>Join Room</Button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Body>
          <p>Please enter a valid Room ID.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
