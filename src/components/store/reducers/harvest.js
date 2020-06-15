import { SET_HARVEST, CLEAR_HARVEST } from "./../actions/harvest";

const initalState = {
  harvest_id: 0,
  harvest_name: "",
  harvest_today: 0,
  total_harvest: 0,
  harvest_price: 0
};

export default function Harvest(state = initalState, action) {
  switch (action.type) {
    case SET_HARVEST: {
      return action.payload;
    }

    case CLEAR_HARVEST: {
      return initalState;
    }

    default: {
      return state;
    }
  }
}
