import React from 'react';

type PropsType =  {
    children: JSX.Element[] | JSX.Element;
    className: string
}

const Main = ({children, className}: PropsType) => {
    return (
        <main className={`main ${className}`}>
            {children}
        </main>
    );
};

export default Main;