import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdateAction } from '../../redux/actions/userActions';
import Notification from '../Other/Notification';
import { Form, Grid, Button, GridRow, GridColumn, Header  } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const UpdateProfile = ({location, history}) => {
    const dispatch = useDispatch();

    const [inputdisable, disableInput] = useState(false);
    const [inputbtn, disableButon] = useState(false);
    const [uValues, setUserValue] = useState({email: location.user?.email, name: location.user?.name});
    const [errors, setError] = useState({});

    const updatedProfile = useSelector(state => state.userUpdate);

    const onChangeValue = (e) => {
        const { name, value } = e.target;
        setUserValue({...uValues, [name]: value});
    };

    const updateProfile = (e) => {
        e.preventDefault();
        disableInput(true);
        dispatch(userUpdateAction(uValues));
        disableInput(false);
    };

    useEffect(() => {
        if(!location?.user){
            history.push('/profile');
        }
    },[]);

    const validate = (e) => {
        const { name, value } = e.target;
        let errors = {}, inValid = false;
        const regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name === 'name'){
            if(value === ''){
                errors.name = "Name cannot be empty";
                inValid = true;
            }
        }
        if(name === 'email'){
            if(!regEmail.test(value)){
                errors.email = "Email is not valid";
                inValid = true;
            }
        }
        setError(errors);
        disableButon(inValid);
    };


    return(
        <div style={{marginTop: 20}}>
        {updatedProfile.message?.content && <Notification message={updatedProfile.message}/> }    
        <Grid>
            <GridRow centered style={{marginTop: 20}}>
                <GridColumn width={8}>
                    <Form onSubmit={updateProfile}>
                        <Form.Field>
                        <label>Name</label>
                        <input 
                            value={uValues.name}
                            disabled={inputdisable}
                            onChange={e => onChangeValue(e)}
                            onBlur={e => validate(e)}
                            required={true}
                            type='text'
                            name='name'
                            placeholder='username'
                        />
                        </Form.Field>
                        <Form.Field>
                        <label>Email Addresss</label>
                        <input
                         value={uValues.email}
                         disabled={inputdisable}
                         onChange={e => onChangeValue(e)}
                         onBlur={e => validate(e)}
                         type='email'
                         id='form-input-control-error-email'
                         name='email'
                         required={true}
                         placeholder='email address'
                         error={{
                            content: 'Please enter a valid email address',
                            pointing: 'below',
                          }}
                        />
                        </Form.Field>
                        {updatedProfile.loading ? 
                        (<Button loading primary disabled content='Update' icon='check' labelPosition='left'/>) : 
                        (<> 
                        <Button type='submit' content='Update' icon='check' labelPosition='left' primary/>
                        <Button color='red' as={Link} to={'/profile'} content='Cancel' icon='cancel' labelPosition='left'/>
                        </>)
                        }
                        
                        

                    </Form>
                </GridColumn>
            </GridRow>
        </Grid>
       </div>
    );
};

export default UpdateProfile;