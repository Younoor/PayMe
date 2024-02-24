// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import Header from "./components/Header";
import TransactionItem from "./components/TransactionItem";

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Header />
      <TransactionItem transaction={{id: "1", amount: "100", description: 50, date: new Date()}} />
    </div>
    // <div>
    //   {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
    //   <Button color="primary" onClick={() => setAlertVisibility(true)}>Button</Button>
    // </div>
  );
}

export default App;
