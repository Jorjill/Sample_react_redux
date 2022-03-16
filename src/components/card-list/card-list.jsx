import Card from '../card/card';
import './card-list.css';
import { useSelector } from 'react-redux';

const CardList = () => {

    const allEmployees = useSelector(state => state.employees.allEmployees);
    const myEmployees = useSelector(state => state.account.employees);

    return(
        <div>
            <h1>Business Networking</h1>
            <p>You hired:</p>
            {myEmployees.map((employee)=>{return <p key={employee.id}>{employee.name}</p>})}
            <div className='card-list'>
                {
                    allEmployees.map((person)=>{
                        return <Card person={person} key={person.id}/>
                    })
                }
            </div>
        </div>
    )

};

export default CardList;