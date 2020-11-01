import React,{ useState } from "react";
import "./App.css";
import Autocomplete from "./Autocomplete";
import ProductDetail from "./ProductDetail";


function App() {
  const [productID, setProductID] = useState(null);
  const saveProductID=(ID)=>{
  console.log("Passing from child ",ID)
  setProductID(ID)
  }

  return ( 
    <div> 
      <div className="header">
        <h2>Product Search</h2>
      </div>
    <div className="App">
        <Autocomplete saveProductID={saveProductID}/>
        <ProductDetail productId={productID}/>
      </div>
    </div> 
  );
}

export default App;
