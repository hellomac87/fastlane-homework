import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductsPage from "page/ProductsPage";
import ProductsWithReduxPage from "page/ProductsWithReduxPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/products" component={ProductsWithReduxPage} />
      </Switch>
    </Router>
  );
}

export default App;
