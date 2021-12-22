import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserRepoType } from '../../../api/githubAPI';
import locale from '../../../assets/rc-pagination/Locale/en_US';
import { setCurrentPage, setRepos } from '../../../redux/reducer';
import { AppRootStateType } from '../../../redux/store';
import Pagination from 'rc-pagination';

const Repos = () => {
    const state = useSelector((state: AppRootStateType) => state.reducer);
    const dataUser = state.userData;
    const repos = state.reposData;
    const reposLength = dataUser.public_repos;
    const currentPage = state.currentPage;
    const perPage = state.perPage;
    const userName = dataUser.login;

    const dispatch = useDispatch();

    // Change page
    const paginate = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(setRepos(userName, perPage, pageNumber));
    };

    return (
        <div className={reposLength !== 0 ? "repositories" : "repositories center"}>
            {reposLength !== null && reposLength > 0 ? <>
                    <h3>Repositories <span>({reposLength})</span></h3>

                    <ul className="repositories__list">
                        {
                            repos.map((repo: UserRepoType) => {
                                return (
                                    <li key={repo.id} className="repositories__item">
                                        <a rel="noreferrer" target="_blank" href={repo.html_url}>{repo.name}</a>
                                        <p>{repo.description}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="repositories__pagination pagination">

                        <Pagination
                            className="ant-pagination"
                            showTitle={false}
                            current={currentPage}
                            onChange={(e) => paginate(e)}
                            defaultCurrent={currentPage}
                            defaultPageSize={perPage}
                            total={reposLength as number}
                            showTotal={(total, range) => {
                                return `${range[0]} - ${range[1]} of ${total} items`
                            }}
                            locale={locale}
                        />
                    </div>
                </>
                :
                <div className="page">
                    <svg width="110" height="110" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M31.5 24C23.4919 24 17 30.4919 17 38.5V71.5C17 79.5081 23.4919 86 31.5 86H78.5C86.5081 86 93 79.5081 93 71.5V38.5C93 30.4919 86.5081 24 78.5 24H31.5ZM26 38.5C26 35.4624 28.4624 33 31.5 33H78.5C81.5376 33 84 35.4624 84 38.5V71.5C84 74.5376 81.5376 77 78.5 77H31.5C28.4624 77 26 74.5376 26 71.5V38.5ZM65.1984 48.6422C66.37 47.4706 66.37 45.5711 65.1984 44.3995C64.0268 43.228 62.1274 43.228 60.9558 44.3995L55.2989 50.0564L49.6421 44.3995C48.4705 43.228 46.571 43.228 45.3994 44.3995C44.2279 45.5711 44.2279 47.4706 45.3994 48.6422L51.0563 54.299L45.3994 59.9559C44.2279 61.1274 44.2279 63.0269 45.3994 64.1985C46.571 65.3701 48.4705 65.3701 49.6421 64.1985L55.2989 58.5417L60.9558 64.1985C62.1273 65.3701 64.0268 65.3701 65.1984 64.1985C66.37 63.0269 66.37 61.1274 65.1984 59.9559L59.5416 54.299L65.1984 48.6422Z"
                            fill="currentColor" />
                    </svg>

                    <p>
                        Repository list is empty
                    </p>
                </div>}

        </div>
    );
};

export default Repos;