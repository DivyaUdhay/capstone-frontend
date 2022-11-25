import React, { useEffect, useState, useContext } from "react";
import GooglePayButton from "@google-pay/button-react";
import { useNavigate } from "react-router";
import Button from '@mui/material/Button';
export function Paycheck() {
  const [fName, setfname] = useState();
  const [lName, setlname] = useState();
  const [addr, setaddr] = useState();
  const [country, setcoun] = useState();
  const [city, setcity] = useState();
  const [state, setstate] = useState();
  const [code, setcode] = useState();
  const [show, setshow] = useState(true);
  const navigate = useNavigate();
  const submit = () => {
    if ((fName, lName, addr, country, city, state, code !== "")) {
      setshow(false);
      console.log(addr);
    }
  };
  const retuned = () => {
    setshow(true);
  };
  return (
    // <div className="container-billing">
    <div className="gradient-custom">
        <div className="gradient-custom"></div>
    <div class="row mt-3 mx-3" style={{margintop:"25px"}}>
        <div class="col-md-3">
        <div style={{margin:"50px,0px,0px,10px"}} class="text-center">
           <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
        data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
        data-mdb-animation-on-scroll="repeat" class="fas fa-3x fa-shipping-fast text-white"></i>
      <h3 class="mt-3 text-white">Welcome</h3>
      <p class="white-text">You are 30 seconds away from compleating your order!</p>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-white btn-rounded back-button">Go back</button>
    </div>


  </div>
  <div class="col-md-9 text-align-center">
  <div class="card card-custom pb-4">
  <div class="card-body mt-0 mx-5">
  <div class="text-center mb-3 pb-2 mt-3">
          <h4 style={{color: "#495057 "}}>Delivery Details</h4>
        </div>
     
     
      <div class="text-center mb-3 pb-2 mt-3">
        {!show ? (
          <div className="del">
            <h3>{`${fName}  ${lName}`}</h3>
            <div>{addr}.</div>
            <p>
              <div>{country}, </div>
              <div>{state}, </div>
              <div>{city}, </div>
              <div>{code}, </div>
            </p>
            <button
              class="uk-button uk-button-primary"
              type="button"
              onClick={() => retuned()}
            >
              Edit
            </button>
            <div class="text-center mb-3 pb-2 mt-3">
            <Button variant="contained" onClick={()=>navigate("/reservation")}>Confirm&Continue</Button></div>
            <div className="payment">
              <h2>Payment Method</h2>
              <GooglePayButton
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: "CARD",
                      parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["MASTERCARD", "VISA"],
                      },
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "example",
                          gatewayMerchantId: "exampleGatewayMerchantId",
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: "12345678901234567890",
                    merchantName: "Demo Merchant",
                  },
                  transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPriceLabel: "Total",
                    totalPrice: "100.00",
                    currencyCode: "USD",
                    countryCode: "US",
                  },
                }}
                onLoadPaymentData={(paymentRequest) => {
                  console.log("load payment data", paymentRequest);
                }}
              />
            </div>
          </div>
        ) : (
          <form class="uk-grid-small" uk-grid>
            <div class="uk-width-1-2@s" id="uk-width-1-4s">
              <input
                class="uk-input"
                type="text"
                placeholder="FirstName"
                onChange={(e) => setfname(e.target.value)}
              />

              <input
                class="uk-input"
                type="text"
                placeholder="LastName"
                onChange={(e) => setlname(e.target.value)}
              />
            </div>
            <div class="uk-width-1-2@s">
              <input
                class="uk-input"
                type="text"
                placeholder="Address"
                onChange={(e) => setaddr(e.target.value)}
              />
            </div>
            <div class="uk-width-1-4@s">
              <input
                class="uk-input"
                type="text"
                placeholder="country"
                onChange={(e) => setcoun(e.target.value)}
              />
            </div>
            <div class="uk-width-1-4@s">
              <input
                class="uk-input"
                type="text"
                placeholder="city"
                onChange={(e) => setcity(e.target.value)}
              />
            </div>
            <div class="uk-width-1-2@s">
              <input
                class="uk-input"
                type="text"
                placeholder="State"
                onChange={(e) => setstate(e.target.value)}
              />
            </div>
            <div class="uk-width-1-2@s">
              <input
                class="uk-input"
                type="text"
                placeholder="ZibCode"
                onChange={(e) => setcode(e.target.value)}
              />
            </div>
            
            <button type="submit" class="btn btn-primary btn-rounded"
              style={{backgroundcolor: "#0062CC "}} onClick={() => submit()}>Place order</button>
          
          </form>
        )}
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
