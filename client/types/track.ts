export interface IComent {
  _id: string;
  nickname: string;
  text: string;
  //   trackId: string;
}

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComent[];
}

export interface PlayerState {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

export enum PlayerActionType {
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  SET_ACTIVE = "SET_ACTIVE",
  SET_DURATION = "SET_DURATION",
  SET_CURRENT_TIME = "SET_CURRENT_TIME",
  SET_VOLUME = "SET_VOLUME",
}

interface PlayAction {
  type: PlayerActionType.PLAY;
}

interface PauseAction {
  type: PlayerActionType.PAUSE;
}

interface SetActiveAction {
  type: PlayerActionType.SET_ACTIVE;
  payload: ITrack;
}

interface SetCurrentAction {
  type: PlayerActionType.SET_CURRENT_TIME;
  payload: number;
}

interface SetDurationAction {
  type: PlayerActionType.SET_DURATION;
  payload: number;
}

interface SetVolumeAction {
  type: PlayerActionType.SET_VOLUME;
  payload: number;
}

export type PlayerAction =
  | PlayAction
  | PauseAction
  | SetActiveAction
  | SetCurrentAction
  | SetDurationAction
  | SetVolumeAction;

export interface TrackState {
  tracks: ITrack[];
  error: string
}

export enum TrackActionTypes {
  FETCH_TRACKS = "FETCH_TRACKS",
  FETCH_TRACKS_ERROR = "FETCH_TRACKS_ERROR",
}

export interface FetchTrackAction {
  type: TrackActionTypes.FETCH_TRACKS;
  payload: ITrack[]
}

export interface FetchTrackErrorAction {
  type: TrackActionTypes.FETCH_TRACKS_ERROR;
  payload: string
}

export type TrackActions = FetchTrackAction | FetchTrackErrorAction;
