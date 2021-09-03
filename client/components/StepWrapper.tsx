import { Card, Container, Grid, Step, StepLabel, Stepper } from "@material-ui/core";
import React from "react";

type PropsType = {
  activeStep: number;
};

const steps = ["Fill in information", "Upload album cover", "Upload track"];

const StapWrapper: React.FC<PropsType> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent='center' style={{margin: '70px 0 30px', height: 450}}>
         <Card style={{width: 1000}}>
            {children}
         </Card>
      </Grid>
    </Container>
  );
};

export default StapWrapper;
