//reducer - action executer
const INITIAL_STATE = {
    employees:[]
  }

const accountReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "addEmployee":
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case "removeEmployee":
            const id = action.payload.id      
            return {
                ...state,
                employees: state.employees.filter((employee) => employee.id !== id)
            }
        case "emptyEmployees":
            return{
                employees: []
            }
        default:
            return state
    }   
}

export default accountReducer;