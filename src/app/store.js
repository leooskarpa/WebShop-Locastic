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

export const setFilter = (filter) => {
    return {
        type: 'setFilter',
        payload: filter
    }
}


// Reducers
////////////////////

const ordersReducer = (orders = [], action) => {
    switch (action) {
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
    switch (action) {
        case 'loadWorkshops':
            return action.payload
        case 'setFilter':
            return [workshops.filter(workshop => workshop.category === action.payload)]
        default:
            return workshops
    }
}


// Create store
////////////////////

export const store = createStore(combineReducers({
    orders: ordersReducer,
    workshops: workshopsReducer
}))