
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from "./context/AuthProvider"
import Home from './Pages/Home/Home';
import Manage from './Pages/Manage/Manage';
import MyOrder from './Pages/MyOrder/MyOrder';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Tuor/Login/Login';
import PrivetRoute from './Privet/PrivetRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
                <Home></Home>
            </Route>
            <PrivetRoute exact path="/manage">
              <Manage></Manage>
            </PrivetRoute>
            <PrivetRoute exact path="/my-order">
              <MyOrder></MyOrder>
            </PrivetRoute>
            <Route exact path="/login">
            <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
        
    </div>
  );
}

export default App;
