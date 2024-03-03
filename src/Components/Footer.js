import React from "react";

export const Footer =()=>{

    return(
        <div>
            <footer className="header1">
                <div className="container text-center footer1">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-2 ">
                            <ul className="list-group listitems">CATEGORIES</ul>
                            <li className="list-group-item">Web Buider  </li>
                            <li className="list-group-item">Hoister</li>
                            <li className="list-group-item">Data Center</li>
                            <li className="list-group-item">Robotic-Automation</li>
                        </div>
                        <div className="col col-lg-2 ">
                            <ul className="list-group listitems">CONTACT</ul>
                            <li className="list-group-item">Privacy Policy </li>
                            <li className="list-group-item">Terms of Service</li>
                            <li className="list-group-item">Categories</li>
                            <li className="list-group-item">About</li>
                        </div>
                        <div className="col col-lg-2">
                        <button className="btn header1 dropdown-toggle"data-bs-toggle="dropdown" aria-expanded="false">
                         United States </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}