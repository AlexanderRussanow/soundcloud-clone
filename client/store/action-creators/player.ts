import { ITrack, PlayerAction, PlayerActionType } from "../../types/track";

export const playTrack = (): PlayerAction => {
  return { type: PlayerActionType.PLAY };
};

export const pauseTrack = (): PlayerAction => {
  return { type: PlayerActionType.PAUSE };
};

export const setActiveTrack = (payload: ITrack): PlayerAction => {
  return { type: PlayerActionType.SET_ACTIVE, payload };
};

export const setDurationTrack = (payload: number): PlayerAction => {
  return { type: PlayerActionType.SET_DURATION, payload };
};

export const setVolumeTrack = (payload: number): PlayerAction => {
  return { type: PlayerActionType.SET_VOLUME, payload };
};

export const setCurrentTimeTrack = (payload: number): PlayerAction => {
  return { type: PlayerActionType.SET_CURRENT_TIME, payload };
};
