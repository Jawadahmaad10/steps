//step number 1 import
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
    
  // Adding new piece of State
  // we do it in 3 steps

  // useState accepts an initial state and returns two values:
  // 1.The current state.
  // 2.A function that updates the state.

  //useState(1) initializes the state variable step with the value 1.
// setStep is the function used to update the value of step.

  //step number 1
  // React HOOK
 const [step , setStep] = useState(1);
 const [isOpen , setIsOpen] = useState(true);

// const [test] = useState({name:"Jawad"});
// const [test,setTest] = useState({name:"Jawad"});


   function handlePrevious(){
    //  if(step > 1) setStep(step-1);
     if(step > 1) setStep((s) => s-1);

   }

   function handleNext(){
    // if(step < 3) setStep(step + 1);
    if(step < 3) setStep((s) => s + 1);


    //Bad practice
    // test.name = "khan";

    //Good practice

    // setTest({ name: "Fred"});
   }

  return (
    <>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button> */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
    
     { isOpen &&(
     <div className="steps">
      <div className="numbers">
      <div className={step >=1 ? "active" : ""}>1</div>
      <div className={step >=2 ? "active" : ""}>2</div>
      <div className={step >=3 ? "active" : ""}>3</div>
    </div>


    <p className="message">
      Step {step} : {messages[step-1]}
      {/* {test.name}  */}
    </p>

     <div className="buttons">
      <button style={{backgroundColor: '#7950f2' , color: "#fff"}} 
      // onClick={() => alert("Previous")} 
      onClick={handlePrevious}
      // onMouseEnter={() => alert("Test")}
      >Previous</button>
      <button style={{backgroundColor: '#7950f2' , color: "#fff"}} 
      onClick={handleNext} >Next</button>
     </div>
  </div>)
    }
  </>
);
}
