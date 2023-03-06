import axios from "axios"

export const baseAxios = axios.create({
    baseURL: "https://api-kickflip.kickflip-workspace.dev",
})
