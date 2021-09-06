import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import FileUpload from "../../components/FileUpload";
import StapWrapper from "../../components/StepWrapper";
import MainLayout from "../../layout/MainLayout";

const CreateTrack = () => {
   const [activeStep, setActiveStep] = React.useState(0);
   const [cover, setCover] = React.useState(null)
   const [song, setSong] = React.useState(null)

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  const next = () => {
    setActiveStep((prev) => prev + 1);
  };
  return (
    <MainLayout>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        You can upload your music here
      </h1>
      <StapWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 30 }}>
            <TextField style={{ marginTop: 10 }} label="Song name" />
            <TextField style={{ marginTop: 10 }} label="Song Authonr" />
            <TextField style={{ marginTop: 10 }} label="Lyric" multiline rows={5} />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setCover} accept="image/*" title='Upload Song Cover'>
            <Button>Upload</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setSong} accept="audio/*" title='Upload Song'>
            <Button>Upload</Button>
          </FileUpload>
        )}
      </StapWrapper>
      <Grid
        container
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Button disabled={activeStep === 0} onClick={back} variant="outlined">
          step back
        </Button>
        <Button disabled={activeStep > 2} onClick={next} variant="outlined">
          next step
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default CreateTrack;
