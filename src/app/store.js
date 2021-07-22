import { createStore, combineReducers } from 'redux'


// Actions
////////////////////

export const addOrder = (order) => {
    return {
        type: 'addOrder',
        payload: order
    }
}

export const removeOrder = (order) => {
    return {
        type: 'removeOrder',
        payload: order
    }
}

export const removeAllOrders = () => {
    return {
        type: 'removeAllOrders'
    }
}

export const loadWorkshops = (workshops) => {
    return {
        type: 'loadWorkshops',
        payload: workshops
    }
}

export const setFilterType = (filter) => {
    return {
        type: filter
    }
}


// Reducers
////////////////////

const ordersReducer = (orders = [], action) => {
    switch (action.type) {
        case 'addOrder':
            return [...orders, action.payload]
        case 'removeOrder':
            return [orders.filter(order => order !== action.payload)]
        case 'removeAllOrders':
            return []
        default:
            return orders
    }
}


const workshopsReducer = (workshops = [], action) => {
    switch (action.type) {
        case 'loadWorkshops':
            return action.payload
        default:
            return workshops
    }
}


const filterReducer = (filter = "All", action) => {
    switch (action.type) {
        case "Backend":
            return "Backend"
        case "Frontend":
            return "Frontend"
        case "Marketing":
            return "Marketing"
        case "Design":
            return "Design"
        default:
            return "All"
    }
}


// Create store
////////////////////

export const store = createStore(combineReducers({
    orders: ordersReducer,
    workshops: workshopsReducer,
    filter: filterReducer
}))