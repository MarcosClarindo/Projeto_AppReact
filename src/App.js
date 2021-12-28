import { BrowserRouter as Router,
Switch,
Route} from "react-router-dom/cjs/react-router-dom.min";

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomersEdit from './pages/customers/Edit'
import Home from "./pages/Home";


const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/edit/:id">
            <TemplatePage title="Editar Cliente" Component={CustomersEdit}/>  
          </Route>
          <Route path="/customers/add">
            <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister}/>  
          </Route>

          <Route path="/customers">
            <TemplatePage title="Listas de Clientes" Component={CustomersList}/>  
          </Route>
          
          <Route path="/">
            <TemplatePage title="Página Inicial" Component={Home}/> 
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
}

export default App;
