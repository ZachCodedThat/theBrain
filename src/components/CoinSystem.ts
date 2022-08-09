import { Console } from "console";

import React from "react";

/* This is a rough pass at a coin system for the vending machine.

Given the time constraints, I wanted to show a scaffolding of the system and 
speak about ways we can implement tests and auotmation. 

I was not able to get everything totally wired up but I tried to get the basic gist of the system.
 
 */

interface inputCoin {
  weight: number;
  size: number;
}
interface validCoin {
  name?: string;
  value: number;
  weight: number;
  size: number;
}

/*
set up some interfaces to represent an input and a valid coin this can be expanded to any combination of data needed.


CoinSystem takes an input coin and validates it against a list of valid coins
and handles it accordingly.

This is a rough pass at a coin system and I use alot of pseudocode to show the flow of the system. 

In a real system, I would opt for a state machine to handle the flow of the system drilling and hoisting state around various components is not ideal. 
**/

const CoinSystem = (itemPrice: number, coinInput: inputCoin) => {
  const [paymentTotal, setPaymentTotal] = React.useState<number>(0);
  const [validCoins, setValidCoins] = React.useState<validCoin[]>([
    {
      name: "",
      value: 0,
      weight: 0,
      size: 0,
    },
  ]);

  const validCoinCheck: validCoin[] = [
    { name: "dime", value: 10, weight: 0.5, size: 0.5 },
    { name: "nickle", value: 5, weight: 1, size: 1 },
    { name: "Quarter", value: 25, weight: 1.5, size: 1.5 },
  ];

  // useMemo gets me the gaurds against infinite loops.

  const coinHandler = React.useMemo(() => {
    const coinHandler = (coin: inputCoin) => {
      validateCoin(coin);
    };
    return coinHandler;
  }, [coinInput]);

  function validateCoin(coin: inputCoin) {
    const { weight, size } = coin; // These values would likely come from an mechanical coin sensor but the flow would be the same.
    const validCoin = validCoinCheck.find((coin) => {
      return coin.weight == weight && coin.size == size;
    });

    if (validCoin) {
      setValidCoins([...validCoins, validCoin]);
      // I would keep a running tally of the coins added in so we can ensure the right coins are given back to the user if they hit the coin return.
      addCoin(validCoin.value);
    } else {
      dispenseCoins();
    }
  }

  function addCoin(coin: validCoin) {
    setPaymentTotal(paymentTotal + coin.value);
    //logic to add coin to payment total
  }

  function dispenseCoins(overpayments: validCoin[]) {
    overPaymentFlag ? hanldeOverpayments(overpayments) : rejectCoin();
    // logic that determines the amount of coins to dispense based on the payment total and the item price
    // logic to dispense coins for overpayments and when the return button is pressed
    // also handles ejecting input that is not a valid coin.
  }

  function rejectCoin() {
    // openCoinReturn();
    // logic to reject things that do not pass coin validation
  }
};

export default CoinSystem;
