import { MarkGithubIcon, SearchIcon } from '@primer/octicons-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData, setUserData } from '../../redux/reducer';


const Header = () => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="header__wrapper wrapper">
                <MarkGithubIcon className="header__logo logo" fill="white" size={40} />
                <label className="header__field">
                    <SearchIcon className="icon-search" size={16} />
                    <input
                        type="text"
                        placeholder="Enter Github username"
                        value={userName}
                        onChange={(e) => {setUserName(e.currentTarget.value)}}
                        onKeyPress={(e) => {
                            if(e.key === "Enter") {
                                dispatch(setData(userName))
                                dispatch(setUserData({
                                    avatar_url: "",
                                    name: "",
                                    html_url: "",
                                    login: "",
                                    followers: 0,
                                    following: 0,
                                    public_repos: 0,
                                }))
                            }
                        }}
                    />
                </label>
            </div>
        </header>
    );
};

export default Header;