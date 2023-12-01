// store.js
import { createStore } from "redux";

const initialState = {
	form1: {},
	form2: {},
	form3: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_FORM1":
			return { ...state, form1: action.payload };
		case "UPDATE_FORM2":
			return { ...state, form2: action.payload };
		case "UPDATE_FORM3":
			return { ...state, form3: action.payload };
		default:
			return state;
	}
};

const store = createStore(rootReducer);

export default store;
