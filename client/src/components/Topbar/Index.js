import React from "react";
import"./style.css"

function TopBar() {
  return (
    <div className="TopBar">
        <container fluid>
            <div className="row">
                <div className="col-sm" id="leftCol">
                    Schedule: Mon-Fri: 08:00AM-17:00PM Sat: 10:00AM–2:00PM
                </div>
                <div className="col-sm">
                    <a href="/appointment">Contact me here!</a>
                </div>
            </div>
        </container>
    </div>
  );
}

export default TopBar;