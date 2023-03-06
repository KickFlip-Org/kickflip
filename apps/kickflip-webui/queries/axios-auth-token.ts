import { baseAxios } from "./axios"

export function setAuthToken(token: string | undefined) {
    // eslint-disable-next-line security/detect-possible-timing-attacks
    if (token === undefined) {
        delete baseAxios.defaults.headers.common.Authorization
    } else {
        baseAxios.defaults.headers.common.Authorization = `Bearer ${token}`
    }
}
