import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';

const Book = ({book, removeBook}) => {

    return(
        // <div className='col-md-3'>
        //     <div className='card mb-3'>
        //         <div className='row no-gutters'>
        //             <div className='col-md-8'>
        //                 <div className='card-body' style={{height: 250}}>
        //                     Title: <p className='card-title'>{book.title}</p>
        //                     Category: <p className='card-text'>{book.category}</p>
        //                     Author: <p className='card-text'>{book.author}</p>
        //                     Date Created: <p className='card-text'>
        //                         <small className='text-muted'>{book.createdAt}</small>
        //                     </p>
        //                 </div>
        //                 <div style={{marginLeft: 20, marginBottom: 10}}>
        //                     <Link to={{ pathname: `books/edit/${book._id}`, book: book }} className='btn btn-info'><i className="fa fa-edit"></i></Link>&nbsp;&nbsp;&nbsp;<button className='btn btn-primary' onClick={ () => removeBook(book._id, book.title) }><i className="fa fa-trash-o"></i></button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        <Card>
        <Card.Content>
          <Card.Header>Title -  {book.title}</Card.Header>
          <Card.Meta>{book.category}</Card.Meta>
          <Card.Description>
          Author - {book.author}
          </Card.Description>
          <Card.Description>
          Date Created - <small>{book.createdAt}</small>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Button primary as={Link} to={{ pathname: `book/edit/${book._id}`, book: book }} content='Edit' icon='edit' labelPosition='left'/>
            <Button color='red' content='Delete' icon='cancel' labelPosition='left'/>
          </div>
        </Card.Content>
      </Card>
    );
};


export default Book;