import { Box, Grid } from "@material-ui/core";
import React from "react";
import { ITrack } from "../types/track";
import TrackItem from "./TrackItem";

type PropsType = {
  tracks: ITrack[];
};

const TrackList: React.FC<PropsType> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} active={false}/>
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
