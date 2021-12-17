import React from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../redux/store';

const User = () => {
    const dataUser = useSelector((state: AppRootStateType) => state.reducer.userData);

    return (
        <div className="user">
            <img width={280} height={280}
                 src={dataUser.avatar_url}
                 alt="user" />

            <div className="user__description">
                <h3 className="user__heading">
                    <span>{dataUser.name}</span>
                    <a target="_blank" rel="noreferrer" href={dataUser.html_url}>{dataUser.login}</a>
                </h3>

                <div className="user__followers">
                    <p>
                        <svg className="iconUsers" width="23" height="15" viewBox="0 0 23 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.028 3.73877C10.028 5.39877 8.69338 6.73877 7.02764 6.73877C5.3619 6.73877 4.01726 5.39877 4.01726 3.73877C4.01726 2.07877 5.3619 0.73877 7.02764 0.73877C8.69338 0.73877 10.028 2.07877 10.028 3.73877ZM18.0557 3.73877C18.0557 5.39877 16.7211 6.73877 15.0553 6.73877C13.3896 6.73877 12.0449 5.39877 12.0449 3.73877C12.0449 2.07877 13.3896 0.73877 15.0553 0.73877C16.7211 0.73877 18.0557 2.07877 18.0557 3.73877ZM7.02764 8.73877C4.68958 8.73877 0.00341797 9.90877 0.00341797 12.2388V13.7388C0.00341797 14.2888 0.454975 14.7388 1.00688 14.7388H13.0484C13.6003 14.7388 14.0519 14.2888 14.0519 13.7388V12.2388C14.0519 9.90877 9.3657 8.73877 7.02764 8.73877ZM14.082 8.78877C14.4332 8.75877 14.7643 8.73877 15.0553 8.73877C17.3934 8.73877 22.0795 9.90877 22.0795 12.2388V13.7388C22.0795 14.2888 21.628 14.7388 21.0761 14.7388H15.8782C15.9885 14.4288 16.0588 14.0888 16.0588 13.7388V12.2388C16.0588 10.7688 15.266 9.65877 14.1221 8.82877C14.1191 8.82574 14.116 8.8218 14.1127 8.81749C14.1051 8.80758 14.096 8.79574 14.082 8.78877Z" fill="currentColor"/>
                        </svg>

                        <span>{dataUser.followers !== null && dataUser.followers > 999 ? Math.round(dataUser.followers / 100) / 10 + "k" : dataUser.followers}</span> followers
                    </p>
                    <p>
                        <svg className="iconUser" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0553 8.73877C16.0553 10.9488 14.2591 12.7388 12.0415 12.7388C9.82383 12.7388 8.02763 10.9488 8.02763 8.73877C8.02763 6.52877 9.82383 4.73877 12.0415 4.73877C14.2591 4.73877 16.0553 6.52877 16.0553 8.73877ZM4.01379 18.7388C4.01379 16.0788 9.36224 14.7388 12.0415 14.7388C14.7207 14.7388 20.0692 16.0788 20.0692 18.7388V19.7388C20.0692 20.2888 19.6176 20.7388 19.0657 20.7388H5.01725C4.46535 20.7388 4.01379 20.2888 4.01379 19.7388V18.7388Z" fill="currentColor"/>
                        </svg>

                        <span>{dataUser.following}</span>
                        following
                    </p>
                </div>
            </div>
        </div>
    );
};

export default User;