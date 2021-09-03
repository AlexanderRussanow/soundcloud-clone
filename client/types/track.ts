export interface IComent {
   _id: string
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
