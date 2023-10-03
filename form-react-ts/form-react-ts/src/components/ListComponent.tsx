import { User } from "./user.model";


interface ListComponentProps {
    users: User[];
  }

const ListComponent=({users}:ListComponentProps)=>{
   
    return(
        <div className="container d-flex mt-5 justify-content-center ">
            <p>
            <ul>
                {users.map((user, index) => (
                    <li key={index} style={{ listStyleType: 'none' }}>
                        <p>{index+1} Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                      
                    </li>
                ))}
            </ul>
            </p>

    </div>
    )
}

export default ListComponent;