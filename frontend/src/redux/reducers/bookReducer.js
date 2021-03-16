import { 
    CREATE_BOOK_FAIL, 
    CREATE_BOOK_REQUEST, 
    CREATE_BOOK_SUCCESS, 
    FETCH_BOOK_REQUEST, 
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAIL
 } from "../actionTypes";

const createBookReducers = (state={}, action) => {
    switch(action.type){
        case CREATE_BOOK_REQUEST:
            return {
                loading: true
            };
        case CREATE_BOOK_SUCCESS:
            return {
                loading: false,
                book : action.payload
            };
        case CREATE_BOOK_FAIL:
            return{
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

const bookListReducers = (state=[], action) => {
    switch (action.type) {
        case FETCH_BOOK_REQUEST:
            return {
                loading: true
            };
        case FETCH_BOOK_SUCCESS:
            return {
                loading: false,
                book: action.payload
            };
        case FETCH_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export { createBookReducers, bookListReducers };