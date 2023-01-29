import React from "react";

function Toggle() {
  const initial = localStorage.getItem("type");
  return (
    <div class="form-check form-switch mt-4 mb-0">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        defaultChecked={initial === "1" ? true : false}
        onChange={() => {
          return localStorage.setItem(
            "type",
            document.getElementById("flexSwitchCheckDefault").checked ? 1 : 0
          );
        }}
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">
        °F
      </label>
    </div>
  );
}

export default Toggle;
