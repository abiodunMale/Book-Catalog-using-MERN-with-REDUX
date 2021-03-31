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


const Books = ({history}) => {
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
        // <div className='col-md-12'>
        //     <div className="col-md-6 offset-md-3" style={{marginTop: 20}}>
        //         {message?.content && <Notification message={message}/>}
        //     </div>
        //     {loading ? 
        //      <h3 className='text-center' style={{marginTop: 200}}><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></h3> : 
        //      books ? <> <button onClick={() => history.push('/addbook')} className='btn btn-warning' style={{marginTop: 15, marginLeft: 20}}><i className="fa fa-plus"></i> NEW BOOK</button> <div className='card-group' style={{marginTop: 50}}> {books?.map((item, index) => <Book key={index} removeBook={removeBook} book={item}/>)} </div> </> : 
        //      <h3 className='text-center'>No book found!!</h3>
        //      }

        // </div>
        <div style={{marginTop: 20}}>
            <Grid centered>
                <Grid.Column width={15}>
                    {/* <Segment> */}
                    {loading ? <> 
                   <CardHolder/>
                    </>: 
                        books ? <> <Card.Group> {books?.map((item, index) => 
                            
    
                            <Book key={index} removeBook={removeBook} book={item}/>
    
                            
                            )}</Card.Group> </> : 
                       'no book found'
                    }
                    {/* </Segment> */}
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default Books;