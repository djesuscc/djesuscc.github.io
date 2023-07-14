const baseUrl = process.env.REACT_APP_RICK_MORTY_URL
export const fetchData = (path) => {
    const url = `${baseUrl}/${path}`
    return fetch(url)
}