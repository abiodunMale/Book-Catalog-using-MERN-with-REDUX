import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userProfileAction } from '../../redux/actions/userActions';
import Books from '../Book/Books';
import Notification from '../Other/Notification';

const ProfilePage = ({ history }) => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(userProfileAction());
    },[dispatch])

    const userProfile = useSelector(state => state.userProfile);
    const { user, loading, error } = userProfile;


    return (
        <>
          <div className='col-md-12'>
            {error && <Notification error={error}/>}
            {loading ?  <h3 className='text-center' style={{marginTop: 200}}><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></h3> : 
             <> <div className='col mt-5'>
                <div className='card m-auto' style={{ width: '50%' }}>
                  <div className='card-body' style={{padding: 30}}>
                  <img style={{height: 150, width: 150, float: 'right'}} src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' alt='...' />
                    <h5 className='card-title'> 
                      <small>Email Address: {user?.email}</small>
                    </h5>
                    <p className='card-text'>
                        <small>Name: {user?.name}</small>
                    </p>
                      <p className='card-text'>
                          <small>Date Joined: {user?.createdAt}</small>
                      </p>
                      <p className='card-text'>
                          <small>Total Books: {user?.books.length}</small>
                      </p>
                    <Link to='/user-update' className='btn btn-secondary'>
                      Update profile
                    </Link>
                  </div>
                </div>
              </div>
              </>
            }

          </div>
        </>
      );
};




export { ProfilePage };