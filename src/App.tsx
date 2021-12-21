import './App.css';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../src/redux/store';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import StartPage from './components/Pages/StartPage/StartPage';
import UserPage from './components/Pages/UserPage/UserPage';
import UserErrorPage from './components/Pages/UserErrorPage/UserErrorPage';
import Preloader from './components/Preloader/Preloader';
import PageNotFound from './components/Pages/ErrorPage/PageNotFound';


function App() {

    const state = useSelector((state: AppRootStateType) => state.reducer);
    const loading = state.loading;

    return (
        <div className="App">
            <Header />

            {loading ? <Preloader />
                :
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="user" element={<UserPage />} />
                    <Route path="error" element={<UserErrorPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            }
        </div>
    );
}

export default App;


