import women1 from "../images/Kurthi-women.jpg";
import women2 from "../images/Top-women.jpg";
import women3 from "../images/Jumsuit-women.jpg";
import women4 from "../images/sarees-women.jpg";
import safari from "../images/safari-add.jpg";
import {Link} from 'react-router-dom';
import React, { useState,useContext} from 'react';

export default function Womens(){


    return(
        <>
         <div className="speciality_header" >
              <h4 >Autumn winter'22 collection for women</h4>
              <h3>OUR SPECIALITY WOMENS</h3>
            <section className="speciality">
            {/* <Link class="nav-link" to="/Menu"> */}
                <Link to="/Menu"><img className="special_case" src={women1}/>
                <div className='special_body'><h2>Biba, Global desi and more </h2></div></Link>
                
                <Link to="/Menu"><img className="special_case" src={women2}/>
                <div className='special_body'><h2>Vero moda,Levisband more</h2></div></Link>

                <Link to="/Menu"><img className="special_case" src={women3}/>
                <div className='special_body'><h2>View the store</h2></div></Link>

                <Link to="/Menu"><img className="special_case" src={women4}/>
                <div className='special_body'><h2>Geniric,Satrani and More</h2></div></Link>

            </section>
            

            <div className='add'>
                <p>  </p>
                <p>Kickstater Deals</p><br></br>
             <img src={safari}></img>
            </div>
            </div>
        </>
    )
}