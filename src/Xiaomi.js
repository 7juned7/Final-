import React from 'react';
import './Xiaomi.css';


function Xiaomi(
  
) {

  function add_xiaomi(){
    document.querySelector(".xiaomi__products").classList.add("opacity");
    
  }
  function remove_xiaomi(){
    document.querySelector(".xiaomi__products").classList.remove("opacity");
    
  }
  function add_redmi(){
    document.querySelector(".xiaomi__products").classList.add("opacity");
    
  }
  function remove_redmi(){
    document.querySelector(".xiaomi__products").classList.remove("opacity");
    
  }
 
  return (
  
 
  <div className='xiaomi'>
    <div className="xiaomi__header">
    <img src="./images/xiaomi logo.svg" alt="" />     
   
        <div className="xiaomi__phones" onMouseEnter={() => {
         add_xiaomi();
        } } 
        onMouseLeave={()=>{remove_xiaomi()}}  >
            Xiaomi Phones
      <div className="xiaomi__products">
      <div className="xiaomi__product_1">
        <img src="./images/xiaomi 1.png" alt="" />
        <h2>Xiaomi V-1</h2>
        <h2>15,000</h2>
      </div>
      <div className="xiaomi__product_1">
        <img src="./images/xiaomi 1.png" alt="" />
        <h2>Xiaomi V-2</h2>
        <h2>15,000</h2>
      </div>
    </div>
         </div>
         <div className="redmi__Phones"  onMouseEnter={() => {
         add_redmi();
        } } onMouseLeave={()=>{remove_redmi()}} >Redmi Phones</div>
         <div className="redmi__products">
      <div className="redmi__product_1">
        <img src="./images/xiaomi 1.png" alt="" />
        <h2>Redmi V-1</h2>
        <h2>15,000</h2>
      </div>
      <div className="redmi__product_1">
        <img src="./images/xiaomi 1.png" alt="" />
        <h2>Redmi V-2</h2>
        <h2>15,000</h2>
      </div>
    </div>
    </div>
  
   
    </div>
   
    
  )
  
}

export default Xiaomi;