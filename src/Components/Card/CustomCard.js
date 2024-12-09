import React from "react";
import "./Card.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const customCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} class="card">
            <img class="card-img-top" src={item.imgsrc} alt={item.alt} />
            <div class="card-body">
              <div className="cardbody-item">
                <h5 class="card-title">{item.description}</h5>
                <div class="card-text">
                  <span>From: </span>
                  <CurrencyRupeeIcon className="customCardIcon-Currency" />
                  <span className="prize">{item.prizes}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default customCard;
