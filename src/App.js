import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import Dashboard from './containers/Dashboard';
import PrivateRoute from './containers/PrivateRoute';
import PublicRoute from './containers/PublicRoute';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Switch>
//           <Route path="/" exact component={Login} />
//           <Route path="/register" exact component={Register} />
//           <Route path="/dashboard" component={Dashboard} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Login} path="/" exact />
          <PublicRoute restricted={false} component={Register} path="/register" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
