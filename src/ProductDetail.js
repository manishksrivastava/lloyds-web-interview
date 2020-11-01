import React, { useState, useEffect } from "react";
import { fetchProductDetail } from "./utils/api";
import "./ProductDetail.css";

function ProductDetail(props) {
  const [productInfo, setProductInfo] = useState(null);
  const productId = props.productId;
  const [showProduct, setShowProduct] = useState(false); 
  const [errorMessage, setErrorMessage] = useState("");
  //const [loading, setLoding] = useState(false);

  useEffect(() => {
    console.log('useEffect', productId)
    if (!productId) return;   
    fetchProductDetail(productId).then((result) =>{ 
      console.log('(typeof productInfo',typeof result)    
      if (typeof result === 'string' )
      {
        
        setErrorMessage(`Server error!!.Please contact administrator.Error message: ${result}`)
        setShowProduct(false)
       }
       else
       {
        console.log('else productInfo',result)        
        setProductInfo(result)
        setShowProduct(true)
        console.log('after setting ',productInfo)
       } 
      
    }
    )
      .catch((error) => {
        setShowProduct(false)
        setErrorMessage(`Server error !!.Please contact administrator.Error message: ${error}`)
      });
  }, [productId]);

  const renderProductInfo = () => {
    console.log('renderProductInfo',errorMessage, showProduct, productInfo)
    return (
      <>
      { errorMessage ===''?( showProduct &&(
      <div className="detail-container">
        <div className="row">
          <img src={productInfo.image} className="product-image" />
        </div>
        <div className="row">
          <div className="row-title">Name:</div>
          <div className="row-body">{productInfo.title}</div>
        </div>
        <div className="row">
          <div className="row-title">Description:</div>
          <div className="row-body">{productInfo.description}</div>
        </div>
        <div className="row">
          <div className="row-title">Price:</div>
          <div className="row-body">{productInfo.price}</div>
        </div>
      </div>
      )):(
        <div class="error-message">
            <em>{errorMessage}</em>
      </div>
      )
    }
      </>
    );
  };

  return  renderProductInfo();
}

export default ProductDetail;
