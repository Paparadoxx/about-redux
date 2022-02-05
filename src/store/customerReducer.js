
const defaultState = {
	customers: []
 }
export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
	  case "ADD_CUSTOMER" : 
		 return {...state, customers:state.customers + action.payload}
	  case "GET_CUSTOMERS" : 
		 return {customers: state.customers}
	  default:
		 return state
	}
 }