
import React from "react";

function modeToggler({ toggleDarkMode }) {
    return (
      <button onClick={toggleDarkMode} className="btn btn-secondary">
        Toggle Dark Mode
      </button>
    );
  }


export default modeToggler;