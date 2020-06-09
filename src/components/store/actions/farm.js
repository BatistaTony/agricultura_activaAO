
export const GET_FARM = "GET_FARM"

export function getFarm(payload){
    return {
      type: GET_FARM,
      payload
    };
}