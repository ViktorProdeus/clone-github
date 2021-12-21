import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppRootStateType } from '../../../redux/store';
import Main from '../../Main/Main';

const StartPage = () => {
    const state = useSelector((state: AppRootStateType) => state.reducer);
    const status = state.status;
    const error = state.error;

    if(status) {
        return <Navigate to={"/user"}/>
    }

    if(error) {
        return <Navigate to={"/error"}/>
    }

    return (
        <Main className="center">
            <div className="page">
                <svg width="110" height="110" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M51.4937 22.9167C35.7366 22.9167 22.9167 35.7366 22.9167 51.4937C22.9167 67.2508 35.7366 80.0707 51.4937 80.0707C57.9227 80.0707 63.8453 77.9147 68.6182 74.3235L80.2002 85.9021C80.9863 86.6881 82.0194 87.0834 83.0511 87.0834C84.0828 87.0834 85.1159 86.6881 85.902 85.902C87.4784 84.3256 87.4783 81.7766 85.902 80.2002L74.3235 68.6182C77.9147 63.8453 80.0707 57.9227 80.0707 51.4937C80.0707 35.7366 67.2508 22.9167 51.4937 22.9167ZM30.9814 51.4937C30.9814 40.1816 40.1816 30.9814 51.4937 30.9814C62.8058 30.9814 72.006 40.1816 72.006 51.4937C72.006 62.8058 62.8058 72.006 51.4937 72.006C40.1816 72.006 30.9814 62.8058 30.9814 51.4937Z"
                        fill="currentColor" />
                </svg>

                <p>
                    Start with searching
                    <br />a GitHub user
                </p>
            </div>
            <Outlet/>
        </Main>
    );
};

export default StartPage;