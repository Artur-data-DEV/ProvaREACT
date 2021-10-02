import React from "react";
import { Container } from "react-bootstrap";
import Box from "../components/Box"


const Paginainicial = () => {
  return (
    <>
      <Container>
        <p>Artur</p>

        <Box title="Primeiro Card">
            <p>Lorem Lorem Lorem Lorem</p>
           

            <p>Lorem Lorem Lorem Lorem</p>
        </Box>
        <Box title="Segundo Card" />
        <Box title="Terceiro Card" />
      </Container>
    </>
  );
};

export default Paginainicial;
