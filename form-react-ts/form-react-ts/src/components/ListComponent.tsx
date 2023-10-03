import { User } from "./user.model";


interface ListComponentProps {
    users: User[];
    deleteItem: (index: number) => void;
  }

const ListComponent: React.FC<ListComponentProps>=(props)=>{
    
    const handleDeleteClick = (index: number) => {
     props.deleteItem(index) };
   
    return(
        <div className="container d-flex mt-5 justify-content-center ">
            <p>
            <ul>
                {props.users.map((user, index) => (
                    <li key={index} style={{ listStyleType: 'none' }}>
                        {/* <span> */}
                            {index+1} Name: {user.name}{' '}
                        Email: {user.email}
                        <button className="btn btn-secondary ms-4 mb-3" onClick={()=>handleDeleteClick(index)}>Delete</button>
                        {/* </span> */}
                    </li>
                ))}
               
            </ul>
            </p>

    </div>
    )
}

export default ListComponent;