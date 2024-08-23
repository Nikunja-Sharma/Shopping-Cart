"use client";
import { DialogCloseButton } from "@/components/Dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (item.itemName && item.price > 0 && item.quantity > 0) {
      setItems([...items, item]);
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }

  return (
    <div className="flex items-center h-[100vh] flex-col justify-center w-full">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
              <td>
                <Button onClick={() => removeItem(index)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DialogCloseButton onAddItem={addItem} />

      <div className="mt-4">
        <h2>Total: ₹{total.toFixed(2)}</h2>
      </div>
    </div>
  );
}
