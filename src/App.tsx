import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import newRequestItems from "./Pages/newRequestItems";
import DoneRequestItems from "./Pages/DoneRequest";
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/fazerPedido" component={newRequestItems} />
          <Route path="/pedido/:email" component={DoneRequestItems} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
