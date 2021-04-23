import React from "react";

function TopBar() {
  return (
    <div className="TopBar">
        <container fluid>
            <div className="row">
                <div className="col-sm" id="leftCol">
                    Schedule: Mon-Fri: 9:00AM-6:00PM Sat: 10:00AM–2:00PM
                </div>
                <div className="col-sm">
                    <a href="/appointment">Schedule your Appointment here!</a>
                </div>
                <div className="col-sm">
                    <a href="https://www.google.com/maps/place/Schertz+Car+Care+Center/@29.6225994,-98.249436,17z/data=!3m1!4b1!4m5!3m4!1s0x865c93df2278bc09:0x80b5d633304c9887!8m2!3d29.6225994!4d-98.2472473?hl=en">19513 I-35, New Braunfels, TX 78132</a>
                </div>
            </div>
        </container>
    </div>
  );
}

export default TopBar;