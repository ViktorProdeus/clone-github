import { githubAPI, UserDataType, UserRepoType } from "../api/githubAPI";
import { AppThunkType } from "./store";

const initialState = {
    error: "",
    loading: false,
    status: false,
    userData: {} as UserDataType,
    reposData: [] as UserRepoType[]
};

type InitialStateType = typeof initialState;

const SET_USER_DATA = "main/SET_USER_DATA" as const;
const SET_REPOS_DATA = "main/SET_REPOS_DATA" as const;
const SET_LOADING = "main/SET_LOADING" as const;
const SET_ERROR = "main/SET_ERROR" as const;

export const reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                status: true,
            }

        case SET_REPOS_DATA:
        case SET_ERROR:
        case SET_LOADING:
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

// thunks
export const setData = (userName: string): AppThunkType => {
    return (dispatch) => {
        dispatch(setLoading(true))
        githubAPI.getUser(userName)
            .then(res => {
                console.log(res)
                dispatch(setUserData(res))
                dispatch(setError(""))
            })

        githubAPI.getRepos(userName)
            .then(res => {
                console.log(res)
                dispatch(setReposData(res))
            })

            .catch(res => {

                if (res.message) {
                    console.log(res.message)
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


export type ActionsType = ReturnType<typeof setUserData>
    | ReturnType<typeof setReposData>
    | ReturnType<typeof setError>
    | ReturnType<typeof setLoading>;
