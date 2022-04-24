import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"

// import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

function Subtotal() {
 
  return (
    <div className='subtotal' >
        <CurrencyFormat
        renderText={(value)=> (
            <>
            <p>
{/* // part of home work//               */}
                Subtotal (0 items):
                <strong>0</strong>

            </p>
            <small className='subtotal__gift' >
                <input type="checkbox"/>This Orders contains gift
            </small>
            </>)
        
        }
        decimalScale={2}
        Value={0}  /*homdwork */
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        
        />

        <button>Proceed to checkout </button>


    </div>
  )
}

export default Subtotal;