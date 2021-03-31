import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
    bookListReducers, 
    createBookReducers, 
    singleBookReducers, 
    updateBookReducers 
} from '../reducers/bookReducer';
import { 
    loginUserReducer,
     registerUserReducer, 
     userProfileReducer, 
     userUpdateReducer 
    } from '../reducers/userReducer';


const middleware = [thunk];

const reducer = combineReducers({
    bookCreated: createBookReducers,
    bookList: bookListReducers,
    userRegister: registerUserReducer,
    userLogin: loginUserReducer,
    userProfile: userProfileReducer,
    userUpdate: userUpdateReducer,
    singleBook: singleBookReducers,
    updatedBook: updateBookReducers
});


//GET USER FROM STORAGE
const userAuthFromStorage = localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')) : null ;
const intialState = {
    userLogin: {
        token : userAuthFromStorage
    }
};

const store = createStore(
    reducer,
    intialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export { store };

