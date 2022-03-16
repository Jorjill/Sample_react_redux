import CardList from '../components/card-list/card-list';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state/index';

export const MainPage = () => {

    const isAuth = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const { logoutUser } = bindActionCreators(actionCreators, dispatch);
    const { emptyEmployees } = bindActionCreators(actionCreators, dispatch);

    if(!isAuth){
        return <Navigate to="/" replace/>
    }

    return(
        <div>
            <CardList/>
            <button onClick={e=>{
                logoutUser();
                emptyEmployees();
            }}>Log out</button>
        </div>
    )
}