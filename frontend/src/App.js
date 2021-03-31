import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddBook from './components/Book/AddBook';
import Books from './components/Book/Books';
import Navbar from './components/NavBar/NavBar';
import LoginUser from './components/User/Login';
import { RegisterUser } from './components/User/Register';
import { HomePage } from './components/HomePage';
import { ProfilePage } from './components/Profile/ProfilePage';
import UpdateProfile from './components/Profile/UpdateProfile';
import EditBook from './components/Book/EditBook';


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
        <Route exact path='/profile' component={ProfilePage}/>
        <Route exact path='/profile-update' component={UpdateProfile}/>
        <Route exact path='/book/edit/:id' component={EditBook}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
