import React from 'react'
import "./Payment.css"

export const Payment=()=> {
  function myFunctions() {
    alert("Payment sucessfully done.")
}
  return<> 
    <div className='box'>
      <h2>Please Enter your Card Details</h2>
      <div className='boxleft'>
        <div className='photo'>
        </div><br />
        <input type="text" className='in' placeholder="Card Owner's name*" required/><br /><br />
        
        <input type="number" className='in'placeholder='Card Number*'required/><br /><br />
        <input type="password"className='small' placeholder='Enter CVV*'required/>
        <input type="date" className='small' placeholder='Enter expiry date*'required/>
        {/* <input type="submit" className='last'/> */}
        <button onClick={()=>myFunctions()}>Confirm your Payment</button>
      </div>
      <br /><br />
     
    </div>
    
  </>
}

