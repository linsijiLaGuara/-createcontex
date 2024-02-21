import { createContext, useState } from "react";


export const CounterContext = createContext();
// eslint-disable-next-line react/prop-types
const CouterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
export default CouterProvider;
