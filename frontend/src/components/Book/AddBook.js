import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBookAction } from '../../redux/actions/bookActions';
import Notification from '../Other/Notification';

const AddBook = ({history}) => {

    const [category, setCategory] = useState('programming');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [inputdisable, disableInput] = useState(false);

    const { loading , message } = useSelector(state => {
      return state.bookCreated;
    });

    const dispatch = useDispatch();

    //handle form submit 
    const submitBook = (e) => {
        e.preventDefault();
        disableInput(true);

        var obj = {
            category,
            title,
            author
        };

        dispatch(createBookAction(obj));
        disableInput(false);
        setTitle('');
        setAuthor('');
    };

    
    
  return (
      <div className="col-md-6 offset-md-3" style={{marginTop: 40}}>
        {message?.content && <Notification message={message}/>}
        <div className="container">
          <form onSubmit={submitBook}>
            <fieldset>
              <div className='form-group'>
                <label>CATEGORY</label>
                <select
                  value={category}
                  disabled={inputdisable}
                  onChange={e => setCategory(e.target.value) }
                  className='custom-select'>
                  <option defaultValue='programming'>programming</option>
                  <option defaultValue='religion'>Religion</option>
                  <option defaultValue='life'>life</option>
                  <option defaultValue='culture'>culture</option>
                </select>
              </div>
              <div className='form-group'>
                <label>AUTHOR</label>
                <input
                  value={author}
                  disabled={inputdisable}
                  onChange={e => setAuthor(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Author name'
                />
              </div>
              <div className='form-group'>
                <label>TITLE</label>
                <input
                  value={title}
                  disabled={inputdisable}
                  onChange={e => setTitle(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Book title'
                />
              </div>
              <button type='submit' style={{width: 105}} disabled={inputdisable} className='btn btn-warning m-auto'>
                { loading === true ? <i className="fa fa-spinner fa-pulse fa-fw"></i> : 'Create Book' }
              </button>&nbsp;&nbsp;
              <button onClick={() =>history.push('/books') } disabled={inputdisable} className='btn btn-danger m-auto'>
                Cancel
              </button>
            </fieldset>
          </form>
       </div>
    </div>
  );
};

export default AddBook;