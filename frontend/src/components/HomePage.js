import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAction } from '../redux/actions/bookActions';
import CardHolder from './Other/CardPlaceHolder';
import { Grid, Segment, Card, Button, Placeholder } from 'semantic-ui-react';
import Notification from './Other/Notification';

const HomePage = () => {

    const dispatch = useDispatch();

    const state = useSelector(state => state.bookList);
    const { loading , message, book } = state;

    useEffect(() => {
        dispatch(fetchBooksAction());
    },[dispatch]);

    return(
        // <div className='col-md-12'>
        //     {loading ? 
        //      <h3 className='text-center' style={{marginTop: 200}}><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></h3> : 
        //      book ? 
        //      <div className='card-group' style={{marginTop: 50}}> 
        //         {book.map((item, index) =>
        //             <div className='col-md-3' key={index}>
        //                 <div className='card mb-3'>
        //                     <div className='row no-gutters'>
        //                     <div className='col-md-8'>
        //                         <div className='card-body' style={{height: 300}}>
        //                         <small>Title:</small> <p className='card-title'>{item.title}</p>
        //                         <small>Category:</small> <p className='card-text'>{item.category}</p>
        //                         <small>Author:</small> <p className='card-text'>{item.author}</p>
        //                         <small>Posted By:</small> <p className='card-text'>{item.createdBy?.name}</p>
        //                         <small>Date Created:</small> <p className='card-text'>{item.createdAt}</p>
        //                         </div>
        //                     </div>
        //                     </div>
        //                 </div>
        //             </div> 
        //         )} 
        //      </div> : 
        //      <h3 className='text-center'>No book found!!</h3>
        //      }
        // </div>
        <div style={{marginTop: 20}}>
            {message?.content && <Notification message={message}/>}
            <Grid centered>
                <Grid.Column width={15}>
                    {loading ? 
                        <> 
                            <CardHolder/>
                        </> : 
                        book ? 
                        <> 
                            <Card.Group> 
                                {book?.map((item, index) => 
                                   <Card key={index}>
                                        <Card.Content>
                                            <Card.Header>Title -  {item.title}</Card.Header>
                                            <Card.Meta>{item.category}</Card.Meta>
                                            <Card.Description>
                                                Author - {item.author}
                                            </Card.Description>
                                            <Card.Description>
                                                Date Created - <small>{item.createdAt}</small>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
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



export { HomePage };