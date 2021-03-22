import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAction } from '../redux/actions/bookActions';

const HomePage = () => {

    const dispatch = useDispatch();

    const state = useSelector(state => state.bookList);
    const { loading , error, book } = state;

    useEffect(() => {
        dispatch(fetchBooksAction());
    },[dispatch]);

    return(
        <div className='col-md-12'>
            {loading ? 
             <h3 className='text-center' style={{marginTop: 200}}><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></h3> : 
             book ? 
             <div className='card-group' style={{marginTop: 50}}> 
                {book.map((item, index) =>
                    <div className='col-md-3' key={index}>
                        <div className='card mb-3'>
                            <div className='row no-gutters'>
                            <div className='col-md-8'>
                                <div className='card-body' style={{height: 300}}>
                                <small>Title:</small> <p className='card-title'>{item.title}</p>
                                <small>Category:</small> <p className='card-text'>{item.category}</p>
                                <small>Author:</small> <p className='card-text'>{item.author}</p>
                                <small>Posted By:</small> <p className='card-text'>{item.createdBy?.name}</p>
                                <small>Date Created:</small> <p className='card-text'>{item.createdAt}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> 
                )} 
             </div> : 
             <h3 className='text-center'>No book found!!</h3>
             }
        </div>
    );
};



export { HomePage };