import React, { useEffect, useState } from "react";
import axios from "axios";
//https://api.postalpincode.in/pincode/`;
export default function Debouncing() {
  const [pin, setPin] = useState(0);

  useEffect(() => {
    const debounce = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${pin}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 2000);
    return () => {
      clearTimeout(debounce);
    };
  }, [pin]);
  return (
    <>
      <input
        type={"number"}
        placeholder={"Please Enter Pincode"}
        onChange={(e) => setPin(e.target.value)}
      />
    </>
  );
}
