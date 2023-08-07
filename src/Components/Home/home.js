import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import only the necessary FontAwesome icons
import { faGoogle, faFacebook, faSkype } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
    <center>
      <div className="container">
        <div className="heading">Vue Call</div>
        <form className="form">
          <input
            type="text"
            placeholder="Enter Room Id"
            name=""
            id=""
            value={value}
            onChange={handleChange}
            className="input"
          />

          <Button className="button" variant="primary" onClick={handleClick}>Join Room</Button>
        </form>
        <div className="social-account-container">
          <span className="title">Or Video Call Via</span>
          <div className="social-accounts">
          <button className="social-button google">
  <FontAwesomeIcon icon={faGoogle} className="google-icon" style={{ fontSize: '1rem' }} />
</button>
<button className="social-button apple">
  <FontAwesomeIcon icon={faFacebook} className="facebook-icon" style={{ fontSize: '1rem' }} />
</button>
<button className="social-button twitter">
  <FontAwesomeIcon  icon={faSkype} className="skype-icon" style={{ fontSize: '1rem' }} />
</button>
          </div>
        </div>
        <span class="agreement"><a  target="blank" href="https://github.com/SharjeelShah777" >Learn user licence agreement</a></span>
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Body>
            <p>Please enter a valid Room ID.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>OK</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </center>
  );
}

export default Home;
