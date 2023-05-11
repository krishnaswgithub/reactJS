// import "./App.css";
// import { useState } from "react";

// const App = () => {
//   // let count = 0;
//   // const increment = () => {
//   //   count = count + 1;
//   // };
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <main>
//       <h1>Count : {count} </h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </main>
//   );
// };

// // Named Export
// export { App };


import "./App.css";
import { useState } from "react";

const App = () => {
  
  const [isStatusOn, setIsStatusOn] = useState(false);
  const handleStatusChange = () => {
    setIsStatusOn(!isStatusOn);
  };

  return (
    <main>
      <h1>Status : {isStatusOn? "on" : "off"} </h1>
      <button onClick={handleStatusChange}>Toggle Status</button>
    </main>
  );
};

// Named Export
export { App };