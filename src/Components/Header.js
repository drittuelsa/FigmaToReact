import React from "react";
import { BsSearch } from "react-icons/bs";


export const Header =()=>{

    return(
        <div>
            <header className="header1">
            <div className="container text-center header2">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-2">
                    {/* <input type="text" className="form-control" placeholder="Search Product"/> */}
                        <span className="input-group-text"><BsSearch /></span>
                    </div>
                    <div className="col col-lg-2">
                    Categories
                    </div>
                    <div className="col col-lg-2">
                    Website Builders
                    </div>
                    <div className="col col-lg-2">
                    Today's deal
                    </div>
                </div>
            </div>
            </header>
           
        </div>
    )
}