import { GET_FARM, CLEAR_FARM } from "./../actions/farm";

const initalState = {
  name: "",
  phone_number: "",
  address_farm: "",
};

export default function Farm(state = initalState, action) {
  switch (action.type) {
    case GET_FARM: {
      return action.payload;
    }
    case CLEAR_FARM: {
      return initalState;
    }

    default: {
      return state;
    }
  }
}
