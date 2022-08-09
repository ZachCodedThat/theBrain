import React from "react";
import Screen from "./components/Screen";
import mockData from "./mockDatabase.json";
import CoinSystem from "./components/CoinSystem";

import "./App.css";

interface validCoin {
  name?: string;
  value: number;
  weight: number;
  size: number;
}

/* 
This section set up the screen to be displayed to the user 

and set up visual aids for myself to help debug stuff I got working during the time frame of this project

This is another time I will say using a State machine would have been a cleaner solution but it seemed a bit out of the scope of this project.


**/

function App() {
  const [fakeInput, setFakeInput] = React.useState({
    weight: 0,
    size: 0,
  });
  const [itemId, setItemId] = React.useState<number>(0);
  const [itemPrice, setItemPrice] = React.useState<number>(0);

  const validCoinCheck: validCoin[] = [
    { name: "dime", value: 10, weight: 0.5, size: 0.5 },
    { name: "nickle", value: 5, weight: 1, size: 1 },
    { name: "Quarter", value: 25, weight: 1.5, size: 1.5 },
  ];

  const product = mockData.inventory;

  // const itemId = 1;

  const handleCoinInput = (e: any) => {
    e.preventDefault();
    setFakeInput({
      weight: e.target.value,
      size: e.target.value,
    });
  };
  const handleProductInput = (e: any) => {
    e.preventDefault();
    setItemId(e.target.value);
  };

  CoinSystem(itemPrice, fakeInput);

  return (
    <div className="App">
      <div className="items">
        <Screen />
        <div className="coin-inputs">
          Insert Coin:
          <button
            name="subject"
            type="submit"
            onClick={handleCoinInput}
            value={1.5}
          >
            Quarter
          </button>
          <button
            name="subject"
            type="submit"
            onClick={handleCoinInput}
            value={0.5}
          >
            Dime
          </button>
          <button
            name="subject"
            type="submit"
            onClick={handleCoinInput}
            value={1}
          >
            Nickle
          </button>
        </div>
        <div className="coin-inputs">
          Choose a product:
          <button
            name="subject"
            type="submit"
            onClick={handleProductInput}
            value={1}
          >
            cola
          </button>
          <button
            name="subject"
            type="submit"
            onClick={handleProductInput}
            value={2}
          >
            candy
          </button>
          <button
            name="subject"
            type="submit"
            onClick={handleProductInput}
            value={3}
          >
            chips
          </button>
        </div>

        <div className="item-list">
          {product
            .filter((item) => item.selectionId == itemId)
            .map((item) => (
              <div key={item.selectionId}>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div>{item.selectionId}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
