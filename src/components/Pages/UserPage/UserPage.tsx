import React from 'react';
import Main from '../../Main/Main';
import Repos from '../../Main/Repos/Repos';
import User from '../../Main/User/User';

const UserPage = () => {
    return (
        <Main className="wrapper">
            <h1 className="visually-hidden">User page</h1>

            <User />

            <Repos/>
        </Main>
    );
};

export default UserPage;