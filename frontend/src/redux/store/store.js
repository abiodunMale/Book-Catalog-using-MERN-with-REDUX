import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBookReducers } from '../reducers/books/createBookReducer';


const middleware = [thunk];

const reducer = combineReducers({
    bookCreated: createBookReducers
});

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export { store };

