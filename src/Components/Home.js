import React from "react";
import {CiCircleCheck, CiCircleInfo} from "react-icons/ci";
import {TbMathGreater} from "react-icons/tb";
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import { PiTrophyLight } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import Logo from './image1.png';

export const Home =()=>{

    return(
        <div>
            <div className="container">
            <section className="headline ">
                <h2 className="head1">Best Website builders in the US</h2>
                
                <div className="row justify-content-center">
                <hr/>
                    <div className="col col-lg-3 p-2">
                    <h6><span className="icon"><CiCircleCheck /></span>Last updated -March 1, 2024</h6>
                    </div>
                    <div className="col col-lg-3 p-2">
                    <h6><span className="icon"><CiCircleInfo /></span>Advertising Disclosure</h6>
                    </div>
                    <div className="col-lg-2 ms-auto">
                    <h6 className="btn1"> <button className="btn dropdown-toggle icon"data-bs-toggle="dropdown" aria-expanded="false">Top Relevant</button></h6>     
                    </div>
                <hr/>
                </div>
             
            </section>

            <section >
                <div className="row justify-content-center ">
                    <div className="col ">
                    <h6>Tools</h6>
                    </div>
                    <div className="col">
                    <h6>AWS Builder</h6>
                    </div>
                    <div className="col ">
                    <h6>Start Build</h6>
                    </div>
                    <div className="col">
                    <h6>Build Supplies</h6>
                    </div>
                    <div className="col ">
                    <h6>Tooling</h6>
                    </div>
                    <div className="col">
                    <h6>BlueHosting</h6>
                    </div>
                </div>
            </section>

            <section> 
                <div className="row row-cols-auto py-5 text-center">
                    <div className="col"><h6>Home <span><TbMathGreater /></span></h6></div>
                    <div className="col"><h6>Hoisting <span><TbMathGreater /></span></h6></div>
                    <div className="col"><h6>Hoisting for all <span><TbMathGreater /></span></h6></div>
                    <div className="col"><h6>Hoisting 6 <span><TbMathGreater /></span></h6></div>
                    <div className="col"><h6>Hoisting 5 <span><TbMathGreater /></span></h6></div>
                </div>
            </section>

            <section className="justify-content-center pt-5">
                <div>
                    <h6 className="box "><span className="icon mx-2"> <PiTrophyLight /></span>Best Choice</h6>
                    
                </div>
                <div className="row align-items-center">
                    <div className="col-3">
                    <p className="circle">1</p>
                        <img src={Logo} height={103} width={141} alt="Product"/><br/>
                        <h6 className="text1">Builder 1</h6>
                    </div>
                    <div className="col">
                        <p className="line"><span className="line1">WixPro 72-Inch Responsive Website Builder</span>- Comprehensive Digital Platform Creation Tool, 
                            Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                        <p className="line1 my-2">Main highlights</p>
                        <p className="line mx-4 my-0">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, 
                            and detailed step-by-step guides.</p>
                            <button className="btn dropdown-toggle text2"data-bs-toggle="dropdown" aria-expanded="false">Show more</button>
                    </div>
                    
                    <div className="col-3">
                        <div className="box2">
                           <p className="number ">9.8</p>
                            <span className="word">Exceptional</span><br/>
                            <span className="star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></span>
                        </div>
                        <button type="button" class="btn btn-primary box3 m-auto">View</button>          
                    </div>
                </div>
            </section>

            <section className="justify-content-center mt-5 pt-5">
                <div>
                    <h6 className="box "><span className="icon mx-2"><IoDiamondOutline /></span>Best Value</h6>
                   
                </div>
                <div className="row align-items-center">
                    <div className="col-3">
                         <p className="circle">2</p>
                        <img src={Logo} height={103} width={141} alt="Product"/>
                        <h6 className="text1">Builder </h6>
                    </div>
                    <div className="col">
                        <p className="line"><span className="line1">SiteCraft 68-Inch Ultimate Web Design Studio</span>- Advanced Site Creation Toolkit,
                         Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
                        <p className="line1 my-2">Main highlights</p>
                        <p className="line mx-4 my-0">[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements,
                         SEO optimization tools, and e-commerce integrations.</p>
                            <button className="btn dropdown-toggle text2"data-bs-toggle="dropdown" aria-expanded="false">Show more</button>
                    </div>
                    
                    <div className="col-3">
                        <div className="box2 m-auto">
                           <p className="number">9.5</p>
                            <span className="m-auto word">Excellent</span><br/>
                            <span className="star m-auto"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf /></span>
                        </div>
                        <button type="button" class="btn btn-primary box3 m-auto">View</button>          
                    </div>
                </div>
            </section>

            <section className="justify-content-center mt-5 pt-5">
                <div className="row align-items-center">
                    <div className="col-3">
                    <p className="circle">3</p>
                        <img src={Logo} height={103} width={141} alt="Product"/>
                        <h6 className="text1">Builder 3</h6>
                    </div>
                    <div className="col">
                        <p className="line"><span className="line1">WixPro 72-Inch Responsive Website Builder</span>- Comprehensive Digital Platform Creation Tool, 
                            Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                        <p className="line1 my-2">Main highlights</p>
                        <p className="line mx-4 my-0">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, 
                            and detailed step-by-step guides.</p>
                            <button className="btn dropdown-toggle text2"data-bs-toggle="dropdown" aria-expanded="false">Show more</button>
                    </div>
                    
                    <div className="col-3">
                        <div className="box2 m-auto">
                           <p className="number">9.3</p>
                            <span className="m-auto word">Exceptional</span><br/>
                            <span className="star m-auto"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></span>
                        </div>
                        <button type="button" class="btn btn-primary box3 m-auto">View</button>          
                    </div>
                </div>
            </section>

            <section className="justify-content-center mt-5 pt-5">
               
                <div className="row align-items-center">
                    <div className="col-3">   
                    <p className="circle">4</p>
                        <img src={Logo} height={103} width={141} alt="Product"/>
                        <h6 className="text1">Builder 3</h6>
                    </div>
                    <div className="col">
                        <p className="line"><span className="line1">CDK Resposive Builder:</span>- An extensive library of widgets and apps, and detailed step-by-step guides</p>
                        <p className="line1 my-2">Main highlights</p>
                        <ul className="line mx-4 my-0 list0">
                            <li className="list-group-item"><span className="mx-3">9.9</span> Building Responsive</li>
                            <li className="list-group-item"><span className="mx-3">8.9</span>Cool</li>
                            <li className="list-group-item"><span className="mx-3">8.9</span>Docs</li>                       
                        </ul>
                        <p className=" my-2">Why we love it</p>
                        
                            <p className="mx-5"><span className="tick"><TiTick /></span>Documentation</p>
                            <p className="mx-5"><span className="tick"><TiTick /></span>Easy use</p>
                            <p className="mx-5"><span className="tick"><TiTick /></span>Out of box</p>
                      
                            <button className="btn dropdown-toggle text2"data-bs-toggle="dropdown" aria-expanded="false">Show more</button>
                    </div>
                    
                    <div className="col-3">
                        <div className="box2 m-auto">
                           <p className="number">9.3</p>
                            <span className="m-auto word">Exceptional</span><br/>
                            <span className="star m-auto"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></span>
                        </div>
                        <button type="button" class="btn btn-primary box3 m-auto">View</button>          
                    </div>
                </div>
            </section>

            <section>
                <div className="row my-5 align-items-center">
                    <h3>Related deals you might like for</h3>
                    <div className="col">
                     <div className="pic"><img  src={Logo} height={103} width={141} alt="Product"/></div>
                    <p className="color">20% Off <span className="mx-3">Limited time</span> </p>
                    <p className="title">Webbuilder 1</p>
                    <p className="title2">Computer  Modern clasic with wix support</p>
                    <p><span className="size1">$39.96</span> <span className="size2">$49.96</span> <span className="color2">(20% Off)</span> </p>
                    <button type="button" class="btn btn-primary box4">View Deal</button> 
                    </div>
                    <div className="col">
                     <div className="pic"><img  src={Logo} height={103} width={141} alt="Product"/></div>
                    <p className="color">20% Off <span className="mx-3">Limited time</span> </p>
                    <p className="title">Webbuilder 1</p>
                    <p className="title2">Computer  Modern clasic with wix support</p>
                    <p><span className="size1">$39.96</span> <span className="size2">$49.96</span> <span className="color2">(20% Off)</span> </p>
                    <button type="button" class="btn btn-primary box4">View Deal</button> 
                    </div>
                    <div className="col">
                     <div className="pic"><img  src={Logo} height={103} width={141} alt="Product"/></div>
                    <p className="color">20% Off <span className="mx-3">Limited time</span> </p>
                    <p className="title">Webbuilder 1</p>
                    <p className="title2">Computer  Modern clasic with wix support</p>
                    <p><span className="size1">$39.96</span> <span className="size2">$49.96</span> <span className="color2">(20% Off)</span> </p>
                    <button type="button" class="btn btn-primary box4">View Deal</button> 
                    </div>
                </div>
            </section>

            <section>
                <div className="row justify-content-between">
                <div className=" col-2 py-5 box5">
                    <p className="">Sign up and get exclusive special deals</p>
                </div>
                <div className="col-2 py-5">
                <button type="button" class="btn btn-primary box6">Sign Up</button> 
                </div>
                </div>
               
            </section>
            
            </div>
        </div>
    )
}