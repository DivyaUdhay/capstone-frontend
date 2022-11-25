import phone1 from "../images/phone1-mobiles.jpg";
import phone2 from "../images/phone2-mobiles.jpg"
import phone3 from "../images/phone3-mobiles.jpg";
import phone4 from "../images/phone4-mobiles.jpg";
import mamypoko from "../images/mamypoko-add.jpg";
import {Link} from 'react-router-dom';
import React, { useState,useContext} from 'react';
export default function Mobiles(){


    return(
        <>
        <div className="speciality_header" >
              <h4 >Related to items you have viewed in Smartphones & basic mobiles</h4>
              <h3>OUR SPECIALITY MOBILES</h3>
            <section className="speciality">
            {/* <Link class="nav-link" to="/Menu"> */}
                <Link to="/Menu"><img className="special_case" src={phone1}/>
                <div className='special_body'><h2>Apple iPhone 14 |Comming soon </h2></div></Link>
                
                <Link to="/Menu"><img className="special_case" src={phone2}/>
                <div className='special_body'><h2>Apple iPhone 13</h2></div></Link>

                <Link to="/Menu"><img className="special_case" src={phone3}/>
                <div className='special_body'><h2>One Plus Nord CE 2 Lite 5G</h2></div></Link>

                <Link to="/Menu"><img className="special_case" src={phone4}/>
                <div className='special_body'><h2>One Plus Nord CE 2 Lite 5G</h2></div></Link>

            </section>
            

            <div className='add'>
                <p>  </p>
                <p>Deal of the day</p><br></br>
             <img src={mamypoko}></img>
            </div>
            </div>
        </>
    )
}