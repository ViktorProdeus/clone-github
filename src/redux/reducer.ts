import { githubAPI, UserDataType, UserRepoType } from "../api/githubAPI";
import { AppThunkType } from "./store";

const initialState = {
    currentPage: 1,
    perPage: 5,
    error: "",
    loading: false,
    status: false,
    userData: {} as UserDataType,
    reposData: [] as UserRepoType[]
};

export type reducerStateType = typeof initialState;

const SET_USER_DATA = "main/SET_USER_DATA" as const;
const SET_REPOS_DATA = "main/SET_REPOS_DATA" as const;
const SET_LOADING = "main/SET_LOADING" as const;
const SET_ERROR = "main/SET_ERROR" as const;
const SET_STATUS = "main/SET_STATUS" as const;
const SET_CURRENT_PAGE = "main/SET_CURRENT_PAGE" as const;
const SET_PER_PAGE = "main/SET_PER_PAGE" as const;

export const reducer = (state = initialState, action: ActionsType): reducerStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_REPOS_DATA:
        case SET_ERROR:
        case SET_STATUS:
        case SET_LOADING:
        case SET_PER_PAGE:
        case SET_CURRENT_PAGE:

            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}


export const setUserData = (data: UserDataType) => {
    return {
        type: SET_USER_DATA,
        payload: {userData: data}
    }
};

export const setReposData = (data: UserRepoType[]) => {
    return {
        type: SET_REPOS_DATA,
        payload: {reposData: data}
    }
};

export const setLoading = (loading: boolean) => {
    return {
        type: SET_LOADING,
        payload: {loading}
    }
};

export const setError = (error: string) => {
    return {
        type: SET_ERROR,
        payload: {error}
    }
};

export const setStatus = (status: boolean) => {
    return {
        type: SET_STATUS,
        payload: {status}
    }
};

export const setPerPage = (perPage: number) => {
    return {
        type: SET_PER_PAGE,
        payload: {perPage}
    }
};

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {currentPage}
    }
};

// thunks
export const setData = (userName: string, perPage: number, page: number): AppThunkType => {
    return (dispatch) => {
        dispatch(setLoading(true))
        githubAPI.getUser(userName)
            .then(res => {
                dispatch(setUserData(res))
                dispatch(setStatus(true))
                dispatch(setError(""))
            })
            .catch(res => {
                if (res.message) {
                    dispatch(setError(res.message))
                }

                if(res.response) {
                    dispatch(setError(res.response.data.message))
                }

                dispatch(setStatus(false))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })

        dispatch(setRepos(userName, perPage, page))
    }
}

export const setRepos = (userName: string, perPage: number, page: number): AppThunkType => {
    return (dispatch) => {
        dispatch(setLoading(true))
        githubAPI.getRepos(userName, perPage, page)
            .then(res => {
                console.log(res)
                dispatch(setReposData(res))
            })

            .catch(res => {
                if (res.message) {
                    dispatch(setError(res.message))
                }

                if(res.response) {
                    dispatch(setError(res.response.data.message))
                }
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export type SetCurrentPageType = ReturnType<typeof setCurrentPage>;


export type ActionsType = ReturnType<typeof setUserData>
    | ReturnType<typeof setReposData>
    | ReturnType<typeof setError>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setPerPage>
    | SetCurrentPageType
    | ReturnType<typeof setLoading>;
