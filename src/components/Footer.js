import React from "react";
import './Footer.js';



const Feature = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row" >
                    {/* Column1 */}
                    <div className="col">
                        <h4>Fake API Store</h4>
                        <ul className="list-unstyled">
                            <li>342-440-2421</li>
                            <li>Bakersfield, CA</li>
                            <li>123 Street Cal North</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>STUFF</h4>
                        <ul className="list-unstyled">
                            <li>BW</li>
                            <li>BW STUFF</li>
                            <li>BW OTHER STUFF</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>WELL ANOTHER COLUMN</h4>
                        <ul className="list-unstyled">
                            <li>BW</li>
                            <li>BW STUFF</li>
                            <li>OTHER STUFF STUFF STUFFY</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Fake API Store INC | All right reserved  | Terms of Service | Privacy
                    </p>

                </div>
            </div>
        </div>
    )
}
export default Feature;
