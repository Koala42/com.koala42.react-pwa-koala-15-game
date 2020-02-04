import React, { Fragment } from "react";
import { KeyBoardManagar } from "../hoc";

import { Instruction, Header, Game } from "../components";
import { Container, GameFactoryConsumer } from "../elements";

const Home = ({ eventType }) => {
  return (
    <Container>
      <GameFactoryConsumer>
        {({ values, methods }) => {
          return (
            <Fragment>
              <Header />
              <br />
              <Game eventType={eventType} {...values} {...methods} />
              <br />
              <Instruction />
            </Fragment>
          );
        }}
      </GameFactoryConsumer>
    </Container>
  );
};

export default KeyBoardManagar(Home);
