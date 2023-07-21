"use client";

import { useEffect, useState } from "react";

interface PriceProps {
  price: number;
  id: number;
  options?: {
    title: string;
    additionalPrice: number;
  }[];
}

const Price = ({ id, price, options }: PriceProps) => {

    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setTotal(
            quantity * (options ? price + options[selected].additionalPrice : price)
        )
    },[quantity, selected, price, options])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* Options Container   */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] rounded-md p-2 ring-1 ring-red-400"
            style={{
              background: selected === index ? "#f26565" : "#e5f3bd",
              color: selected === index ? "black" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity and Add Button Container  */}
      <div className="flex items-center justify-between gap-4">
        {/* Quantity  */}
        <div className="flex w-full justify-between p-3 ring-1 ring-red-500 rounded">
          <span>Quantity</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setQuantity((prev) => (prev > 1 ? quantity - 1 : 1))
              }
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() =>
                setQuantity((prev) => (prev < 9 ? quantity + 1 : 9))
              }
            >
              {">"}
            </button>
          </div>
        </div>
        {/* Cart Button  */}
        <button className="w-56 bg-red-500 p-3 uppercase text-white ring-1 ring-red-500 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
