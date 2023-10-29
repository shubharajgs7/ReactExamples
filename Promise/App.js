import React, { useEffect } from "react";
const App = () => {
  const callMyPromise = () => {
    const myfunc = new Promise((resolve, reject) => {
      let giveChoco = true;
      if (giveChoco) {
        resolve("Thanks for the choco");
      } else {
        reject("Get lost");
      }
    });
    myfunc.then((i) => console.log(i)).catch((err) => console.log(err));
  };
  useEffect(() => {
    callMyPromise();
  }, []);
  return <>hello</>;
};
export default App;
