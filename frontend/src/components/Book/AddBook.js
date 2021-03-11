import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBookAction } from '../../redux/actions/books/bookActions';

const AddBook = () => {

    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');


    const dispatch = useDispatch();

    //handle form submit 
    const submitBook = (e) => {
        e.preventDefault();

        var obj = {
            category,
            title,
            author
        };

        dispatch(createBookAction(obj));
    };
    
  return (
      <div className="col-md-12">
        <div className="container">
            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
            ADD BOOK
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Book</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form onSubmit={submitBook}>
                    <fieldset>
                      <div className='form-group'>
                        <select
                          value={category}
                          onChange={e => setCategory(e.target.value) }
                          className='custom-select'>
                          <option defaultValue='programming'>
                            programming
                          </option>
                          <option defaultValue='religion'>Religion</option>
                          <option defaultValue='life'>life</option>
                          <option defaultValue='culture'>culture</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label>Author</label>
                        <input
                          value={author}
                          onChange={e => setAuthor(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Author name'
                        />
                      </div>
                      <div className='form-group'>
                        <label>title</label>
                        <input
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Book title'
                        />
                      </div>
                      <button type='submit' className='btn btn-warning m-auto'>
                        Create Book
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
       </div>
    </div>
  );
};

export default AddBook;