import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.github.com/",
});

export const githubAPI = {
    getUser(userName: string) {
        return instance.get<UserDataType>(`users/${userName}`)
            .then(res => {

                return {
                    avatar_url: res.data.avatar_url,
                    name: res.data.name,
                    html_url: res.data.html_url,
                    login: res.data.login,
                    followers: res.data.followers,
                    following: res.data.following,
                    public_repos: res.data.public_repos,
                }
            })

    },

    getRepos(userName: string, perPage: number, page: number) {

        return instance.get<UserRepoType[]>(`users/${userName}/repos?per_page=${perPage}&page=${page}`)
            .then(res => {
                const repos = res.data.map((repo: UserRepoType) => {
                    return {
                        id: repo.id,
                        name: repo.name,
                        html_url: repo.html_url,
                        description: repo.description,
                    }
                })

                return repos
            })
    },
}


export type UserDataType = {
    avatar_url: string
    followers: number | null
    following: number | null
    login: string
    name: string
    html_url: string
    public_repos: number | null
}

export type UserRepoType = {
    id: number
    name: string
    html_url: string
    description: string
}