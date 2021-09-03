import { Card, Grid, IconButton } from "@material-ui/core";
import { Delete, Pause, PlayArrow } from "@material-ui/icons";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { ITrack } from "../types/track";
// import styles from '../styles/TrackItem.module.scss'

type PropsType = {
  track: ITrack;
  active?: boolean;
};

const TrackItem: React.FC<PropsType> = ({ track, active = true }) => {
  const router = useRouter();
  return (
    <>
      <Card
        // className={styles.track}
        onClick={() => router.push("/tracks/" + track._id)}
        style={{
          margin: 20,
          padding: 10,
          display: "flex",
          alignItems: "center",
          cursor: 'pointer'
        }}
      >
        <IconButton onClick={(e) => e.stopPropagation()}>{active ? <Pause /> : <PlayArrow />}</IconButton>
        <img src={track.picture} alt="" width={70} height={70} />
        <Grid
          container
          direction="column"
          style={{ margin: "0 20px", width: 200 }} onClick={(e) => e.stopPropagation}
        >
          <div>{track.name}</div>
          <div style={{ fontSize: 12, color: "gray" }}> {track.artist}</div>
        </Grid>
        {active && <div>00:00 / 2:40</div>}
        <IconButton onClick={(e) => e.stopPropagation()} style={{ marginLeft: "auto" }}>
          <Delete />
        </IconButton>
      </Card>
      {/* <style jsx>
        {`
          .tracks {
            margin: 20px;
            padding: 10px;
            display: flex;
            align-items: center;
          }
        `}
      </style> */}
    </>
  );
};

export default TrackItem;
