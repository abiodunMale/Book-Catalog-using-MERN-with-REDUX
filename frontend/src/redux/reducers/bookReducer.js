import { 
    CREATE_BOOK_FAIL, 
    CREATE_BOOK_REQUEST, 
    CREATE_BOOK_SUCCESS, 
    FETCH_BOOK_REQUEST, 
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAIL,
    SINGLE_BOOK_REQUEST,
    SINGLE_BOOK_SUCCESS,
    SINGLE_BOOK_FAIL,
    BOOK_UPDATE_REQUEST,
    BOOK_UPDATE_SUCCESS,
    BOOK_UPDATE_FAIL
 } from "../actionTypes";

const createBookReducers = (state={}, action) => {
    switch(action.type){
        case CREATE_BOOK_REQUEST:
            return {
                loading: true
            };
        case CREATE_BOOK_SUCCESS:
            return {
                book: action.payload.data,
                message: {
                    type: 'success',
                    content: action.payload.message
                }
            };
        case CREATE_BOOK_FAIL:
            return{
                loading: false,
                message: {
                    type: 'fail',
                    content: action.payload
                }
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
                book: action.payload
            };
        case FETCH_BOOK_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    content: action.payload
                }
            };
        default:
            return state;
    }
};


const singleBookReducers = (state={}, action) => {
    switch (action.type) {
        case SINGLE_BOOK_REQUEST:
            return {
                loading: true
            };
        case SINGLE_BOOK_SUCCESS:
            return {
                book: action.payload.book
            };
        case SINGLE_BOOK_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    content: action.payload
                }
            };
        default:
            return state;
    }
};

const updateBookReducers = (state={}, action) => {
    switch (action.type) {
        case BOOK_UPDATE_REQUEST:
            return {
                loading: true
            };
        case BOOK_UPDATE_SUCCESS:
            return {
                book: action.payload.data,
                message: {
                    type: 'success',
                    content: action.payload.message
                }
            };
        case BOOK_UPDATE_FAIL: 
            return {
                loading: false,
                message: {
                    type: 'fail',
                    content: action.payload
                }
            };
        default:
            return state;
    }
};

export { 
    createBookReducers, 
    bookListReducers, 
    singleBookReducers,
    updateBookReducers
};