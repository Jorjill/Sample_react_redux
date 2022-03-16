import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const Info = () => {

    const {id} = useParams();

    const isAuth = useSelector(state => state.user.user);

    const employeeFiltered = useSelector((state)=>{
        const allEmployees = state.employees.allEmployees;
        return allEmployees.filter((employee)=>employee.id==id);
    });

    const employee = employeeFiltered[0];

    if(!isAuth){
        return <Navigate to="/" replace/>
    }

    return(
        <div>
            <h1>{employee.name}</h1>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <p>{employee.address.city}</p>
            <p>{employee.username}</p>
            <p>{employee.email}</p>
            <p>{employee.phone}</p>
            <p>{employee.website}</p>
        </div>
    )
}

export default Info;