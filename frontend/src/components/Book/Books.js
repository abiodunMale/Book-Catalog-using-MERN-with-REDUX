import React, { useEffect } from 'react';
import { useDispatch, useSelector }  from 'react-redux';
import { fetchBooksAction } from '../../redux/actions/bookActions';
import Book from './Book';


const Books = ({history}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooksAction());
    }, [dispatch]);

    const {book, loading} = useSelector(state => {
        return state.bookList;
    });


    return(
        <div className='col-md-12'>
            {loading ? 
             <h3 className='text-center' style={{marginTop: 200}}><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></h3> : 
             book ? <> <button onClick={() => history.push('/addbook')} className='btn btn-warning' style={{marginTop: 15, marginLeft: 20}}><i className="fa fa-plus"></i> NEW BOOK</button> <div className='card-group' style={{marginTop: 50}}> {book.map((item, index) => <Book key={index} book={item}/>)} </div> </> : 
             <h3 className='text-center'>No book found!!</h3>
             }
        </div>
    );
};

export default Books;