import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import React from "react";
import MainLayout from "../../layout/MainLayout";

const TrackPage = () => {
  const track = {
    _id: "1",
    name: "11",
    artist: "111",
    text: "norm",
    listens: 2,
    picture: "string",
    audio: "string",
    comments: [],
  };
  const router = useRouter();
  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        Back
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} alt="" width={200} height={200} />
        <div style={{ margin: 30 }}>
          <h1>Track name: {track.name}</h1>
          <h2>Artist: {track.artist}</h2>
          <h3>Lisens: {track.listens}</h3>
        </div>
      </Grid>
      <h2>Liric:</h2>
      <p>{track.text}</p>
      <h2>Comments:</h2>
      {track.comments.length ? (
        <div>
          {track.comments.map((c) => (
            <div>
              <div>{c.nickname}</div>
              <div>{c.text}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>There are no commets yet...type the first one</div>
      )}

      <h2>Add your comment</h2>
      <Grid container>
        <TextField fullWidth label="Login" />
        <TextField fullWidth multiline rows={4} label="Your comment" />
        <Button variant="outlined">Send</Button>
      </Grid>
    </MainLayout>
  );
};

export default TrackPage;
