import React, {useState} from 'react'
import "./button.css"

const Button =()=>{



  const alertfNlN = () =>{

    const fN = document.querySelector(".fn");
    const lN = document.querySelector(".ln");

    console.log(fN)
    console.log(lN)

    
    if(fN.value || lN.value != null || undefined || ''){
  
      alert(`Is your name ${fN.value} ${lN.value} by any chance?`)
    } 
  }

  const [counter, setCounter] = useState(0);
  
  return (<button className="btn" onClick={alertfNlN} type ="button" onMouseOver= {() => setCounter(counter + 1)} >Register now! {counter} hover(s)</button>
  )
};
export default Button;
