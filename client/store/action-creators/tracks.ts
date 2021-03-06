import { TrackActionTypes } from "./../../types/track";
import { Dispatch } from "react";
import { TrackActions } from "../../types/track";
import axios from "axios";

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackActions>) => {
    try {
      const response = await axios.get("http://localhost/:5000/tracks");
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: `Fetching Error, can't download Tracks`,
      });
    }
  };
};
