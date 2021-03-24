import React from 'react';

const Book = ({book, removeBook}) => {

    return(
        <div className='col-md-3'>
            <div className='card mb-3'>
                <div className='row no-gutters'>
                    <div className='col-md-8'>
                        <div className='card-body' style={{height: 250}}>
                            Title: <p className='card-title'>{book.title}</p>
                            Category: <p className='card-text'>{book.category}</p>
                            Author: <p className='card-text'>{book.author}</p>
                            Date Created: <p className='card-text'>
                                <small className='text-muted'>{book.createdAt}</small>
                            </p>
                        </div>
                        <div style={{marginLeft: 20, marginBottom: 10}}>
                            <button className='btn btn-info'><i className="fa fa-edit"></i></button>&nbsp;&nbsp;&nbsp;<button className='btn btn-primary' onClick={ () => removeBook(book._id, book.title) }><i className="fa fa-trash-o"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    );
};


export default Book;