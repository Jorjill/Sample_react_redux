// reducer - action executer
const INITIAL_STATE = {
    allEmployees:[]
  }

const employeeReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "addAllEmployees":
            return {...state, allEmployees:action.payload}
        default:
            return state
    }
}

export default employeeReducer;