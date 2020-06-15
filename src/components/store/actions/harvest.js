

export const SET_HARVEST = "SET_HARVEST"
export const CLEAR_HARVEST =  "CLEAR_HARVEST"

export const setHarvest = (payload) => {
    return {
        type: SET_HARVEST,
        payload
    }
}

export const clearHarvest = () => {
    return {
        type: CLEAR_HARVEST
    }
}