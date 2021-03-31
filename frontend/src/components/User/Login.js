import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/actions/userActions';
import Notification from '../Other/Notification';
import { Form, Grid, Button, GridRow, GridColumn, Header  } from 'semantic-ui-react'

const LoginUser =  ({history}) => {

    const [inputdisable, disableInput] = useState(false);
    // const [inputbtn, disableButon] = useState(true);
    const [errors, setError] = useState({});
    const [values, setValues] = useState({ email: '', pass: ''});

    const dispatch = useDispatch();

    const state = useSelector(state => {
        return state.userLogin;
    });

    const { loading, message, token } = state;

    

    const onChangeValue = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
        validation(name, value);
    };

    const validation = (name, value) => {
        let errors = {},  inValid = false;
        const regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}$/

        if(name === 'email'){
            if(value === '' || !regEmail.test(value)){
                errors.email = 'Enter a valid email address';
                inValid = true;
            }
        }
        if(name === 'pass' ){
            if(value === '' || !regPassword.test(value)){
                errors.pass = 'Enter a valid password';
                inValid = true;
            }
        }

        setError(errors);
    };

    const loginUser = (e) => {
        e.preventDefault();
        disableInput(true);
        const userinfo = {
            email: values.email,
            password: values.pass
        };

        dispatch(loginUserAction(userinfo));
        disableInput(false);
    };

    useEffect(() => {
        if(token){
            history.push('/profile');
        }   
    },[state])

    return(
        <div style={{marginTop: 20}}>
        {message?.content && <Notification message={message}/> }    
        <Grid>
            <GridRow centered style={{marginTop: 20}}>
                <GridColumn width={8}>
                    <Form onSubmit={loginUser}>
                        <Form.Field>
                        <label>EMAIL ADDRESS</label>
                        <input
                        value={values.email}
                        disabled={inputdisable}
                        name='email'
                        onChange={e => onChangeValue(e)}
                        type='email'
                        className='form-control'
                        id='emailaddress'
                        placeholder='email address'
                        required={true}
                        />
                        <p style={{color: 'red'}}>{errors.email}</p>
                        </Form.Field>
                        <Form.Field>
                        <label>PASSWORD</label>
                        <input
                        value={values.pass}
                        disabled={inputdisable}
                        onChange={e => onChangeValue(e)}
                        type='password'
                        name='pass'
                        className='form-control'
                        id='passsword'
                        required={true}
                        placeholder='password'
                        />
                        <p style={{color: 'red'}}>{errors.pass}</p>
                        </Form.Field>
                        {loading ? 
                        (<Button loading primary disabled content='Sigin' icon='right arrow' labelPosition='right'/>) : 
                        (
                        <Button type='submit' content='Sigin' icon='right arrow' labelPosition='right' primary/>
                        )
                        }
                    </Form>
                </GridColumn>
            </GridRow>
        </Grid>
       </div>
    );
};


export default LoginUser;