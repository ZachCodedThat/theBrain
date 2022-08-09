import React from "react";
import mockDatabase from "../mockDatabase.json";

const InventorySystem = (itemId: number) => {
  const [dispenseFlag, setDispenseFlag] = React.useState<boolean>(false);

  const item = mockDatabase.inventory;
  const itemPrice = item.find((item) => item.selectionId == itemId);

  // itemID is only available once valid coins have been added to the payment total and a valid item has been selected. This ensures only one snack at a time.

  function checkInventory(itemId: number) {
    // checks to see if the item is in the inventory and runs the dispense and update function if it is
    //dispenseItem(itemId);
  }

  function dispenseItem(itemId: number) {
    // logic to tell the controller to dispense the items based on the item id.
    setDispenseFlag(true); //this is used to tell the other systems to lock out until the item is dispensed
    // await item dispense delay . . .
    setDispenseFlag(false);
  }
};

export default InventorySystem;
