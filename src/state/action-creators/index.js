export const addEmployee = (employee) => {
    return {
            type: "addEmployee",
            payload: employee
        }
}

export const removeEmployee = (employee) => {
    return {
            type: "removeEmployee",
            payload: employee
        }
}

export const emptyEmployees = () => {
    return {
        type: "emptyEmployees"
    }
}

export const addAllEmployees = (x) => {
    return {
        type:"addAllEmployees",
        payload: x
    }
}

export const loginUser = () => {
    return{
        type:"loginUser"
    }
}

export const logoutUser = () => {
    return{
        type:"logoutUser"
    }
}