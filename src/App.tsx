import './App.css';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../src/redux/store';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { HashRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import StartPage from './components/Pages/StartPage/StartPage';
import UserPage from './components/Pages/UserPage/UserPage';
import UserNotFoundPage from './components/Pages/UserNotFoundPage/UserNotFoundPage';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';
import { UserDataType } from './api/githubAPI';


function App() {

    const state = useSelector((state: AppRootStateType) => state.reducer);
    const status = state.status;
    const loading = state.loading;
    const error = state.error;
    const reposLength = state.userData.public_repos;

    if (loading) {
        return <div className="Preloader">

                <h1>...loading</h1>

        </div>
    }


    return (
        <div className="App">
            <Header />

            <Router>
                <Routes>
                    {!status ?
                        <Route path="/" element={<Navigate to="/start" />} />
                        :
                        <Route path="/start" element={<Navigate to="/user" />} />
                    }

                    {error ?
                        <Route path="/user" element={<Navigate to="/user_not_found" />} />
                        :
                        <Route path="/user_not_found" element={<Navigate to="/start" />} />
                    }

                    {(state.userData === {} as UserDataType) ?
                        <Route path="/user" element={<Navigate to="/start" />} />
                        :
                        <Route path="/user" element={<UserPage />} />
                    }

                    <Route path="/start" element={<StartPage />} />
                    <Route path="/user" element={<UserPage />} />

                    <Route path="/user_not_found" element={<UserNotFoundPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;


