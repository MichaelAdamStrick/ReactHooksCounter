import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CountContext } from "./Context";
const CounterModal = (props) => {
  const [modal, setModal] = useState(false);
  const { state, dispatch } = React.useContext(CountContext);
  const { GlobalCount } = state;

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  const incrementNum = () => {
    dispatch({ type: "increment" });
  };
  const decNum = () => {
    dispatch({ type: "decrement" });
  };
  const resetNum = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <Button color="danger" onClick={toggle} className="p-20">
        counter
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Modal title
        </ModalHeader>
        <ModalBody>
          <h1>Counter</h1>
          <h2>{GlobalCount}*</h2>
          <button onClick={incrementNum}>Increment</button>
          <button onClick={decNum}>Decrement</button>
          <button onClick={resetNum}>Reset</button>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CounterModal;
