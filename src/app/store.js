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

export const setSidebar = (active) => {
    return {
        type: 'setSidebar',
        payload: active
    }
}

export const setAmount = ({ workshop, amount }) => {
    return {
        type: 'setAmount',
        payload: { workshop, amount }
    }
}


// Reducers
////////////////////

const ordersReducer = (orders = [], action) => {
    switch (action.type) {
        case 'addOrder':
            const newArrayAdd = [...orders];
            const indexAdd = orders.findIndex(o => o.workshop === action.payload);

            if (indexAdd !== -1) {
                newArrayAdd[indexAdd].amount += 1;
            } else {
                newArrayAdd.push({
                    workshop: action.payload,
                    amount: 1
                })
            }

            return newArrayAdd
        case 'removeOrder':
            return orders.filter(o => o.workshop !== action.payload)
        case 'removeAllOrders':
            return []
        case 'setAmount':
            const newArrayAddAmount = orders.filter(w => w.workshop !== action.payload.workshop);

            newArrayAddAmount.push({
                workshop: action.payload.workshop,
                amount: action.payload.amount
            })

            return newArrayAddAmount
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
        case "All":
            return "All"
        case "Backend":
            return "Backend"
        case "Frontend":
            return "Frontend"
        case "Marketing":
            return "Marketing"
        case "Design":
            return "Design"
        default:
            return filter
    }
}

const sidebarReducer = (sidebar = false, action) => {
    switch (action.type) {
        case 'setSidebar':
            return action.payload
        default:
            return sidebar
    }
}


// Create store
////////////////////

export const store = createStore(combineReducers({
    orders: ordersReducer,
    workshops: workshopsReducer,
    filter: filterReducer,
    sidebar: sidebarReducer
}))