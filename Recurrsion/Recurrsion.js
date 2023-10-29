import React, { useState } from "react";
const Recurrsion = (props) => {
  const { Family } = props;
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <span
        style={{ display: "flex", margin: "0 auto", justifyContent: "center" }}
        onClick={() => setVisible(!visible)}
      >
        {Family.name}
      </span>
      {visible ? (
        <div style={{marginLeft:"50px"}}>
          {Family.children.map((e) => {
            return <Recurrsion Family={e} />;
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Recurrsion;
