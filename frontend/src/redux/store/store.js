import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { bookListReducers, createBookReducers } from '../reducers/bookReducer';


const middleware = [thunk];

const reducer = combineReducers({
    bookCreated: createBookReducers,
    bookList: bookListReducers
});

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export { store };

