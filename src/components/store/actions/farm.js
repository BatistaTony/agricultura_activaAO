
export const GET_FARM = "GET_FARM";
export const CLEAR_FARM = "CLEAR_FARM";

export function getFarm(payload){
    return {
      type: GET_FARM,
      payload
    };
}

export function clearFarm() {
  return {
    type: CLEAR_FARM
  }
}