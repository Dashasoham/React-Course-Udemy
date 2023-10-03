import React from 'react';
import { useRef } from "react";

// interface FormComponentProps{
//     name:string;
//     email:string;
//     password:string;
// }

const FormComponent=()=>{
    const nameInputRef=useRef<HTMLInputElement | null>(null);;
    const emailInputRef=useRef<HTMLInputElement>(null);
    const passInputRef=useRef<HTMLInputElement>(null);



    const handleBtnClick=()=>{
        alert(nameInputRef.current?.value)
        // console.log(nameInputRef.current?.value);

    }
return(
    
        

<div className="container d-flex mt-5 justify-content-center ">
    <form>
        <div className="mb-3 col-md-12 ">
      
            <input type="text" className="form-control" id="nameInput" placeholder="Name" ref={nameInputRef}/>
        </div>
        <div className="mb-3 col-md-12 justify-content-center">
            
            <input type="email" className="form-control" id="emailInput" placeholder="Email" ref={emailInputRef}/>
        </div>
        <div className="mb-3 col-md-12 justify-content-center">
          
            <input type="password" className="form-control" id="passwordInput" placeholder="Password" ref={passInputRef}/>
        </div>
        <div className="col-md-12">
                <button type="submit" className="btn btn-primary"
                onClick={handleBtnClick}>Submit</button>
            </div>
    </form>
</div>
)
}

export default FormComponent;