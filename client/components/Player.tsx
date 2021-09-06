import { Grid, IconButton } from "@material-ui/core";
import { Pause, PlayArrow, VolumeUp } from "@material-ui/icons";
import React from "react";
import { useAction } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";
import styles from "../styles/Player.module.scss";
import TrackProgress from "./TrackProgress";

let audio;

const Player = () => {
  const { active, currentTime, duration, pause, volume } = useTypeSelector(
    (state) => state.player
  );
  const {
    playTrack,
    pauseTrack,
    setActiveTrack,
    setCurrentTimeTrack,
    setVolumeTrack,
    setDurationTrack,
  } = useAction();

  React.useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDurationTrack(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTimeTrack(Math.ceil(audio.currentTime));
      };
    }
  };

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.currentTarget.value) / 100;
    setVolumeTrack(Number(e.currentTarget.value));
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.currentTarget.value);
    setCurrentTimeTrack(Number(e.currentTarget.value));
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ margin: "0 10px", width: 200 }}
        // onClick={(e) => e.stopPropagation}
      >
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
      />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
