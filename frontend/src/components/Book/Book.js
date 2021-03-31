import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';

const Book = ({book, removeBook}) => {

    return(
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
            <Button color='red' onClick={ () => removeBook(book._id, book.title) } content='Delete' icon='cancel' labelPosition='left'/>
          </div>
         </Card.Content>
      </Card>
    );
};


export default Book;