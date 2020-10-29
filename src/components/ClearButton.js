import React from "react";

const DATA = [];

function ClearButton(props) {
    function handleClick(e) {
        e.preventDefault();
        localStorage.clear();
        props.setTasks(DATA);
    }

    return (
        <div className="label-wrapper">
            <button type="button"
                    onClick={handleClick}
                    className="btn btn__primary btn__lg">
            Clear All Tasks
            </button>
        </div>
  );
}

export default ClearButton;