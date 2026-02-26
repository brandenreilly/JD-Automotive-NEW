import React from "react";

import jdLocation from "../../img/JD-location.png"

export default function Location() {
    return (
        <div className="mt-4 text-center row justify-content-center locationSection">
            <div className="col-4">
                <a target="_blank" href="https://www.google.com/maps/dir//2146+NW+19th+St,+Margate,+FL+33063/@26.2511172,-80.19991,19.42z/data=!4m16!1m7!3m6!1s0x88d904bd23b4c0b1:0xe35be2a37c1c1e1c!2s2146+NW+19th+St,+Margate,+FL+33063!3b1!8m2!3d26.251278!4d-80.1996178!4m7!1m0!1m5!1m1!1s0x88d904bd23b4c0b1:0xe35be2a37c1c1e1c!2m2!1d-80.1996178!2d26.251278?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D">
                    <img src={jdLocation} style={{width: '300px', height: '300px'}}></img>
                </a>
            
            </div>
            <div className="col-4">
                <h3>We are located at 2146 NW 19th St, Mears Parkway, Margate, FL 33063.</h3>
            </div>
            <div className="col-4">

            </div>
        </div>
    )
}