import { GET_FARM } from './../actions/farm'

const initalState = {
  address: "",
  name: "",
  phone: "",
};

export default function Farm(state = initalState, action) {
  if (action.type === GET_FARM) {
    return action.payload;
  } else {
    return state;
  }
}
