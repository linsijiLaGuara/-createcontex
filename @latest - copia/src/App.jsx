import Increment from "./componest/Increment";
import Decrement from "./componest/Decrement";
import CouterProvider from "./context/CounterContext";

import "./App.css";
function App() {
  return (
    <>
      <CouterProvider>
        <Increment />
        <Decrement />
      </CouterProvider>
    </>
  );
}

export default App;
