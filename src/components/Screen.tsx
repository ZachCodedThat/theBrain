import React from "react";
import "./screen.css";

type CURRENT_PAYMENT = string;
type OVERPAYMENT = string;
type OP_FLAG = boolean;
type ITEM_PRICE = string;
type ITEM_ID = number;
type CHOICE_ID = string;
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
