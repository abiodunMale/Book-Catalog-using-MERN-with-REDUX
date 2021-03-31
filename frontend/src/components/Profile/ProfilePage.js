import React, { useEffect } from 'react';
import { Card, Icon, Grid, Image, Button, Placeholder,  } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userProfileAction } from '../../redux/actions/userActions';
import Notification from '../Other/Notification';

const ProfilePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(userProfileAction());
    },[dispatch])

    const userProfile = useSelector(state => state.userProfile);
    const { user, loading, message } = userProfile;

    return (
      <div style={{marginTop: 30}}>
        {message && <Notification message={message}/> }    
        <Grid>
          <Grid.Row centered columns={4}>
            <Grid.Column>
              {loading || message?.content ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ):(
                <Image src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' size='medium' circular /> 
              )}
            </Grid.Column>
            <Grid.Column style={{marginTop: 24}}>
              <Card>
                {loading || message?.content ? (
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Header>
                        <Placeholder.Line length='very short' />
                        <Placeholder.Line length='medium' />
                      </Placeholder.Header>
                      <Placeholder.Paragraph>
                        <Placeholder.Line length='short' />
                      </Placeholder.Paragraph>
                    </Placeholder>
                  </Card.Content>
                  ):(
                  <>
                    <Card.Content>
                      <Card.Header>{user?.name}</Card.Header>
                      <Card.Meta>Joined in {user?.createdAt}</Card.Meta>
                      <Card.Description>
                        {user?.email}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Link to={'/books'}>
                        <Icon name='book' />
                        {user?.books.length} books
                      </Link>
                    </Card.Content>
                  </>
                )}
              </Card>
              <Button as={Link} to={{
                    pathname: '/profile-update',
                        user
                    }} disabled={user ? false: true} content='Edit Profile' primary/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      );
};




export { ProfilePage };