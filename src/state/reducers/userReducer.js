const INITIAL_STATE = {
    user: false
  }

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "loginUser":
            return {...state, user: true}
        case "logoutUser":
            return {...state, user: false}
        default:
            return state
    }
}

export default userReducer;