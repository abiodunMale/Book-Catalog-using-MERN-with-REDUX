import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddBook from './components/Book/AddBook';
import Books from './components/Book/Books';
import Navbar from './components/NavBar/NavBar';
import LoginUser from './components/User/Login';
import { RegisterUser } from './components/User/Register';
import { HomePage } from './components/HomePage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/books' component={Books}/>
        <Route exact path='/addbook' component={AddBook}/>
        <Route exact path='/register' component={RegisterUser}/>
        <Route exact path='/login' component={LoginUser}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
