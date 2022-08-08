import React from "react";
import Screen from "./components/Screen";
import inventory from "./mockDatabase.json";
import "./App.css";

function App() {
  const product = inventory.inventory;
  console.log(product);

  const currentPayment = "0.00";

  return (
    <div className="App">
      <header className="App-header">
        <p>Zach is cool</p>
      </header>
      <div className="items">
        {product.map((item) => (
          <Screen
            key={item.selectionId}
            currentPayment={currentPayment}
            itemPrice={item.price}
            inputChoice={item.selectionId}
            dispenseFlag={false}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
