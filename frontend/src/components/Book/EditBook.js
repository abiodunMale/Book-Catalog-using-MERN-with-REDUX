import { compareSync } from 'bcryptjs';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookUpdateAction, singleBookAction } from '../../redux/actions/bookActions';
import { BOOK_UPDATE_SUCCESS } from '../../redux/actionTypes';
import { Form, Grid, Button, GridRow, GridColumn, Loader, Dimmer} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Notification from '../Other/Notification';


const EditBook = ({match, history}) => {

    const { id } = match.params;

    const [inputdisable, setInputdisable] = useState(false);
    const [category , setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const { book, loading } = useSelector(state => state.singleBook);
    const state = useSelector(state => state.updatedBook);


    useEffect(() => {
        dispatch(singleBookAction(id));
    },[]);

    useEffect(() => {
      setAuthor(book?.author);
      setCategory(book?.category);
      setTitle(book?.title);
    },[book]);

    const submitBookUpdate = (e) => {
        e.preventDefault();

        const bookdata = {
          author,
          title,
          category
        };

        dispatch(bookUpdateAction(bookdata, book?._id));

        if(state.message?.type === 'success'){
          setTimeout(() => {
            history.push('/books')
          }, 3000);
        }

    };

    return(
      <div style={{marginTop: 50}}>
        {state.message && <Notification message={state.message} />}
        <Grid>
            <GridRow centered>
                <GridColumn width={8}>
                {loading ?           
                  <Dimmer active inverted style={{marginTop: 150}}>
                    <Loader inverted size='large'>Loading</Loader>
                  </Dimmer> : 
                  <Form onSubmit={submitBookUpdate}>
                      <Form.Field>
                      <label>CATEGORY</label>
                      <select
                        value={category || ""}
                        disabled={inputdisable}
                        onChange={e => setCategory(e.target.value) }
                        id='form-input-control-error-email'
                        className='custom-select'>
                        <option defaultValue='programming'>programming</option>
                        <option defaultValue='religion'>Religion</option>
                        <option defaultValue='life'>life</option>
                        <option defaultValue='culture'>culture</option>
                      </select>
                      </Form.Field>
                      <Form.Field>
                      <label>AUTHOR</label>
                      <input
                        value={author || ""}
                        disabled={inputdisable}
                        onChange={e => setAuthor(e.target.value)}
                        type='text'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='Author name'
                      />
                      </Form.Field>
                      <Form.Field>
                      <label>TITLE</label>
                      <input
                        value={title || ""}
                        disabled={inputdisable}
                        onChange={e => setTitle(e.target.value)}
                        type='text'
                        className='form-control'
                        id='exampleInputPassword1'
                        placeholder='Book title'
                      />
                      </Form.Field>
                      {state?.loading ? 
                        (<Button loading primary disabled content='Update' icon='check' labelPosition='left'/>) : 
                        (<> 
                        <Button type='submit' content='Update' icon='check' labelPosition='left' primary/>
                        <Button color='red' as={Link} to={'/books'} content='Cancel' icon='cancel' labelPosition='left'/>
                        </>)
                      }
                  </Form> 
                }
                </GridColumn>
            </GridRow>
        </Grid>
      </div>
    );
};


export default EditBook;