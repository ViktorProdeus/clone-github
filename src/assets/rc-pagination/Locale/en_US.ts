type localeInfoType = {
    // Options.jsx
    items_per_page: string
    jump_to: string
    jump_to_confirm: string
    page: string

    // Pagination.jsx
    prev_page: string
    next_page: string
    prev_5: string
    next_5: string
    prev_3: string
    next_3: string
}


const localeInfo: localeInfoType = {
    // Options.jsx
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: '',

    // Pagination.jsx
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
};


export default localeInfo;