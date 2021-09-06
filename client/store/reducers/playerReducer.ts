import { PlayerAction, PlayerActionType, PlayerState } from "../../types/track";

const initialState: PlayerState = {
  active: null,
  volume: 30,
  duration: 0,
  currentTime: 0,
  pause: true,
};

export const playerReducer = (
  state = initialState,
  action: PlayerAction
): PlayerState => {
  switch (action.type) {
    case PlayerActionType.PLAY:
      return { ...state, pause: false };
    case PlayerActionType.PAUSE:
      return { ...state, pause: true };
    case PlayerActionType.SET_ACTIVE:
      return { ...state, active: action.payload, duration: 0, currentTime: 0 };
    case PlayerActionType.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case PlayerActionType.SET_DURATION:
      return { ...state, duration: action.payload };
    case PlayerActionType.SET_VOLUME:
      return { ...state, volume: action.payload };
    default:
      return state;
  }
};
