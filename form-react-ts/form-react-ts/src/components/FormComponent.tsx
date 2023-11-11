import React,{useRef, useState} from 'react';



interface FormComponentProps {
    onAddUsers:(name:string,email:string,)=>void
} 

const FormComponent:React.FC<FormComponentProps>=(props)=>{

    const [correctUserData,setCorrectUserData]=useState(false)
    const nameRef=useRef<HTMLInputElement>(null);
    const emailRef=useRef<HTMLInputElement>(null);
    const passRef=useRef<HTMLInputElement>(null);
   
    const handleFormSubmit=(event:React.FormEvent)=>{
        event.preventDefault();
        let enteredName=nameRef.current!.value
        let enteredEmail=emailRef.current!.value
        let enteredPass=passRef.current!.value

        if (enteredName.length<=0||enteredPass) {
            alert('Please enter a name')
        }


    
    if (enteredName&&enteredEmail&&enteredPass)  {
    props.onAddUsers(enteredName,enteredEmail);
    nameRef.current!.value=''
    emailRef.current!.value=''
    passRef.current!.value=''
    
    }

    }

return(
    
<div className="container d-flex mt-5 justify-content-center ">
    <form onSubmit={handleFormSubmit}>
        <div className="mb-3 col-md-12 ">
      
            <input type="text" className="form-control" id="nameInput" 
            ref={nameRef}
            // onChange={handleNameChange}

            placeholder="Name" />
        </div>
        <div className="mb-3 col-md-12 justify-content-center">
            
            <input type="email" className="form-control" id="emailInput" 
ref={emailRef}             
// onChange={handleEmailChange}

            placeholder="Email" />
        </div>
        <div className="mb-3 col-md-12 justify-content-center">
          
            <input type="password" className="form-control" id="passwordInput"
ref={passRef}            
//  onChange={handlePassChange}
            placeholder="Password" />
        </div>
        <div className="col-md-12">
                <button type="submit" className="btn btn-primary"
                >Submit</button>
            </div>
    </form>
</div>
)


}

export default FormComponent;