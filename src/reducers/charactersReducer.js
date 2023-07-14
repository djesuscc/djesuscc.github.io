import { types } from "../types";

const initialState = {
    results: [],
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    },
    character: {}
}

export const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_CHARACTERS:
            const { info, results } = action.payload
            return {
                ...state,
                results: [...results],
                info: { ...info },
            }
        case types.ONE_CHARACTER:
            return {
                ...state,
                character: { ...action.payload }
            }
        default:
            return state
    }
}