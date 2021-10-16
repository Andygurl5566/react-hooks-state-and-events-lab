import React, {useState} from "react"; // 1 added useState
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const appClass = false ? "App dark" : "App light"
//const className = false ? "in-cart" : ""

  const [mode, setMode] = useState(appClass)  // 2 reated a use state variable
  //const [cart, setCart] = useState(className)

  // function handleCart(){
  //   const newClassName = cart === "in-cart" ? "in-cart" : ""
  //   console.log("hi")
  //   setCart(newClassName)
  // }

  function handleDarkLightMode(){
    const newAppClass = mode === "App light" ? "App dark" : "App light"  //3 created a terenary statement to switch the light back and fourth
    setMode(newAppClass)
  }

  // 4 passed the mode as the class name since it changes
  // 5 set the function handleDarkLightMode as the event for the click event 

  return (
    <div className= {mode} >  
      
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleDarkLightMode}> Dark Mode  </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
