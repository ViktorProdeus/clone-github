import React from 'react';
import { Link } from 'react-router-dom';
import { SetCurrentPageType } from '../../redux/reducer';

type PropsType = {
    perPage: number
    totalPages: number
    paginate: (pageNumber: number) => void
}

const Pagination = ({ perPage, totalPages, paginate }: PropsType) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPages / perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <Link to="/user" onClick={() => paginate(number)}  className='page-link'>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;