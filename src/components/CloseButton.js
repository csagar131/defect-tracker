import React from "react";

function CloseButton(props) {
  


  function closeDefect(e) {
    props.closeDefect(e);
   
  }

  return (
    <button
      disabled={props.btnDisableState}
      className="btn btn-outline-warning text-dark"
      onClick={closeDefect}
    >
      close defect
    </button>
  );
}

export default CloseButton;
