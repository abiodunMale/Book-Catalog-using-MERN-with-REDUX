import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../redux/actions/userActions';
import Notification from '../Other/Notification';
import { Form, Grid, Button, GridRow, GridColumn } from 'semantic-ui-react'


const RegisterUser = ({history}) => {

    const [inputdisable, disableInput] = useState(false);
    const [username, setUsername] = useState('');
    const [emailaddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const state = useSelector(state => state.userRegister);

    const { loading, message, token } = state;


    useEffect(() => {
        if(token){
            history.push('/profile');
        }
    }, [state])


    const registerUser = (e) => {
        e.preventDefault();
        disableInput(true);

        const user = {
            name : username,
            email : emailaddress,
            password
        };

        dispatch(registerUserAction(user))
        disableInput(false);
    };

    return(
        <div style={{marginTop: 20}}>
        {message?.content && <Notification message={message}/> }    
        <Grid>
            <GridRow centered style={{marginTop: 20}}>
                <GridColumn width={8}>
                    <Form onSubmit={registerUser}>
                        <Form.Field>
                            <label>NAME</label>
                            <input
                            value={username}
                            disabled={inputdisable}
                            onChange={e => setUsername(e.target.value)}
                            type='text'
                            required
                            className='form-control'
                            id='exampleInputUsername1'
                            aria-describedby='emailHelp'
                            placeholder='username'
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>EMAIL ADDRESS</label>
                            <input
                            value={emailaddress}
                            disabled={inputdisable}
                            onChange={e => setEmailAddress(e.target.value)}
                            type='email'
                            required
                            className='form-control'
                            id='exampleInputEmail1'
                            placeholder='email address'
                            />
                        </Form.Field>
                        <Form.Field>
                        <label>PASSWORD</label>
                            <input
                            value={password}
                            disabled={inputdisable}
                            onChange={e => setPassword(e.target.value)}
                            type='password'
                            required
                            className='form-control'
                            id='exampleInputPassword1'
                            placeholder='password'
                            />
                        </Form.Field>
                        {loading ? 
                        (<Button loading primary disabled content='Register'/>) : 
                        (
                        <Button type='submit' content='Register' primary/>
                        )
                        }
                    </Form>
                </GridColumn>
            </GridRow>
        </Grid>
       </div>
    );
};


export { RegisterUser };