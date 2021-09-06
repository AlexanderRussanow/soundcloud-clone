import { Container } from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: "90px" }}>{children}</Container>
      <Player/>
    </div>
  );
};

export default MainLayout;
