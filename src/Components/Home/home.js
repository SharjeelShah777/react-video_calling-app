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
    <center>
    <div className="container">
      <div className="heading">Sign In</div>
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

      <Button className="button " variant="primary" onClick={handleClick}>Join Room</Button>
      </form>
      <div className="social-account-container">
        <span className="title">Or Sign in with</span>
        <div className="social-accounts">
          <button className="social-button google">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg></button>
          <button className="social-button apple">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
            </svg>
          </button>
          <button className="social-button twitter">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M13.609 14.223c0 .361-.294.652-.655.652-.358 0-.652-.29-.652-.652v-1.926c0-.362.29-.655.652-.655.361 0 .655.293.655.655v1.926zm3.79-.413c.199-.276.344-.575.43-.889.034-.167.01-.33-.062-.486-.177-.384-.602-.63-1.035-.63-.196 0-.386.034-.56.09-.101.04-.215.083-.35.136-.405.134-.825.22-1.207.22-.376 0-.706-.072-.971-.198-.163-.09-.303-.215-.416-.376a1.076 1.076 0 0 1-.164-.586v-.143c0-.462.379-.838.843-.838.072 0 .143.01.211.03.218.061.419.199.568.397.09.124.15.269.18.434.055.283.08.57.08.862v.23c0 .334-.028.65-.088.948-.08.371-.214.705-.397 1.01-.168.278-.36.495-.579.677-.146.129-.303.222-.476.278a1.07 1.07 0 0 1-.626 0c-.173-.056-.33-.15-.472-.28-.217-.182-.409-.399-.577-.677-.184-.305-.318-.639-.398-1.01-.059-.298-.087-.614-.087-.948v-.23c0-.292.024-.579.08-.862.03-.165.09-.31.18-.434.148-.198.35-.336.568-.397a0.865 0.865 0 0 1 .21-.03c.464 0 .843.376.843.838v.144c0 .214-.07.42-.165.586-.11.161-.252.286-.416.376-.264.126-.594.198-.97.198-.382 0-.802-.086-1.207-.22-.135-.053-.25-.096-.35-.136-.174-.057-.364-.09-.56-.09-.433 0-.858.246-1.035.63-.072.156-.096.319-.062.486.086.314.23.613.43.889.163.263.376.492.645.674.206.15.438.257.698.308.16.032.317.05.471.05.415 0 .83-.129 1.177-.372.103-.082.208-.162.316-.234.136-.088.275-.167.42-.233.248-.112.514-.18.786-.205.21-.019.42-.03.635-.03.207 0 .411.011.615.028.315.025.625.07.935.14a7.426 7.426 0 0 1-1.02 1.777 4.145 4.145 0 0 1-.646.616 3.96 3.96 0 0 1-.967.574 3.648 3.648 0 0 1-1.117.33 3.82 3.82 0 0 1-1.163 0c-.384-.09-.759-.229-1.116-.33a3.96 3.96 0 0 1-.967-.573 4.126 4.126 0 0 1-.646-.617 7.428 7.428 0 0 1-1.019-1.778c.31-.07.62-.116.935-.14.204-.017.41-.028.615-.028.214 0 .424.011.635.03.146.066.285.145.42.233.108.072.213.152.316.234.347.243.763.372 1.177.372.26 0 .51-.018.76-.05.26-.051.492-.158.698-.308.269-.182.482-.41.645-.674.2-.276.344-.576.43-.889z"></path>
            </svg>
          </button>
        </div>
      </div>
      <span className="agreement">Learn user licence agreement</span>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Body>
          <p>Please enter a valid Room ID.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </center>
  );
}

export default Home;
