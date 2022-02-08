import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div onClick={handleClose} className="modaloverlay">
      <div className="modal">
        <div>
          <a className="modalicon">
            <FaTimes />
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className="modalchildren">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;
