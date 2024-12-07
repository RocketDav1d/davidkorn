import React from "react";
import { PopupWidget } from "react-calendly";

const CalendlyPopup = () => {
  return (
    <div className="calendly-popup">
      <PopupWidget
        url="https://calendly.com/your_scheduling_page"
        rootElement={document.getElementById("root") || undefined}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
  );
};

export default CalendlyPopup;
