import { fetchData } from "../helpers/fetch";
import { types } from "../types";


export const getListCharacters = (page = 1, name = '') => {
    return async (dispatch) => {
        try {
            const urlQuery = `character/?${name ? `name=${name}`
                : `page=${page}`}`
            const resp = await fetchData(urlQuery)
            const body = await resp.json()
            dispatch(setCharacters(body))
        } catch (error) {
            console.log(err);
        }
    }
}

export const getCharacter = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetchData(`character/${id}`)
            const body = await resp.json()
            console.log('BODY >>', body);
            dispatch(setCharacter(body))
        } catch (err) {
            console.log(err);
        }
    }
}

const setCharacters = (data) => ({
    type: types.LIST_CHARACTERS,
    payload: {
        info: data.info || {},
        results: data.results || []
    }
})

const setCharacter = (data) => ({
    type: types.ONE_CHARACTER,
    payload: { ...data }
})