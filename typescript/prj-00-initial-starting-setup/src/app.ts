interface Validatable{
    value:string|number;
    required?:boolean;
    minLength?:number;
    maxLength?:number;
    min?:number;
    max?:number;
}
function validate(validatableInput:Validatable){
    let isValid=true

    if(validatableInput.required){
        isValid=isValid&&validatableInput.value.toString().trim().length!==0
    }

    if(validatableInput.minLength!=null && typeof validatableInput.value==='string')
   { isValid=isValid&&validatableInput.value.length>validatableInput.minLength}

   if(validatableInput.maxLength!=null&&typeof validatableInput.value==="string")
   {isValid=isValid&&validatableInput.value.length<validatableInput.maxLength}


   if(validatableInput.min!=null&&typeof validatableInput.value==="number"){
    isValid=isValid&&validatableInput.value>=validatableInput.min
   }

   if(validatableInput.max!=null&&typeof validatableInput.value==="number"){
    isValid=isValid&&validatableInput.value<=validatableInput.max
   }    return isValid
    }

function ProjectInput1(){
const templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
const hostElement = document.getElementById('app')! as HTMLDivElement;
const importedNode = document.importNode(templateElement.content, true);


const element = importedNode.firstElementChild as HTMLFormElement;
element.id = 'user-input';

const titleInputElement = importedNode.querySelector('#title')! as HTMLInputElement;
const descriptionInputElement = element.querySelector('#description')! as HTMLInputElement;
const peopleInputElement = element.querySelector('#people')! as HTMLInputElement;


hostElement.insertAdjacentElement('afterbegin', element);



const gatherUserInput=():[string,string,number]|void=>{
    const enteredTitle = titleInputElement.value;
    const enteredDescription = descriptionInputElement.value;
    const enteredPeople = peopleInputElement.value;

    const titleValidatable:Validatable={
        value:enteredTitle,
        required:true,      
    }
    const descriptionValidatable:Validatable={
        value:enteredDescription,
        required:true,
    }
    const peopleValidatable:Validatable={
        value:+enteredPeople,
        required:true,
        min:1,
        max:5,
    }

    if (
        !validate(titleValidatable)||
        !validate(descriptionValidatable)||
    !validate(peopleValidatable)
    )
    {
        alert('Invalid Input');
        return
    }else{
        return [enteredTitle,enteredDescription,+enteredPeople];
    }
    }

    const clearInputs=()=>{
        titleInputElement.value='';
        descriptionInputElement.value='';
        peopleInputElement.value='';
    
    }

const submitHandler = (event: Event) => {

    event.preventDefault();
    const userInput=gatherUserInput();
    if(Array.isArray(userInput)){
        const [title,description,people]=userInput;
        console.log(title,description,people);
    clearInputs()
    }


}
element.addEventListener('submit',submitHandler)
}

ProjectInput1()


