import React from 'react';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 style={{color: "white"}}>Pogoda</h3>
                        <hr style={{background: 'dimgray'}}></hr>
                        <ul className="list-unstyled">
                            <li>Na stronie prezentowana jest aktualna temperatura dla miast Polski.</li>
                        </ul>
                    </div> 
                </div>
                <hr style={{background: 'dimgray'}}></hr>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Pogoda | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;