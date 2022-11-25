import mackup1 from "../images/lipstick-mackup.jpg";
import mackup2 from "../images/eyemackup-mackup.jpg";
import mackup3 from "../images/face-mackup.jpg";
import mackup4 from "../images/kit-mackup.jpg";
import henna from "../images/tv-add.jpg"
import {Link} from 'react-router-dom';
import React, { useState,useContext} from 'react';


export default function Mackup(){


    return(
        <>
        <div className="speciality_header" >
              <h4 >Up to 30% off | Top offers on mackeup products</h4>
              <h3>OUR SPECIALITY MACKUP KITS</h3>
            <section className="speciality">
            {/* <Link class="nav-link" to="/Menu"> */}
                <Link to="/Menu"><img className="special_case" src={mackup1}/>
                <div className='special_body'><h2>Lipsticks </h2></div></Link>
                
                <Link to="/Menu"><img className="special_case" src={mackup2}/>
                <div className='special_body'><h2>Eye mackup</h2></div></Link>

                <Link to="/Menu"><img className="special_case" src={mackup3}/>
                <div className='special_body'><h2>Face mackup</h2></div></Link>

                <Link to="/Menu"><img className="special_case" src={mackup4}/>
                <div className='special_body'><h2>Mackup kits & accessories</h2></div></Link>

            </section>
            

            <div className='add'>
                <p>  </p>
                <p>Suggested for you</p><br></br>
             <img src={henna}></img>
            </div>
            </div>
        </>

    )
}