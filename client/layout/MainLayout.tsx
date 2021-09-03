import { Container } from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: "90px" }}>{children}</Container>
    </div>
  );
};

export default MainLayout;
