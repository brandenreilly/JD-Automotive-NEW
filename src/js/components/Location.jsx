import React from "react";

import jdLocation from "../../img/JD-location.png"
import "../../styles/table.css"

export default function Location() {
    return (
        <div className="mt-4 mb-4 text-center row justify-content-center locationSection">
            <div className="col-4 justify-content-center">
                <a target="_blank" href="https://www.google.com/maps/dir//2146+NW+19th+St,+Margate,+FL+33063/@26.2511172,-80.19991,19.42z/data=!4m16!1m7!3m6!1s0x88d904bd23b4c0b1:0xe35be2a37c1c1e1c!2s2146+NW+19th+St,+Margate,+FL+33063!3b1!8m2!3d26.251278!4d-80.1996178!4m7!1m0!1m5!1m1!1s0x88d904bd23b4c0b1:0xe35be2a37c1c1e1c!2m2!1d-80.1996178!2d26.251278?entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D">
                    <img src={jdLocation} style={{width: '300px', height: '300px'}}></img>
                </a>
            
            </div>
            <div className="col-6 ml-0 mt-4">
                <h3 className="" style={{}}>We are located at 2146 NW 19th St, Mears Parkway, Margate, FL 33063.</h3>
                
                <h4>Have questions? <a style={{textDecoration: 'none', color: 'white'}} href="tel:9544700360">Call us at</a></h4> <a href="tel:9544700360"><strong>(954) 470-0360</strong></a>

                <table className="hoursTable">
                    <tbody>
                        <tr className="tableHeader">
                            <th>Day</th>
                            <th>Hours</th>
                        </tr>
                        <tr>
                            <td>Monday - Friday</td>
                            <td>8:00 AM - 5:00 PM</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>By Appointments Only</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-2">
            </div>
        </div>
    )
}