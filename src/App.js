import { BrowserRouter as Router,
Switch,
Route} from "react-router-dom/cjs/react-router-dom.min";

import Home from "./pages/Home";


const App = () => {
  return (
   <Router>
     <Switch>
       <Route path="/">
         <Home/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
