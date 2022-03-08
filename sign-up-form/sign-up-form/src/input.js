import React, {useEffect, useState} from 'react'
import "./input.css"

//enter to get alert
const Input =()=> {
  React.useEffect(() =>{
    

    window.addEventListener("keydown", (e)=>{  

      const fN = document.querySelector(".fn");
      const lN = document.querySelector(".ln");
      
      if (e.code === "Enter"){
        if(fN.value || lN.value != null || undefined || ''){
          
          
          alert(`Is your name ${fN.value} ${lN.value} by any chance?`)
        }
      }
    });
  }, [])

  return (
  <>
    <label>First Name
      <input className='fn' />
    </label>

    <label>Last Name
      <input className='ln' />
    </label>

    <label type = "email">Email
      <input className='email'/>
    </label>

    <label>Phone
      <input className='phone'/>
    </label>

    <label type= "password">Password
      <input className='password'/>
    </label>
    
    <label type= "password">Confirm Password
      <input className='confpass'/>
    </label>

  </>)
}
export default Input;