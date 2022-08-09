import React from "react";
import "./screen.css";

/* This handles the screen visibile to the user as they are going through the process of purchasing an item

    This could be reworked to fit what ever visualization tool you want to use react was just a quick way to get spun up.
*/

type CURRENT_PAYMENT = string | number;
type ITEM_PRICE = string;
type CHOICE_ID = number;
type DISPENSE_FLAG = boolean;

interface screenInterface {
  currentPayment: CURRENT_PAYMENT;
  itemPrice: ITEM_PRICE;
  inputChoice: CHOICE_ID;
  dispenseFlag: DISPENSE_FLAG;
}

const Screen = ({
  currentPayment,
  itemPrice,
  inputChoice,
  dispenseFlag,
}: screenInterface) => {
  return dispenseFlag ? (
    <div>
      <h1>Thank you!</h1>
    </div>
  ) : (
    <div className="screen">
      <h3>Input Screen</h3>
      <div className="screen-payment">
        <div className="screen-payment-title">Payment</div>
        <div className="screen-payment-value">{currentPayment}</div>
      </div>

      <div className="screen-item-price">
        <div className="screen-item-price-title">Item Price</div>
        <div className="screen-item-price-value">{itemPrice}</div>
      </div>
      <div className="screen-input-choice">
        <div className="screen-input-choice-title">Input Choice</div>
        <div className="screen-input-choice-value">{inputChoice}</div>
      </div>
    </div>
  );
};

export default Screen;
