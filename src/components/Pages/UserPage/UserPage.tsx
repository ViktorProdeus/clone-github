import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppRootStateType } from '../../../redux/store';
import Main from '../../Main/Main';
import Repos from '../../Main/Repos/Repos';
import User from '../../Main/User/User';

const UserPage = () => {
    const state = useSelector((state: AppRootStateType) => state.reducer);
    const status = state.status;
    const error = state.error;


    if(!status) {
        return <Navigate to={"/"}/>
    }

    if(error) {
        return <Navigate to={"/error"}/>
    }

    return (
        <Main className="wrapper">
            <h1 className="visually-hidden">User page</h1>

            <User />

            <Repos/>
        </Main>
    );
};

export default UserPage;