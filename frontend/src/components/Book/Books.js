import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector }  from 'react-redux';
import { deleteBookAction, fetchBooksAction } from '../../redux/actions/bookActions';
import { userProfileAction } from '../../redux/actions/userActions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Book from './Book';
import Notification from '../Other/Notification';
import { Grid, Segment, Card, Button, Placeholder } from 'semantic-ui-react';
import CardHolder from '../Other/CardPlaceHolder';


const Books = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userProfileAction());
    }, [dispatch]);

    const userProfile = useSelector(state => state.userProfile);
    const { books, loading, message } = userProfile;

    const removeBook = (id, title) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure delete book with title: '+title,
            buttons: [
              {
                label: 'Yes',
                onClick: () => confrimDeleteBook(id)
              },
              {
                label: 'No',
                onClick: () => console.log('no')
              }
            ]
        });
    };

    
    const confrimDeleteBook  = (id) => {
        dispatch(deleteBookAction(id));
    };


    return(
        <div style={{marginTop: 20}}>
            {message?.content && <Notification message={message}/>}
            <Grid centered>
                <Grid.Column width={15}>
                    {loading ? 
                        <> 
                            <CardHolder/>
                        </> : 
                        books ? 
                        <> 
                            <Card.Group> 
                                {books?.map((item, index) => 
                                    <Book key={index} removeBook={removeBook} book={item}/>
                                )}
                            </Card.Group> 
                        </> : 
                       'no book found'
                    }
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default Books;