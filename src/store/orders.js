import { StoreOrder } from '../api/forms/TodoListForms'
import {
    find as findLocalStorage,
    update as updateLocalStorage,
} from '../utils/localStorage'

export const ADD_ORDER = 'ADD_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'
export const EDIT_ORDER ='EDIT_ORDER'
export const RESET_ORDERS = 'RESET_ORDERS'
export const FETCH_ORDERS = 'FETCH_ORDERS'

const initOrders = () => [
  StoreOrder.create({ name: `Build a frontend app with react in JavaScript.`, price: 100, note: `` }),
  StoreOrder.create({ name: `An order should include two required fields, 'name'(text) and 'price'(number). And one multi-line text optional field 'note'.`, price: 50, note: `` }),
  StoreOrder.create({ name: `A list page to show all orders.`, price: 10, note: `` }),
  StoreOrder.create({ name: `The user can create a new order from the list page`, price: 20, note: `` }),
  StoreOrder.create({ name: `The user can edit and delete the order at the list page`, price: 30, note: `` }),
  StoreOrder.create({ name: `Upload the source code to GitHub, Bitbucket or other services. And make sure we can access the project.`, price: 10, note: `` }),
  StoreOrder.create({ name: `You can store data at the local storage.`, price: 20, note: `` }),
  StoreOrder.create({ name: `You can use any vendor packages.`, price: 10, note: `` }),
  StoreOrder.create({ name: `We don't need the API server.`, price: 10, note: `` }),
  StoreOrder.create({ name: `Please build a good architecture to integrate with RESTful APIs. Maybe we just change some code, this app will be work with API server.`, price: 200, note: `` }),
]

const initState = {
    orders: []
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ORDER: {
            const copy = [...state.orders]
            copy.push(action.payload.order)

            // TODO: Change to work with APIs
            updateLocalStorage(copy)
            return { orders: copy }
        }
        case EDIT_ORDER: {
            const copy = [...state.orders]
            const index = copy.findIndex(it => it.id === action.payload.order.id)
            copy[index] = action.payload.order

            // TODO: Change to work with APIs
            updateLocalStorage(copy)
            return { orders: copy }
        }
        case DELETE_ORDER: {
            const copy = [...state.orders].filter(it => it.id !== action.payload.id)

            // TODO: Change to work with APIs
            updateLocalStorage(copy)
            return { orders: copy }
        }
        case FETCH_ORDERS: {
            const orders = findLocalStorage() || initOrders()
            console.log(findLocalStorage())

            // TODO: Change to work with APIs
            updateLocalStorage(state.orders)
            return { orders }
        }
        case RESET_ORDERS: {
            const orders = initOrders()

            // TODO: Change to work with APIs
            updateLocalStorage(orders)
            return { orders }
        }
        default:
            return state;
    }
};
