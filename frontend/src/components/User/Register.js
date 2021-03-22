import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../redux/actions/userActions';
import Notification from '../Other/Notification';


const RegisterUser = ({history}) => {

    const [inputdisable, disableInput] = useState(false);
    const [username, setUsername] = useState('');
    const [emailaddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const state = useSelector(state => state.userRegister);

    const { loading, error, token } = state;


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
        <div className="col-md-6 offset-md-3">
            <div className="container" style={{marginTop: 40}}>
                {error && <Notification error={error} />}
                <form onSubmit={registerUser}>
                    <fieldset>
                        <div className='form-group'>
                            <label>NAME</label>
                            <input
                            value={username}
                            disabled={inputdisable}
                            onChange={e => setUsername(e.target.value)}
                            type='text'
                            className='form-control'
                            id='exampleInputUsername1'
                            aria-describedby='emailHelp'
                            placeholder='username'
                            />
                        </div>
                        <div className='form-group'>
                            <label>EMAIL ADDRESS</label>
                            <input
                            value={emailaddress}
                            disabled={inputdisable}
                            onChange={e => setEmailAddress(e.target.value)}
                            type='email'
                            className='form-control'
                            id='exampleInputEmail1'
                            placeholder='email address'
                            />
                        </div>
                        <div className='form-group'>
                            <label>PASSWORD</label>
                            <input
                            value={password}
                            disabled={inputdisable}
                            onChange={e => setPassword(e.target.value)}
                            type='password'
                            className='form-control'
                            id='exampleInputPassword1'
                            placeholder='password'
                            />
                        </div>
                        <button type='submit' style={{width: 80}} disabled={inputdisable} className='btn btn-warning m-auto'>
                           { loading ? <i className="fa fa-spinner fa-pulse fa-fw"></i> : 'Register'}
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};


export { RegisterUser };