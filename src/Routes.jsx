
import React from "react";
import {Switch, Route} from "react-router-dom";

import Paginainicial from "./pages/PaginaInicial.jsx";

import Artworks from "./pages/Artworks";


const Routes = () => {
  return (
    <Switch>
       <Route exact path="/" component={Paginainicial} />
      <Route exact path="/artworks" component={Artworks} />
      <Route exact path="/artworks:id" component={Artworks} />


      
    </Switch>
  );
};

export default Routes;

//      <Route exact path="/artworks:id" component={ArtworksDetalhes} />
