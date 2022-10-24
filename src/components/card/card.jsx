import './card.css';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../../state/index';
import { Link } from 'react-router-dom';

const Card = ({person}) => {

    const {id, name, email} = person;
    const dispatch = useDispatch();

    const { addEmployee,removeEmployee } = bindActionCreators(actionCreators, dispatch);
    
    return(
        <div className='card-container' key={id}>
            <Link
                style={{ textDecoration: 'none' }} 
                to={`/person/${person.id}`} 
                key={person.id}
            >
                <div>
                    <img src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </Link>
            <button onClick={()=>addEmployee(person)}>Hire</button>
            <button onClick={()=>removeEmployee(person)}>Remove</button>
        </div>
    )
}

export default Card;