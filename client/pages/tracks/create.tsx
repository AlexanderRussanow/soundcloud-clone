import { Button, Grid } from "@material-ui/core";
import React from "react";
import StapWrapper from "../../components/StepWrapper";
import MainLayout from "../../layout/MainLayout";

const CreateTrack = () => {
   const [activeStep, setActiveStep] = React.useState(0)
   const back = () => {
      setActiveStep(prev => prev - 1)
   }

   const next = () => {
      setActiveStep(prev => prev + 1)
   }
  return (
    <MainLayout>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        You can upload your music here
      </h1>
      <StapWrapper activeStep={activeStep}></StapWrapper>
      <Grid container style={{ display: "flex", justifyContent: "space-between" }}>
        <Button disabled={activeStep === 0} onClick={back} variant="outlined">step back</Button>
        <Button disabled={activeStep > 2} onClick={next} variant="outlined">next step</Button>
      </Grid>
    </MainLayout>
  );
};

export default CreateTrack;
