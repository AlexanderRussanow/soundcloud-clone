import { Box, Button, Card, Container, Grid } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import React from "react";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layout/MainLayout";
import { ITrack } from "../../types/track";

const Tracks = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "11",
      artist: "111",
      text: "norm",
      listens: 2,
      picture: "string",
      audio: "string",
      comments: [],
    },
    {
      _id: "2",
      name: "22",
      artist: "222",
      text: "norm",
      listens: 2,
      picture: "string",
      audio: "string",
      comments: [],
    },
    {
      _id: "3",
      name: "33",
      artist: "333",
      text: "norm",
      listens: 2,
      picture: "string",
      audio: "string",
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 1100 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h2>Track list there yaaaaae!</h2>
              <Button onClick={() => router.push("/tracks/create")}>
                Upload song
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Tracks;
