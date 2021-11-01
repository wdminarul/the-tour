
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from "./context/AuthProvider"
import Home from './Pages/Home/Home';
import Manage from './Pages/Manage/Manage';
import MyOrder from './Pages/MyOrder/MyOrder';
import NotFound from './Pages/NotFound/NotFound';
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
            {/* home section route  */}
            <Route exact path="/home">
                <Home></Home>
            </Route>
            {/* privet route system */}
            <PrivetRoute exact path="/manage">
              <Manage></Manage>
            </PrivetRoute>
              {/* privet route system */}
            <PrivetRoute exact path="/my-order">
              <MyOrder></MyOrder>
            </PrivetRoute>
            <Route exact path="/login">
            <Login></Login>
            </Route>
            {/* not found page route  */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
