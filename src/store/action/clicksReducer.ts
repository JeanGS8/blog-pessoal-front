import { type } from 'os';
import { action } from "./action";

export type clicksState = {
  clicks: number,
};

const initialState = {
  clicks: 0,
};

export const clickReducer = (state: clicksState = initialState, action: Action) => {
  switch(action.type){
    case 'CHANGE_CLICKS': {
      return { clicks: action.payload};
    }
    default: {
      return state;
    }
  }
};