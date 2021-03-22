import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdateAction } from '../../redux/actions/userActions';
import Notification from '../Other/Notification';


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
                inValid = true
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
        <div className="col-md-6 offset-md-3">
            <div className="container" style={{marginTop: 40}}>
                { updatedProfile?.success && <Notification success={updatedProfile?.success}/>}
                { updatedProfile?.error && <Notification error={updatedProfile.error}/>}
                    <form onSubmit={updateProfile}>
                        <fieldset>
                            <div className='form-group'>
                                <label>NAME</label>
                                <input
                                value={uValues.name}
                                disabled={inputdisable}
                                onChange={e => onChangeValue(e)}
                                onBlur={e => validate(e)}
                                required={true}
                                type='text'
                                name='name'
                                className='form-control'
                                id='exampleInputUsername1'
                                aria-describedby='emailHelp'
                                placeholder='username'
                                />
                                <small className="form-text text-primary">{errors.name}</small>
                            </div>
                            <div className='form-group'>
                                <label>EMAIL ADDRESS</label>
                                <input
                                value={uValues.email}
                                disabled={inputdisable}
                                onChange={e => onChangeValue(e)}
                                onBlur={e => validate(e)}
                                type='email'
                                name='email'
                                required={true}
                                className='form-control'
                                id='exampleInputEmail1'
                                placeholder='email address'
                                />
                                <small className="form-text text-primary">{errors.email}</small>
                            </div>
                            <button type='submit' style={{width: 80}} disabled={inputbtn} className='btn btn-warning m-auto'>
                            {updatedProfile?.loading ? <i className="fa fa-spinner fa-pulse fa-fw"></i> : 'Update'}
                            </button>
                        </fieldset>
                    </form> 
            </div>
            
        </div>
    );
};

export default UpdateProfile;