import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { reducerStateType, setData, setError, setStatus } from '../../redux/reducer';
import { AppRootStateType } from '../../redux/store';


const Header = () => {
    const [userName, setUserName] = useState<string>("");
    const state = useSelector<AppRootStateType, reducerStateType>(state => state.reducer);
    const perPage = state.perPage;
    const currentPage = state.currentPage;
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="header__wrapper wrapper">
                <Link className="linkLogo" to={"/"} onClick={() => {
                    dispatch(setStatus(false))
                    dispatch(setError(""))
                }}>
                    <svg className="header__logo logo" width="42" height="40" viewBox="0 0 42 40"
                         xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip)">
                            <path
                                d="M20.5093 0C9.16808 0 0 9.16808 0 20.5093C0 29.5756 5.87436 37.2496 14.0238 39.966C15.0424 40.1698 15.416 39.5246 15.416 38.9813C15.416 38.5059 15.382 36.8761 15.382 35.1783C9.67742 36.4007 8.48897 32.7334 8.48897 32.7334C7.57216 30.3565 6.21392 29.7453 6.21392 29.7453C4.34635 28.489 6.34975 28.489 6.34975 28.489C8.42105 28.6248 9.50764 30.5942 9.50764 30.5942C11.3413 33.7182 14.2954 32.8353 15.4839 32.292C15.6537 30.9677 16.1969 30.0509 16.7742 29.5416C12.2241 29.0662 7.43633 27.3005 7.43633 19.4227C7.43633 17.1817 8.25127 15.348 9.5416 13.9219C9.33786 13.4126 8.62479 11.3073 9.74533 8.48896C9.74533 8.48896 11.4771 7.94567 15.382 10.5942C17.0119 10.1528 18.7776 9.91511 20.5093 9.91511C22.2411 9.91511 24.0068 10.1528 25.6367 10.5942C29.5416 7.94567 31.2733 8.48896 31.2733 8.48896C32.3939 11.3073 31.6808 13.4126 31.4771 13.9219C32.8014 15.348 33.5823 17.1817 33.5823 19.4227C33.5823 27.3005 28.7946 29.0323 24.2105 29.5416C24.9576 30.1868 25.6027 31.4092 25.6027 33.3446C25.6027 36.0951 25.5688 38.3022 25.5688 38.9813C25.5688 39.5246 25.9423 40.1698 26.961 39.966C35.1104 37.2496 40.9847 29.5756 40.9847 20.5093C41.0187 9.16808 31.8166 0 20.5093 0Z"
                                fill="currentColor" />
                        </g>
                        <defs>
                            <clipPath id="clip">
                                <rect width="41.0187" height="40" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Link>

                <label className="header__field">
                    <svg className="icon-search" width="24" height="24" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.235 5C7.79706 5 5 7.79706 5 11.235C5 14.6729 7.79706 17.4699 11.235 17.4699C12.6377 17.4699 13.9299 16.9995 14.9712 16.216L17.4982 18.7422C17.6697 18.9138 17.8951 19 18.1202 19C18.3453 19 18.5707 18.9138 18.7422 18.7422C19.0862 18.3983 19.0862 17.8421 18.7422 17.4982L16.216 14.9712C16.9995 13.9299 17.4699 12.6377 17.4699 11.235C17.4699 7.79706 14.6729 5 11.235 5ZM6.75956 11.235C6.75956 8.76687 8.76687 6.75956 11.235 6.75956C13.7031 6.75956 15.7104 8.76687 15.7104 11.235C15.7104 13.7031 13.7031 15.7104 11.235 15.7104C8.76687 15.7104 6.75956 13.7031 6.75956 11.235Z"
                            fill="currentColor" />
                    </svg>

                    <input
                        type="text"
                        placeholder="Enter Github username"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.currentTarget.value)
                        }}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                dispatch(setData(userName, perPage, currentPage))
                                setUserName("")
                            }
                        }}
                    />
                </label>
            </div>
        </header>
    );
};

export default Header;