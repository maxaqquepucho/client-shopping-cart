import React, { Fragment } from 'react';
import { Router, Location } from '@reach/router'
import posed, { PoseGroup } from 'react-pose';

import { Home } from "./pages/Home";
import { FinishOrder } from "./pages/FinishOrder"
import { GlobalStyle } from './style/GlobalStyled'

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

// Animation fadeInOut
const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

const App = () => {
  return (
    <Fragment>
        <GlobalStyle />
        <PosedRouter>          
          <Home path='/' />
          <FinishOrder path="/finishOrder/:order" />
        </PosedRouter>   
    </Fragment>
  );
}

export default App;
