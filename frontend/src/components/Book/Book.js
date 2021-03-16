import React from 'react';

const Book = ({book}) => {
    return(
        <div className='col-md-3'>
            <div className='card mb-3'>
                <div className='row no-gutters'>
                <div className='col-md-8'>
                    <div className='card-body' style={{height: 200}}>
                        <p className='card-title'>{book.title}</p>
                        <p className='card-text'>{book.category}</p>
                        <p className='card-text'>{book.author}</p>
                        <p className='card-text'>
                            <small className='text-muted'>{book.updatedAt}</small>
                        </p>
                    </div>
                    <div style={{marginLeft: 20, marginBottom: 10}}>
                        <button className='btn btn-info'><i className="fa fa-edit"></i></button>&nbsp;&nbsp;&nbsp;<button className='btn btn-primary'><i className="fa fa-trash-o"></i></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};


export default Book;