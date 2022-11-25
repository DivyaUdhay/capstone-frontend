import kids1 from "../images/kids1-kids.jpg";
import kids2 from "../images/kids2-kids.jpg";
import kids3 from "../images/kids3-kids.jpg";
import kids4 from "../images/kids4-kids.jpg";
import med from "../images/med-add.jpg";
import {Link} from 'react-router-dom';
import React, { useState,useContext} from 'react';


export default function Kids(){


    return(
        <>
            <div className="speciality_header" >
              <h4 >Shop the kids' store by age</h4>
              <h3>OUR SPECIALITY KIDS</h3>
            <section className="speciality">
            {/* <Link class="nav-link" to="/Menu"> */}
                <Link to="/Menu">
                <img className="special_case" src={kids1}/>
                <div className='special_body'><h2>0-24 months </h2></div></Link>
                
                <Link to="/Menu"><img className="special_case" src={kids2}/>
                <div className='special_body'><h2>2-4 years</h2></div></Link>

                <Link to="/Menu"><img className="special_case" src={kids3}/>
                <div className='special_body'><h2>5-7 years</h2></div></Link>

                <Link to="/Menu"><img className="special_case" src={kids4}/>
                <div className='special_body'><h2>8-12+ years</h2></div></Link>

            </section>
            

            <div className='add'>
                <p>  </p>
                <p>Pharmacy for you</p><br></br>
             <img src={med}></img>
            </div>
            </div>
        </>
    )
}