import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/actions/userActions';
import Notification from '../Other/Notification';

const LoginUser =  ({history}) => {

    const [inputdisable, disableInput] = useState(false);
    const [emailaddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const { loading, error, user } = useSelector(state => {
        return state.userLogin;
    });



    useEffect(() => {
        console.log('eamil',emailaddress);
        console.log('password ',password);
    },[emailaddress,password]);

    const loginUser = (e) => {
        e.preventDefault();
        disableInput(true);
        const user = {
            email: emailaddress,
            password
        };

        dispatch(loginUserAction(user));
        disableInput(false);
        // history.push('/profile');
    };

    return(
        <div className="col-md-6 offset-md-3">
            <div className="container" style={{marginTop: 40}}>
                {error && <Notification error={error}/> }
                <form onSubmit={loginUser}>
                    <fieldset>
                        <div className='form-group'>
                            <label>EMAIL ADDRESS</label>
                            <input
                            value={emailaddress}
                            disabled={inputdisable}
                            onChange={e => setEmailAddress(e.target.value)}
                            type='email'
                            className='form-control'
                            id='emailaddress'
                            placeholder='email address'
                            required={true}
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
                            id='passsword'
                            required={true}
                            placeholder='password'
                            />
                        </div>
                        <button type='submit' style={{width: 80}} disabled={inputdisable} className='btn btn-warning m-auto'>
                           { loading ? <i className="fa fa-spinner fa-pulse fa-fw"></i> : 'Sigin'}
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};


export default LoginUser;