import React from 'react';
import { useSelector } from 'react-redux';
import { UserRepoType } from '../../../api/githubAPI';
import { AppRootStateType } from '../../../redux/store';

const Repos = () => {
    const state = useSelector((state: AppRootStateType) => state.reducer);
    const dataUser = state.userData;
    const repos = state.reposData;


    return (
        <div className="repositories">
            <h3>Repositories <span>({dataUser.public_repos})</span></h3>

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
                pagination
            </div>
        </div>
    );
};

export default Repos;