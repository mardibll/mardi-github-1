import React, { useState } from "react";

export default function Functions({ text }) {
  const [number, setnumber] = useState(0);
  const [data, setdata] = useState("Saya sedang makan");
  const kurang = () => {
    if (number <= 0) {
    } else {
      setnumber(number - 1);
    }
  };
  const tambah = () => {
    setnumber(number + 1);
  };
  const ubah = () => {
    if (data === "Saya sedang makan") {
      setdata("Saya lagi tidur");
    } else {
      setdata("Saya sedang makan");
    }
  };
  return (
    <div>
      <h3>{text}</h3>
      <button onClick={kurang}>-</button>
      <span>{number}</span>
      <button onClick={tambah}>+</button>
      <h4>{data}</h4>
      <button onClick={ubah}>Ubah</button>
    </div>
  );
}
