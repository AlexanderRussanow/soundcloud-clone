import { TrackActions, TrackActionTypes, TrackState } from "../../types/track";

const initialState: TrackState = {
  tracks: [],
  error: "",
};

export const trackReducer = (
  state = initialState,
  action: TrackActions
): TrackState => {
  switch (action.type) {
    case TrackActionTypes.FETCH_TRACKS:
      return {
        ...state,
        tracks: action.payload,
        error: "",
      };
    case TrackActionTypes.FETCH_TRACKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
